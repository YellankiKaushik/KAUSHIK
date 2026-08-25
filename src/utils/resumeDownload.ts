import { resumeFileName, resumeHref } from "@/config/resume";
import { trackResumeDownload } from "@/utils/analytics";

type ResumeDownloadContext = {
  location: string;
  linkText: string;
};

const notificationSessionKey = `resume-notification:${resumeFileName}`;
let notificationSentInMemory = false;

const getResumeFileUrl = () => {
  if (typeof window === "undefined") {
    return resumeHref;
  }

  return new URL(resumeHref, window.location.origin).href;
};

const getPagePath = () => {
  if (typeof window === "undefined") {
    return "/";
  }

  return `${window.location.pathname}${window.location.search}`;
};

const shouldSendNotification = () => {
  if (notificationSentInMemory) {
    return false;
  }

  try {
    if (window.sessionStorage.getItem(notificationSessionKey)) {
      notificationSentInMemory = true;
      return false;
    }

    window.sessionStorage.setItem(notificationSessionKey, "sent");
  } catch {
    // Fall back to in-memory suppression when sessionStorage is unavailable.
  }

  notificationSentInMemory = true;
  return true;
};

const notifyResumeDownload = (context: ResumeDownloadContext) => {
  if (typeof window === "undefined" || !shouldSendNotification()) {
    return;
  }

  const body = JSON.stringify({
    fileName: resumeFileName,
    fileUrl: getResumeFileUrl(),
    pagePath: getPagePath(),
    linkText: context.linkText,
    referrer: document.referrer || "",
  });

  void fetch("/api/resume-download-notification", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
    keepalive: true,
  }).catch(() => {
    if (import.meta.env.DEV) {
      console.debug("[Resume] notification request failed");
    }
  });
};

export const handleResumeDownload = (context: ResumeDownloadContext) => {
  trackResumeDownload({
    fileName: resumeFileName,
    fileUrl: getResumeFileUrl(),
    pagePath: getPagePath(),
    linkText: context.linkText,
    location: context.location,
  });

  notifyResumeDownload(context);
};
