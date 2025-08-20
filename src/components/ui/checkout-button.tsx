"use client";

import { useCheckoutOverlay } from "@/hooks/use-checkout-overlay";
import Button from "./button";
import CheckoutOverlay from "./checkout-overlay";

interface CheckoutButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  checkoutUrl?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CheckoutButton = ({
  children,
  variant = "primary",
  className,
  checkoutUrl,
  onClick,
  ...props
}: CheckoutButtonProps) => {
  const { isOpen, openOverlay, closeOverlay } = useCheckoutOverlay();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === "primary") {
      e.preventDefault();
      openOverlay();
    }
    onClick?.(e);
  };

  return (
    <>
      <Button
        variant={variant}
        className={className}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Button>

      <CheckoutOverlay
        isOpen={isOpen}
        onClose={closeOverlay}
        checkoutUrl={checkoutUrl}
      />
    </>
  );
};

export default CheckoutButton;
