import { useEffect } from "react";

export default function Oneko() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/oneko/oneko.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}