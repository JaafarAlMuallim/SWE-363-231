const API = "https://randomuser.me/api/?gender=male&results=6";
async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (e) {
    console.log("Fetch Error", e);
  }
}
async function createCard() {
  const users = await getData(API);
  users.map((user) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <div class="card-img-top">
            <img src="${user.picture.large}" alt="${user.name.first}">
            </div>
            <div class="card-body">
            <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
            <p class="card-text">${user.email}</p>
            <p class="card-text">${user.phone}</p>
            <p class="card-text">${user.location.city}, ${user.location.state}</p>
            </div
        `;
    document.body.appendChild(card);
  });
}
createCard();
