const ENDPOINT =
  "https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/";

function createFetchCard(data) {
  fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(result => showURL(result))
    .catch(error => console.log(error));
}
function showURL(result) {
  console.log(result.cardURL);

  return result.success ? result.cardURL : "ERROR:" + result.error;
}

export default createFetchCard;
