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
  },
  {
    title: "Klubbmästerskap",
    href: "klubbmasterskap.html",
    summary: "Klubbens interna mästerskap där medlemmar möts i klassiska partier och spelar om årets klubbmästartitel."
  }
];

const sponsorer = [
  {
    name: "Tjörns Sparbank",
    logo: "../assets/images/tjorns-sparbank-logo.jpg",
    url: "https://www.tjorns-sparbank.se/"
  },
  {
    name: "LÅAB",
    logo: "../assets/images/laab-logo.png",
    url: "https://laabjord.se/"
  },
  {
    name: "Timmerviks skafferi",
    logo: "../assets/images/timmerviks-skafferi-logo.png",
    url: "https://www.timmervikensskafferi.se/"
  },
  {
    name: "Li-Food",
    logo: "../assets/images/lifood-logo.svg",
    url: "https://www.hitta.se/verksamhet/li-food-ab-kotbxdkkl"
  },
  {
    name: "Schackbutiken",
    logo: "../assets/images/schackbutiken-logo.jpg",
    url: "https://www.schackbutiken.se/"
  }
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
  const card = document.createElement("a");
  card.className = "sponsor-card";
  card.href = sponsor.url;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.setAttribute("aria-label", `Besök ${sponsor.name}`);

  const logo = document.createElement("img");
  logo.src = sponsor.logo;
  logo.alt = `${sponsor.name} logotyp`;
  logo.loading = "lazy";

  card.appendChild(logo);
  memberDiv.appendChild(card);
});

function showMessage() {
  alert("Kul! Kontakta oss på stenungsundschack@gmail.com för att bli medlem.");
}