// Vercel serverless function. Runs on Vercel's servers, never in the
// browser — so the OneSignal REST API key set below (as an environment
// variable) is never visible to anyone visiting the site.
//
// Setup in Vercel: Project > Settings > Environment Variables, add:
//   ONESIGNAL_APP_ID          = your OneSignal App ID
//   ONESIGNAL_REST_API_KEY    = your OneSignal REST API Key
// Then redeploy so the function picks them up.

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const appId = process.env.ONESIGNAL_APP_ID;
  const apiKey = process.env.ONESIGNAL_REST_API_KEY;

  if (!appId || !apiKey) {
    // Not configured yet — fail quietly so the rest of the app still works.
    res.status(200).json({ skipped: true });
    return;
  }

  try {
    const { text, actorWho } = req.body || {};
    if (!text) {
      res.status(400).json({ error: 'Missing text' });
      return;
    }

    const payload = {
      app_id: appId,
      headings: { en: 'عین 💛' },
      contents: { en: String(text).slice(0, 200) },
      web_url: 'https://loveyouain.vercel.app/'
    };
    if (actorWho) {
      payload.filters = [{ field: 'tag', key: 'who', relation: '!=', value: String(actorWho) }];
    }

    const r = await fetch('https://onesignal.com/api/v1/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Key ' + apiKey
      },
      body: JSON.stringify(payload)
    });
    const data = await r.json();
    res.status(200).json({ ok: true, data });
  } catch (e) {
    res.status(500).json({ error: 'Failed to send notification' });
  }
};
