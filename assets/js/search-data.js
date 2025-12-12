// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-calendar",
          title: "calendar",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/calendar/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-travel",
          title: "travel",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/travel/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Work In Progress",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "You can click on the PDF Download button to Download a one page version of my CV!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-have-passed-my-qualifying-exam-i-am-now-a-ph-d-student-check-out-my-thesis-in-the-publications-section",
          title: 'I have passed my qualifying exam. I am now a Ph.D. student. Check...',
          description: "",
          section: "News",},{id: "news-our-paper-a-data-mining-approach-for-load-composition-analysis-in-residential-units-has-been-accepted-at-north-american-power-symposium-2025",
          title: 'Our paper, “A Data Mining Approach for Load Composition Analysis in Residential Units”...',
          description: "",
          section: "News",},{id: "news-our-paper-an-appliance-agnostic-mode-identification-framework-via-dynamic-programming-least-squares-and-piecewise-regression-for-non-intrusive-load-monitoring-has-been-accepted-for-presentation-at-the-59th-hawaii-international-conference-on-system-sciences-hicss",
          title: 'Our paper, “An Appliance-Agnostic Mode Identification Framework via Dynamic Programming Least Squares and...',
          description: "",
          section: "News",},{id: "news-our-paper-a-day-ahead-bidding-framework-for-renewable-fed-distributed-energy-resource-aggregators-has-been-accepted-for-presentation-the-2026-transmission-amp-amp-distribution-conference-amp-amp-exposition-4-7-may-2026-chicago-il-usa",
          title: 'Our paper, “A Day-Ahead Bidding Framework for Renewable-Fed Distributed Energy Resource Aggregators” has...',
          description: "",
          section: "News",},{id: "news-our-naps-2025-paper-a-data-mining-approach-for-load-composition-analysis-in-residential-units-has-been-published-on-ieee-xplore-check-out-the-publication-in-the-publications-nirupamaps-github-io-publications-section",
          title: 'Our NAPS 2025 paper, “A Data Mining Approach for Load Composition Analysis in...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%70%75%64%75%6B%6B%61@%61%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/nirupamaps", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/npudukka", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-0260-2959", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=TK5zKu8AAAAJ&hl", "_blank");
        },
      },{
        id: 'social-strava',
        title: 'Strava',
        section: 'Socials',
        handler: () => {
          window.open("https://www.strava.com/athletes/176317794", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/foodisspicy", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
