const tournaments = [
  {
    title: "Knatterallyt",
    href: "knatterallyt.html",
    summary: "En juniorvänlig tävling där yngre spelare får spela, lära sig tävlingsvana och ha roligt tillsammans."
  },
  {
    title: "Allsvenskan",
    href: "allsvenskan.html",
    summary: "Sveriges nationella lagserie där Stenungsund spelar tillsammans med Orust SK som Bohusalliansen STO."
  },
  {
    title: "Distriktserien",
    href: "distriktserien.html",
    summary: "Regionalt seriespel mot klubbar i distriktet, med Göteborgs distriktsserie som lokal koppling."
  }
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

  const link = document.createElement("a");
  link.className = "tournament-card";
  link.href = tournament.href;

  const title = document.createElement("span");
  title.className = "tournament-title";
  title.textContent = tournament.title;

  const summary = document.createElement("span");
  summary.className = "tournament-summary";
  summary.textContent = tournament.summary;

  const action = document.createElement("span");
  action.className = "tournament-action";
  action.textContent = "Läs mer";

  link.append(title, summary, action);
  li.appendChild(link);
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
