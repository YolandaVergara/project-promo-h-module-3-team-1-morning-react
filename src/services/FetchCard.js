const ENDPOINT =
  "https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/";

const fetchCard = JSON =>
  fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify(JSON),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());

export { fetchCard };
