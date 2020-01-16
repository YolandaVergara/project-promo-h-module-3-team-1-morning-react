const ENDPOINT =
  "https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/";

const createFetchCard = data => {
  fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
};

export default createFetchCard;
