import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { FaXTwitter } from "react-icons/fa6";
import { SiLivechat } from "react-icons/si";

/* ---------------- UI COMPONENTS ---------------- */

const Title = ({ children }) => (
  <h1 className="text-3xl font-semibold text-center tracking-tight">
    {children}
  </h1>
);

const Label = ({ children }) => (
  <label className="text-sm font-medium text-gray-700">
    {children}
  </label>
);

const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm outline-none
    focus:border-black transition ${className}`}
    {...props}
  />
);

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`w-full min-h-[120px] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm outline-none
    resize-none focus:border-black transition ${className}`}
    {...props}
  />
);

const Button = ({ children, disabled, className = "", ...props }) => (
  <button
    disabled={disabled}
    className={`w-full rounded-md bg-black px-4 py-2 text-sm text-white
    hover:bg-gray-900 transition disabled:opacity-60 disabled:cursor-not-allowed
    ${className}`}
    {...props}
  >
    {children}
  </button>
);

/* ---------------- CONTACT COMPONENT ---------------- */

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const validateEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSending(true);

    try {
      const res = await axios.post("/api/send-email", {
        email,
        message,
      });

      if (res.data?.success) {
        toast.success("Message sent successfully");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send message");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center px-6 md:px-32 lg:px-64 mt-10 pb-16">
      <Title>Say Hello</Title>

      <div className="w-full max-w-2xl mt-8 flex flex-col gap-6">
        {/* Quick Contact */}
        <div>
          <p className="text-base">x dm is recommended</p>

          <div className="flex gap-3 mt-3">
            <a
              href="https://cal.com/ayush-singh-ramola-dfjxej/15min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 bg-green-400 text-black px-4 py-2 rounded-md text-sm hover:bg-green-500 transition cursor-pointer">
                <SiLivechat size={18} />
                book a meet
              </button>
            </a>

            <a
              href="https://twitter.com/messages/compose?recipient_id=1705435550101155840"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition cursor-pointer">
                <FaXTwitter size={18} />
                dm on x
              </button>
            </a>
          </div>
        </div>

        {/* Email Form */}
        <div>
          <p className="text-base mb-3">you can mail also but its not working right now</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label>Your Email</Label>
              <Input
                type="email"
                placeholder="not working right now you can dm on x"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <Label>Your Message</Label>
              <Textarea
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                minLength={5}
              />
            </div>

            <Button disabled={isSending} className="bg-black hover: bg-blue-500 cursor-pointer">
              {isSending ? "Sending..." : "Send message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
