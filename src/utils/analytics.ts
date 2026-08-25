export type AnalyticsValue = string | number | boolean;
export type AnalyticsParams = Record<string, AnalyticsValue>;

const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
const isDevelopment = import.meta.env.DEV;
const gtagScriptId = "ga4-gtag-script";

const logAnalyticsDebug = (eventName: string, params?: AnalyticsParams) => {
  if (isDevelopment) {
    console.debug(`[Analytics] ${eventName}`, params ?? {});
  }
};

const hasGtag = () =>
  typeof window !== "undefined" && typeof window.gtag === "function";

export const initializeAnalytics = () => {
  if (typeof window === "undefined" || window.__gaInitialized) {
    return;
  }

  window.__gaInitialized = true;

  if (!gaMeasurementId) {
    if (isDevelopment) {
      console.debug("[Analytics] GA4 measurement ID is not configured");
    }
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || ((...args) => {
    window.dataLayer?.push(args);
  });
  window.gtag("js", new Date());
  window.gtag("config", gaMeasurementId, { send_page_view: false });

  if (!document.getElementById(gtagScriptId)) {
    const script = document.createElement("script");
    script.id = gtagScriptId;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
      gaMeasurementId
    )}`;
    document.head.appendChild(script);
  }
};

export const trackEvent = (eventName: string, params?: AnalyticsParams) => {
  logAnalyticsDebug(eventName, params);

  if (!hasGtag()) {
    return;
  }

  try {
    window.gtag("event", eventName, params);
  } catch {
    // Analytics must never interrupt portfolio interactions.
  }
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  const params = {
    page_path: pagePath,
    page_title: pageTitle || document.title,
  };

  logAnalyticsDebug("page_view", params);

  if (!hasGtag()) {
    return;
  }

  try {
    window.gtag("config", gaMeasurementId, params);
  } catch {
    // Analytics must never interrupt navigation.
  }
};

export const trackResumeDownload = (params: {
  fileName: string;
  fileUrl: string;
  pagePath: string;
  linkText: string;
  location: string;
}) => {
  trackEvent("resume_download", {
    file_name: params.fileName,
    file_url: params.fileUrl,
    page_path: params.pagePath,
    link_text: params.linkText,
    location: params.location,
  });
};
