"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function InputCustom({ isPassword, ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{ position: "relative", display: "inline-block", width: "100%" }}
    >
      <input
        {...props}
        type={
          isPassword
            ? showPassword
              ? "text"
              : "password"
            : props.type || "text"
        }
        style={{ width: "100%", paddingRight: "40px" }} // espacio para el icono
      />

      {isPassword && (
        <span
          onClick={() => setShowPassword((v) => !v)}
          style={{
            position: "absolute",
            right: "10px",
            top: "55%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </span>
      )}
    </div>
  );
}
