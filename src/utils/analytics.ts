export type AnalyticsParams = Record<string, string | number | boolean>;

const gaMeasurementId = "G-E5L9TZR005";

export const trackEvent = (
  eventName: string,
  params?: AnalyticsParams
) => {
  if (
    typeof window !== "undefined" &&
    typeof window.gtag === "function"
  ) {
    window.gtag("event", eventName, params);
  }
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (
    typeof window !== "undefined" &&
    typeof window.gtag === "function"
  ) {
    window.gtag("config", gaMeasurementId, {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
  }
};
