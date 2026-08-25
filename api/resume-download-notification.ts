type ResumeDownloadRequestBody = {
  fileName?: unknown;
  fileUrl?: unknown;
  pagePath?: unknown;
  linkText?: unknown;
  referrer?: unknown;
};

type ResumeNotificationDetails = {
  timestamp: string;
  fileName: string;
  fileUrl: string;
  pagePath: string;
  linkText: string;
  referrer: string;
  userAgent: string;
};

type HeaderValue = string | string[] | undefined;

type ApiRequest = {
  method?: string;
  body?: unknown;
  headers?: Record<string, HeaderValue>;
};

type NotificationResponseBody = {
  ok: boolean;
  skipped?: boolean;
  error?: string;
};

type ApiResponse = {
  status: (statusCode: number) => {
    json: (body: NotificationResponseBody) => void;
  };
  setHeader: (name: string, value: string) => void;
};

const maxFieldLength = 500;

const sendJson = (
  res: ApiResponse,
  statusCode: number,
  body: NotificationResponseBody
) => {
  res.status(statusCode).json(body);
};

const sanitizeField = (value: unknown, fallback = "") => {
  if (typeof value !== "string") {
    return fallback;
  }

  return value.trim().slice(0, maxFieldLength);
};

const getHeader = (
  headers: ApiRequest["headers"],
  name: string
) => {
  const value = headers?.[name];

  if (Array.isArray(value)) {
    return value.join(", ");
  }

  return value;
};

const createEmailText = (details: ResumeNotificationDetails) => [
  "A resume download was triggered from the portfolio.",
  "",
  `Timestamp: ${details.timestamp}`,
  `Resume file: ${details.fileName}`,
  `Resume URL: ${details.fileUrl}`,
  `Page path: ${details.pagePath}`,
  `Link text: ${details.linkText}`,
  `Referrer: ${details.referrer || "Not available"}`,
  `User-Agent: ${details.userAgent || "Not available"}`,
].join("\n");

const sendResumeNotificationEmail = async (
  details: ResumeNotificationDetails
) => {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RESUME_NOTIFICATION_EMAIL;
  const from = process.env.EMAIL_FROM;

  if (!apiKey || !to || !from) {
    return { skipped: true };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: "Portfolio: Resume downloaded",
      text: createEmailText(details),
    }),
  });

  if (!response.ok) {
    throw new Error("Resume notification email failed.");
  }

  return { skipped: false };
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { ok: false, error: "Method not allowed." });
  }

  let body: ResumeDownloadRequestBody;

  try {
    body =
      typeof req.body === "string"
        ? (JSON.parse(req.body) as ResumeDownloadRequestBody)
        : ((req.body ?? {}) as ResumeDownloadRequestBody);
  } catch {
    return sendJson(res, 400, { ok: false, error: "Invalid JSON body." });
  }

  const details: ResumeNotificationDetails = {
    timestamp: new Date().toISOString(),
    fileName: sanitizeField(body.fileName, "Unknown resume file"),
    fileUrl: sanitizeField(body.fileUrl),
    pagePath: sanitizeField(body.pagePath, "/"),
    linkText: sanitizeField(body.linkText, "Resume"),
    referrer:
      sanitizeField(body.referrer) ||
      sanitizeField(
        getHeader(req.headers, "referer") || getHeader(req.headers, "referrer")
      ),
    userAgent: sanitizeField(getHeader(req.headers, "user-agent")),
  };

  try {
    const result = await sendResumeNotificationEmail(details);
    return sendJson(res, 200, { ok: true, skipped: result.skipped });
  } catch {
    return sendJson(res, 200, {
      ok: false,
      error: "Notification delivery failed.",
    });
  }
}
