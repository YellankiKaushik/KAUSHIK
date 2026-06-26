export type AnalyticsParams = Record<string, string | number | boolean>;

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
