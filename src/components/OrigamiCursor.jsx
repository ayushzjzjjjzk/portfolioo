import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function OrigamiCursor() {
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 40, mass: 2 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const targetScaleX = useMotionValue(1);
  const scaleX = useSpring(targetScaleX, { damping: 20, stiffness: 150 });

  const angle = useMotionValue(0);

  const { scrollYProgress, scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const mobileAngle = useMotionValue(0);
  const mobileY = useTransform(scrollYProgress, [0, 1], ["10vh", "85vh"]);
  const mobileX = useTransform(scrollYProgress, (v) =>
    Math.sin(v * Math.PI * 8) * 15 - 15
  );

  // Detect mobile + mouse tracking
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    let moveCursor = null;

    if (!("ontouchstart" in window)) {
      moveCursor = (e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      if (moveCursor) window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Animation loop
  useAnimationFrame(() => {
    if (isMobile) {
      const sv = scrollVelocity.get();

      if (Math.abs(sv) > 20) {
        const targetPitch = sv > 0 ? -114 : 66;
        mobileAngle.set(
          mobileAngle.get() + (targetPitch - mobileAngle.get()) * 0.1
        );
      } else {
        mobileAngle.set(
          mobileAngle.get() + (24 - mobileAngle.get()) * 0.05
        );
      }
      return;
    }

    const dx = mouseX.get() - cursorX.get();
    const dy = mouseY.get() - cursorY.get();
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 5) {
      if (dx > 2) targetScaleX.set(1);
      else if (dx < -2) targetScaleX.set(-1);

      const pitchRad = Math.atan2(dy, Math.abs(dx));
      const pitchDeg = pitchRad * (180 / Math.PI);
      const targetPitch = pitchDeg + 24;

      angle.set(angle.get() + (targetPitch - angle.get()) * 0.15);
    } else {
      angle.set(angle.get() + (0 - angle.get()) * 0.05);
    }
  });

  // SVG Crane
  const CraneIcon = () => (
    <div style={{ width: 48, height: 48 }}>
      <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
        <motion.g
          animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.g
            animate={{ rotate: [12, -18, 12] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <polygon points="45,50 55,50 30,5" fill="#E2E2E2" />
          </motion.g>

          <polygon points="35,55 45,50 55,75" fill="#EEEEEE" />
          <polygon points="35,55 45,50 10,30" fill="#FAFAFA" />
          <polygon points="55,50 75,55 55,75" fill="#E8E8E8" />
          <polygon points="45,50 55,50 55,75" fill="#FFFFFF" />
          <polygon points="55,50 65,40 85,20" fill="#FFFFFF" />
          <polygon points="65,40 75,55 85,20" fill="#E0E0E0" />
          <polygon points="85,20 80,26 95,30" fill="#EAEAEA" />

          <motion.g
            animate={{ rotate: [-15, 18, -15] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <polygon points="45,50 55,50 15,80" fill="#F9F9F9" />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );

  // Mobile view
  if (isMobile) {
    return (
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          right: 16,
          zIndex: 9999,
          pointerEvents: "none",
          y: mobileY,
          x: mobileX,
        }}
      >
        <motion.div
          style={{
            rotate: mobileAngle,
            scaleX: -1,
            x: -24,
            y: -24,
          }}
        >
          <CraneIcon />
        </motion.div>
      </motion.div>
    );
  }

  // Desktop view
  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
        x: cursorX,
        y: cursorY,
        willChange: "transform",
      }}
    >
      <motion.div
        style={{
          scaleX,
          rotate: angle,
          x: -24,
          y: -24,
        }}
      >
        <CraneIcon />
      </motion.div>
    </motion.div>
  );
}