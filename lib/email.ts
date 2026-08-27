const RESEND_ENDPOINT = "https://api.resend.com/emails";

export const NOTIFY_FROM = "Elvin Öztürk Pilates <bildirim@elvinozturk.com>";
export const NOTIFY_TO = "info@elvinozturk.com";

export function hasEmailEnv(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

/** HTML kaçışı — form verisi doğrudan HTML'e gömüldüğü için zorunlu. */
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type SendEmailInput = {
  subject: string;
  html: string;
  replyTo?: string;
};

export async function sendNotificationEmail({
  subject,
  html,
  replyTo,
}: SendEmailInput): Promise<{ ok: true } | { ok: false; error: string }> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return { ok: false, error: "E-posta ayarlari eksik." };
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: NOTIFY_FROM,
        to: [NOTIFY_TO],
        subject,
        html,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      return { ok: false, error: `E-posta gonderilemedi: ${detail}` };
    }

    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "E-posta gonderilemedi.",
    };
  }
}

/** Basit, e-posta istemcilerinde güvenli tablo şablonu. */
export function buildEmailHtml(title: string, rows: Array<[string, unknown]>): string {
  const body = rows
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== "")
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;font-size:14px;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111;font-size:14px;">${escapeHtml(value).replace(/\n/g, "<br>")}</td>
        </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="tr">
  <body style="margin:0;padding:24px;background:#f6f6f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e6e6e6;">
      <div style="padding:20px 24px;background:#6B3D7A;">
        <h1 style="margin:0;color:#ffffff;font-size:18px;font-weight:600;">${escapeHtml(title)}</h1>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${body}
      </table>
      <div style="padding:16px 24px;color:#888;font-size:12px;">
        Bu bildirim elvinozturk.com üzerindeki formdan otomatik olarak gönderildi.
      </div>
    </div>
  </body>
</html>`;
}
