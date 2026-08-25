/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  __gaInitialized?: boolean;
  dataLayer?: unknown[][];
  gtag?: (
    command: "event" | "config" | "js" | string,
    eventNameOrId: string | Date,
    params?: Record<string, string | number | boolean>
  ) => void;
}
