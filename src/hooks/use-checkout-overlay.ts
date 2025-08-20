import { useCallback, useState } from "react";

interface UseCheckoutOverlayReturn {
  isOpen: boolean;
  openOverlay: () => void;
  closeOverlay: () => void;
  toggleOverlay: () => void;
}

export const useCheckoutOverlay = (): UseCheckoutOverlayReturn => {
  const [isOpen, setIsOpen] = useState(false);

  const openOverlay = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeOverlay = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleOverlay = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return {
    isOpen,
    openOverlay,
    closeOverlay,
    toggleOverlay,
  };
};
