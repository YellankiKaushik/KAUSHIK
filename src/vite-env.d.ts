/// <reference types="vite/client" />

interface Window {
  gtag?: (
    command: "event" | "config" | "js" | string,
    eventNameOrId: string,
    params?: Record<string, string | number | boolean>
  ) => void;
}
