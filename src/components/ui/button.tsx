"use client";

import { useCheckoutOverlay } from "@/hooks/use-checkout-overlay";
import { cn } from "@/lib/utils";
import CheckoutOverlay from "./checkout-overlay";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const Button = ({
  children,
  className,
  variant = "primary",
  onClick,
  ...props
}: ButtonProps) => {
  const { isOpen, openOverlay, closeOverlay } = useCheckoutOverlay();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === "primary") {
      e.preventDefault();
      openOverlay();
    } else {
      window.open("https://www.figma.com/design/UqJoZJUp7FZH6BcAPvMyoA/Headstart-AI-Master-Kit--Preview-?node-id=0-1&p=f&t=fM5FFgW6HjpUmfEf-0", "_blank");
    }
    onClick?.(e);
  };

  return (
    <>
      <button
        className={cn(
          "relative group cursor-pointer sm:min-w-[180px] w-full xs:w-[180px] h-[60px] xl:w-[258px] xl:h-[78px]  text-nowrap inline-flex items-center justify-center rounded-full font-bold xl:text-2xl md:text-lg text-base leading-[1.25] overflow-hidden",
          variant === "primary" && "bg-blue-40 text-white",
          variant === "secondary" && "bg-footer-bg text-main",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        <span className="absolute -rotate-45 -left-[70px] block h-full top-1/2 -translate-y-1/2 w-10 bg-[#ffffff48] blur-[10px] from-white/10 via-white/50 to-white/10 group-hover:left-[150%] duration-1200  delay-50" />
        {children}
      </button>

      <CheckoutOverlay
        isOpen={isOpen}
        onClose={closeOverlay}
      />
    </>
  );
};

export default Button;