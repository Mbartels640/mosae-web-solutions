// This file is used to declare global types that TypeScript doesn't know about by default.
// By extending the Window interface, we can inform TypeScript about properties
// added by third-party scripts, like Google Analytics.

export {};

declare global {
  interface Window {
    // The dataLayer for Google Tag Manager/Analytics
    dataLayer: any[];
    // The gtag function for Google Analytics
    gtag: (...args: any[]) => void;
  }
}
