import fetch from "node-fetch";

export default async (req, res) => {
  const url =
    "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1;900&family=Poppins:wght@400;600&family=Roboto:wght@400;500&display=swap";
  const response = await fetch(url);
  const data = await response.text();

  res.setHeader("Content-Type", "text/css");
  res.send(data);
};
