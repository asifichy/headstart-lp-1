"use client";

import { useCheckoutOverlay } from "@/hooks/use-checkout-overlay";
import { cn } from "@/lib/utils";

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
      window.open("https://headstart.lemonsqueezy.com/buy/31e66ad0-9c4e-4541-b553-d8781482affc", "_blank");
      // openOverlay();
    } else {
      window.open(" https://headstart.lemonsqueezy.com/buy/26a00f6b-e3ca-418d-b1ee-e93f6e21c234", "_blank");
    }
    onClick?.(e);
  };

  return (
    <>
      <button
        className={cn(
          "relative group cursor-pointer sm:min-w-[180px] w-full xs:w-[180px] h-[60px] xl:w-[258px] xl:h-[78px]  text-nowrap inline-flex items-center justify-center rounded-full xl:text-2xl md:text-lg text-base leading-[1.25] overflow-hidden text-main gap-2",
          variant === "primary" && "bg-grad font-bold",
          variant === "secondary" && "bg-gray-5/10 font-medium",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {/* <span className="absolute -rotate-45 -left-[70px] block h-full top-1/2 -translate-y-1/2 w-10 bg-[#ffffff48] blur-[10px] from-white/10 via-white/50 to-white/10 group-hover:left-[150%] duration-1200  delay-50" /> */}
        {children}

        {
          variant === "secondary" && (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#313647" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )
        }

      </button>

      {/* <CheckoutOverlay
        isOpen={isOpen}
        onClose={closeOverlay}
      /> */}
    </>
  );
};

export default Button;