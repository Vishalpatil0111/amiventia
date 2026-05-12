"use client";

import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        base,
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

const base =
  "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95";

const variants = {
  primary:
    "bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white hover:from-[#E85A2A] hover:to-[#E07A10] focus:ring-[#FF6B35] shadow-lg hover:shadow-xl",

  secondary:
    "bg-white text-[#FF6B35] border-2 border-[#FF6B35] hover:bg-[#FF6B35] hover:text-white focus:ring-[#FF6B35]",

  outline:
    "bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-[#FF6B35] focus:ring-white",
};

const sizes = {
  sm: "h-10 px-5 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};
