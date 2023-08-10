import fetch from "node-fetch";

export async function languageTranslator(req, res, next) {
  const SERVICE_BASE_URL = process.env.SERVICE_BASE_URL;
  const SERVICE_SUFFIX = process.env.SERVICE_SUFFIX;
  const API_ID = process.env.API_ID;
  const API_KEY = process.env.API_KEY;

  // const startAbbr = req
  // const targetAbbr = res
  const translationText = "Hey my name is Yamkela but people call me Dojo";

  const response = await fetch(`${SERVICE_BASE_URL}/${SERVICE_SUFFIX}`, {
    method: "POST",
    body: JSON.stringify({
      text: translationText,
      model_id: `en - ps`,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(`${API_ID}:${API_KEY}`),
    },
  });

  const jsonResponse = await response.json();

  return res.join(jsonResponse);
}
