import { useCallback, useEffect } from 'react';

interface UseIframeCommunicationProps {
  isOpen: boolean;
  onClose: () => void;
  allowedOrigins?: string[];
}

export const useIframeCommunication = ({
  isOpen,
  onClose,
  allowedOrigins = ['lemonsqueezy.com', 'useheadstart.com']
}: UseIframeCommunicationProps) => {

  const handleMessage = useCallback((event: MessageEvent) => {
    // Check if message is from allowed origins
    const isAllowedOrigin = allowedOrigins.some(origin =>
      event.origin.includes(origin)
    );

    if (!isAllowedOrigin) return;

    // Handle different types of messages
    if (event.data && typeof event.data === 'object') {
      const { type, action, event: eventType } = event.data;

      // Check for various close events
      if (type === 'close' || action === 'close' || eventType === 'close') {
        onClose();
        return;
      }

      // Check for purchase completion
      if (type === 'purchase' || action === 'purchase' || eventType === 'purchase') {
        onClose();
        return;
      }

      // Check for checkout completion
      if (type === 'checkout' || action === 'checkout' || eventType === 'checkout') {
        onClose();
        return;
      }

      // Check for any success events
      if (type === 'success' || action === 'success' || eventType === 'success') {
        onClose();
        return;
      }
    }

    // Handle string messages
    if (typeof event.data === 'string') {
      const data = event.data.toLowerCase();
      if (data.includes('close') || data.includes('cancel') || data.includes('exit')) {
        onClose();
      }
    }
  }, [allowedOrigins, onClose]);

  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      // If page becomes hidden, it might mean user clicked X or navigated away
      setTimeout(() => {
        if (document.hidden) {
          onClose();
        }
      }, 1000);
    }
  }, [onClose]);

  const handleBeforeUnload = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    // Add event listeners
    window.addEventListener('message', handleMessage);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup function
    return () => {
      window.removeEventListener('message', handleMessage);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isOpen, handleMessage, handleVisibilityChange, handleBeforeUnload]);

  return {
    handleMessage,
    handleVisibilityChange,
    handleBeforeUnload
  };
};
