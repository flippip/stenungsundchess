const tournaments = [
  "Knatterallyt",
  "Allsvenskan",
  "Distriktserien"
];

const sponsorer = [
  "Tjörns Sparbank",
  "LÅAB",
  "Timmerviks skafferi",
  "Lifood",
  "Schackbutiken"
];

const tournamentList = document.getElementById("tournament-list");

tournaments.forEach((tournament) => {
  const li = document.createElement("li");
  li.textContent = tournament;
  tournamentList.appendChild(li);
});

const memberDiv = document.getElementById("members");

sponsorer.forEach((sponsor) => {
  const p = document.createElement("p");
  p.textContent = sponsor;
  memberDiv.appendChild(p);
});

function showMessage() {
  alert("Kul! Kontakta oss på stenungsundschack@gmail.com för att bli medlem.");
}
