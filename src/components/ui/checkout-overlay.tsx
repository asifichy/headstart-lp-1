"use client";

import { useIframeCommunication } from "@/hooks/use-iframe-communication";
import { iframeDetector } from "@/utils/iframe-detector";
import { useEffect, useState } from "react";

interface CheckoutOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrl?: string;
}

const CheckoutOverlay = ({
  isOpen,
  onClose,
  checkoutUrl = "https://useheadstart.com/buy/afa4da43-7139-416a-a989-921caf0f5e85?embed=1&media=0",
}: CheckoutOverlayProps) => {
  const [isLoading, setIsLoading] = useState(true);

  // Use the iframe communication hook
  useIframeCommunication({ isOpen, onClose });

  // Reset loading state when overlay opens
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [isOpen]);

  // Use the advanced iframe detector
  useEffect(() => {
    if (!isOpen) return;

    const handleIframeEvent = (event: { type: string; data?: unknown; timestamp: number }) => {
      if (event.type === 'close' || event.type === 'purchase' || event.type === 'success') {
        onClose();
      }
    };

    iframeDetector.addListener(handleIframeEvent);
    iframeDetector.startListening();

    return () => {
      iframeDetector.removeListener(handleIframeEvent);
      iframeDetector.stopListening();
    };
  }, [isOpen, onClose]);

  // Handle escape key and body scroll prevention
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);

      // Store current scroll position
      const scrollY = window.scrollY;

      // Prevent body scroll when overlay is open
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);

      // Restore scroll position and body styles
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';

      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    };
  }, [isOpen, onClose]);

  // Handle iframe load
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Monitor iframe URL changes to detect navigation/close
  const handleIframeLoadStart = () => {
    setIsLoading(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`relative w-full md:max-w-xl h-screen md:h-[80vh] bg-white lg:rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200`}
        onClick={(e) => e.stopPropagation()}
      >

        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-4 border-blue-40 border-t-transparent rounded-full animate-spin"></div>
              <p>Loading checkout...</p>
            </div>
          </div>
        )}

        {/* Iframe Container */}
        <div className="relative w-full h-full">
          <iframe
            src={checkoutUrl}
            className="w-full h-full border-0"
            title="Lemon Squeezy Checkout"
            allow="payment"
            onLoad={handleIframeLoad}
            onLoadStart={handleIframeLoadStart}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutOverlay;
