// Utility functions for detecting iframe interactions

export interface IframeEvent {
  type: 'close' | 'purchase' | 'cancel' | 'success' | 'error';
  data?: unknown;
  timestamp: number;
}

export class IframeDetector {
  private listeners: ((event: IframeEvent) => void)[] = [];
  private isListening = false;
  private lastActivity = Date.now();
  private activityTimeout: NodeJS.Timeout | null = null;

  constructor(private options: {
    timeoutMs?: number;
    checkIntervalMs?: number;
  } = {}) {
    this.options.timeoutMs = options.timeoutMs || 30000; // 30 seconds
    this.options.checkIntervalMs = options.checkIntervalMs || 1000; // 1 second
  }

  addListener(callback: (event: IframeEvent) => void) {
    this.listeners.push(callback);
  }

  removeListener(callback: (event: IframeEvent) => void) {
    const index = this.listeners.indexOf(callback);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }

  private emit(event: IframeEvent) {
    this.listeners.forEach(listener => listener(event));
  }

  startListening() {
    if (this.isListening) return;
    this.isListening = true;
    this.lastActivity = Date.now();

    // Method 1: Listen for postMessage events
    this.setupMessageListener();

    // Method 2: Monitor page visibility changes
    this.setupVisibilityListener();

    // Method 3: Monitor focus changes
    this.setupFocusListener();

    // Method 4: Activity timeout (fallback)
    this.setupActivityTimeout();
  }

  stopListening() {
    this.isListening = false;
    if (this.activityTimeout) {
      clearTimeout(this.activityTimeout);
      this.activityTimeout = null;
    }
  }

  private setupMessageListener() {
    const handleMessage = (event: MessageEvent) => {
      this.lastActivity = Date.now();

      // Check if message is from Lemon Squeezy
      if (event.origin.includes('lemonsqueezy.com') || event.origin.includes('useheadstart.com') || event.origin.includes('headstart.lemonsqueezy.com')) {
        if (event.data && typeof event.data === 'object') {
          const { type, action, event: eventType } = event.data;

          if (type === 'close' || action === 'close' || eventType === 'close') {
            this.emit({ type: 'close', data: event.data, timestamp: Date.now() });
            return;
          }

          if (type === 'purchase' || action === 'purchase' || eventType === 'purchase') {
            this.emit({ type: 'purchase', data: event.data, timestamp: Date.now() });
            return;
          }

          if (type === 'success' || action === 'success' || eventType === 'success') {
            this.emit({ type: 'success', data: event.data, timestamp: Date.now() });
            return;
          }
        }

        // Handle string messages
        if (typeof event.data === 'string') {
          const data = event.data.toLowerCase();
          if (data.includes('close') || data.includes('cancel') || data.includes('exit')) {
            this.emit({ type: 'close', data: event.data, timestamp: Date.now() });
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);
  }

  private setupVisibilityListener() {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // If page becomes hidden, it might mean user clicked X or navigated away
        setTimeout(() => {
          if (document.hidden) {
            this.emit({ type: 'close', data: { reason: 'visibility_change' }, timestamp: Date.now() });
          }
        }, 1000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  private setupFocusListener() {
    const handleFocusChange = () => {
      // If focus moves away from the page, it might indicate user interaction with iframe
      if (!document.hasFocus()) {
        this.lastActivity = Date.now();
      }
    };

    window.addEventListener('blur', handleFocusChange);
    window.addEventListener('focus', handleFocusChange);
  }

  private setupActivityTimeout() {
    const checkActivity = () => {
      if (!this.isListening) return;

      const timeSinceLastActivity = Date.now() - this.lastActivity;

      // If no activity for a while, it might mean user closed the iframe
      if (timeSinceLastActivity > this.options.timeoutMs!) {
        this.emit({ type: 'close', data: { reason: 'timeout' }, timestamp: Date.now() });
        return;
      }

      this.activityTimeout = setTimeout(checkActivity, this.options.checkIntervalMs);
    };

    this.activityTimeout = setTimeout(checkActivity, this.options.checkIntervalMs);
  }

  // Method to manually trigger activity (call this when user interacts with iframe)
  updateActivity() {
    this.lastActivity = Date.now();
  }
}

// Singleton instance
export const iframeDetector = new IframeDetector();
