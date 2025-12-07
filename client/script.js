async function fetchData() {
  try {
    // Gör en fetch-förfrågan
    const response = await fetch("http://localhost:${3000}");

    // Konvertera svaret till JSON
    const data = await response.json();

    // Använd datan
    console.log(data);
  } catch (error) {
    // Hantera fel
    console.error("Något gick fel:", error);
  }
}

async function fetchUsers() {
  try {
    const response = await fetch("http://localhost:3000/users");
    if (!response.ok) {
      throw new Error(`HTTP-fel! Status: ${response.status}`);
    }
    const users = await response.json();

    // Logga för att verifiera att det är rätt data
    console.log("Users:", users);

    // Skapa och visa användarna i HTML
    renderUsers(users);
  } catch (error) {
    console.error("Något gick fel vid hämtning av användare:", error);
  }
}

function renderUsers(users) {
  const userList = document.getElementById("userList");

  // Rensa listan innan jag lägger till nya element
  userList.innerHTML = "";

  // Skapa <ul>-elementet
  const ul = document.createElement("ul");
  ul.classList.add("user-list"); // Lägg till en CSS-klass för styling

  // Loopa igenom användarna
  users.forEach((user) => {
    // Skapa <li>-element
    const li = document.createElement("li");
    li.classList.add("user-item"); // CSS-klass för styling
    li.style.borderLeft = `5px solid ${user.color}`; // Använd user.color för styling

    // Skapa HTML-innehåll inuti <li>
    li.innerHTML = `
      <h3>${user.firstName} ${user.lastName}</h3>
      <p><strong>Användarnamn:</strong> ${user.username}</p>
      <p><strong>Favoritfärg:</strong> <span style="color: ${user.color};">${user.color}</span></p>
    `;

    // Lägg till <li> i <ul>
    ul.appendChild(li);
  });

  // Lägg till <ul> i <div id="userList">
  userList.appendChild(ul);
}

// Kör funktionen för att hämta och visa användarna
fetchUsers();
