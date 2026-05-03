// Exempeldata
const tournaments = [
    "Knatterallyt",
    "Allsvenskan",
    "Distriktserien"
  ];
  
  const sponsorer = [
    "Tjöns sparbank",
    "LÅAB",
    "Timmerviks skafferi",
    "Lifood",
    "Schackbutiken"
  ];
  
  // Render turneringar
  const tournamentList = document.getElementById("tournament-list");
  tournaments.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    tournamentList.appendChild(li);
  });
  
  // Render medlemmar
  const memberDiv = document.getElementById("members");
  sponsorer.forEach(m => {
    const p = document.createElement("p");
    p.textContent = m;
    memberDiv.appendChild(p);
  });
  
  // Enkel interaktion
  function showMessage() {
    alert("Kul! Kontakta oss på stenungsundschack@gmail.com för att bli medlem ♟");
  }