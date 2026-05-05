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

/**
 * Scroll reveal – sections are hidden by blocking inline script.
 * This IntersectionObserver reveals them when they scroll into view.
 */
(function initReveal() {
  // Ensure all sections have the transition property set inline (works both ways)
  var allSections = document.querySelectorAll("#om, #turneringar, #sponsorer, #kontakt");
  for (var i = 0; i < allSections.length; i++) {
    allSections[i].style.setProperty("transition",
      "opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      "important"
    );
  }

  // Also set transition on children of reveal-children containers
  var allContainers = document.querySelectorAll("[data-reveal-children]");
  for (var i = 0; i < allContainers.length; i++) {
    var children = allContainers[i].children;
    for (var c = 0; c < children.length; c++) {
      children[c].style.setProperty("transition",
        "opacity 0.5s ease-out, transform 0.5s ease-out",
        "important"
      );
    }
  }

  // IntersectionObserver – reveal when half in view, hide when scrolled away
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var isVisible = entry.intersectionRatio >= 0.5;
        entry.target.style.setProperty("opacity", isVisible ? "1" : "0", "important");
        entry.target.style.setProperty("transform", isVisible ? "translateY(0)" : "translateY(40px)", "important");

        // Handle children of reveal-children containers
        if (entry.target.hasAttribute("data-reveal-children")) {
          var kids = entry.target.children;
          for (var k = 0; k < kids.length; k++) {
            kids[k].style.setProperty("opacity", isVisible ? "1" : "0", "important");
            kids[k].style.setProperty("transform", isVisible ? "translateY(0)" : "translateY(24px)", "important");
            kids[k].style.setProperty("transition-delay", isVisible ? (0.05 + k * 0.07).toFixed(2) + "s" : "0s", "important");
          }
        }
      });
    },
    { threshold: [0, 0.25, 0.5] }
  );

  // Observe all sections
  var sections = document.querySelectorAll("#om, #turneringar, #sponsorer, #kontakt");
  for (var s = 0; s < sections.length; s++) {
    observer.observe(sections[s]);
  }

  // Observe reveal-children containers too
  var containers = document.querySelectorAll("[data-reveal-children]");
  for (var d = 0; d < containers.length; d++) {
    observer.observe(containers[d]);
  }
})();

function showMessage() {
  alert("Kul! Kontakta oss på stenungsundschack@gmail.com för att bli medlem.");
}