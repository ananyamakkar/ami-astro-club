const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

const skyData = {

    january: {
        number: "01",
        title: "JANUARY 2026",
        moonTitle: "WINTER MOON WATCH",
        moonText: "Use the bright winter Moon as an easy first target and watch how its position changes from night to night.",
        planetTitle: "WINTER PLANET WATCH",
        planetText: "Look for bright planets during suitable evening or morning observing windows and compare their brightness with nearby stars.",
        constellationTitle: "ORION & GEMINI",
        constellationText: "Orion is one of the easiest winter constellations to recognize. Use its bright stars to begin exploring the surrounding sky.",
        deepSkyTitle: "ORION NEBULA",
        deepSkyText: "Try locating the Orion Nebula beneath Orion's Belt. It can be visible even with binoculars under darker skies.",
        mission: "Find Orion, locate its Belt and then try to identify the Orion Nebula. This is a great first winter observing mission.",
        difficulty: "BEGINNER"
    },

    february: {
        number: "02",
        title: "FEBRUARY 2026",
        moonTitle: "LUNAR LANDSCAPES",
        moonText: "The Moon's changing terminator creates dramatic shadows across craters and mountains, making it excellent for observation.",
        planetTitle: "BRIGHT PLANETS",
        planetText: "Check the evening and morning sky for bright planets. Their steady light makes them easier to distinguish from stars.",
        constellationTitle: "ORION & CANIS MAJOR",
        constellationText: "Follow Orion toward Sirius, the brightest star in the night sky, and explore the constellations surrounding it.",
        deepSkyTitle: "PLEIADES",
        deepSkyText: "The Pleiades star cluster is a beautiful binocular target and a useful object for learning how clusters appear in the sky.",
        mission: "Find Sirius, then work your way back toward Orion. See how many stars and patterns you can identify without a telescope.",
        difficulty: "BEGINNER"
    },

    march: {
        number: "03",
        title: "MARCH 2026",
        moonTitle: "SPRING MOON",
        moonText: "Observe the Moon near different phases and compare the shadows along its surface using binoculars or a small telescope.",
        planetTitle: "PLANETARY TRANSITIONS",
        planetText: "March is a useful month to watch how the evening sky changes as winter constellations begin moving lower toward the horizon.",
        constellationTitle: "LEO",
        constellationText: "Leo becomes increasingly prominent. Look for its distinctive backwards-question-mark pattern known as the Sickle.",
        deepSkyTitle: "BEEHIVE CLUSTER",
        deepSkyText: "The Beehive Cluster is a rewarding binocular target and one of the most recognizable open clusters.",
        mission: "Locate Leo's Sickle and use it as a guide to explore the surrounding spring sky.",
        difficulty: "BEGINNER"
    },

    april: {
        number: "04",
        title: "APRIL 2026",
        moonTitle: "MOON & SHADOW",
        moonText: "Look closely along the Moon's terminator where sunlight creates strong shadows that make surface features easier to see.",
        planetTitle: "SPRING PLANETS",
        planetText: "Watch the western and eastern horizons after sunset and before sunrise for bright planetary objects.",
        constellationTitle: "LEO & VIRGO",
        constellationText: "Leo and Virgo become important spring landmarks and can help you navigate toward the region of the Virgo Galaxy Cluster.",
        deepSkyTitle: "VIRGO GALAXY REGION",
        deepSkyText: "Under dark skies, explore the region around Virgo where many distant galaxies can be found with suitable equipment.",
        mission: "Find Leo first, then move toward Virgo. Try using a sky map to identify the galaxy-rich region.",
        difficulty: "INTERMEDIATE"
    },

    may: {
        number: "05",
        title: "MAY 2026",
        moonTitle: "LUNAR OBSERVATION",
        moonText: "Choose a night when the Moon is partly illuminated and explore the changing contrast of craters and mountain ranges.",
        planetTitle: "MORNING SKY",
        planetText: "Some of the best planetary opportunities during this period may occur before sunrise, so check the eastern sky.",
        constellationTitle: "BOÖTES",
        constellationText: "Look for Arcturus in Boötes. Its brightness makes it a useful reference point for navigating the spring sky.",
        deepSkyTitle: "M3 GLOBULAR CLUSTER",
        deepSkyText: "M3 is a classic globular cluster target for binoculars and telescopes under darker skies.",
        mission: "Find Arcturus and use it as your anchor point. From there, explore the surrounding spring constellations.",
        difficulty: "INTERMEDIATE"
    },

    june: {
        number: "06",
        title: "JUNE 2026",
        moonTitle: "SUMMER MOON",
        moonText: "The Moon remains an easy target during the shorter summer nights. Watch its phase and position throughout the month.",
        planetTitle: "SUMMER PLANETS",
        planetText: "Check both the evening and pre-dawn sky for bright planets and compare their motion against background stars.",
        constellationTitle: "SCORPIUS",
        constellationText: "Scorpius is a striking summer constellation. Its curved shape makes it easier to recognize once you know Antares.",
        deepSkyTitle: "LAGOON NEBULA",
        deepSkyText: "The Lagoon Nebula is a rewarding summer deep-sky target from sufficiently dark locations.",
        mission: "Find Antares and trace the shape of Scorpius. Then explore the Milky Way around it.",
        difficulty: "INTERMEDIATE"
    },

    july: {
        number: "07",
        title: "JULY 2026",
        moonTitle: "MILKY WAY MOONLIGHT",
        moonText: "Try observing deep-sky objects when moonlight is limited. Darker skies reveal much more structure in the Milky Way.",
        planetTitle: "GIANT PLANETS",
        planetText: "July can offer opportunities to search for bright outer planets during suitable late-night or early-morning windows.",
        constellationTitle: "SAGITTARIUS",
        constellationText: "Sagittarius points toward the central region of the Milky Way and contains many rich star fields.",
        deepSkyTitle: "OMEGA NEBULA",
        deepSkyText: "Look toward Sagittarius for rich Milky Way regions and deep-sky targets such as the Omega Nebula.",
        mission: "Find Sagittarius and spend a few minutes simply scanning the Milky Way. Count how many stars you can see.",
        difficulty: "INTERMEDIATE"
    },

    august: {
        number: "08",
        title: "AUGUST 2026",
        moonTitle: "MOON & METEORS",
        moonText: "Plan around moonlight when preparing for meteor-shower observations so that faint meteors are easier to see.",
        planetTitle: "SUMMER PLANETS",
        planetText: "Continue exploring the summer sky and watch for bright planets during their suitable observing windows.",
        constellationTitle: "CYGNUS",
        constellationText: "Cygnus forms a prominent cross-shaped pattern in the summer sky and lies across the Milky Way.",
        deepSkyTitle: "DUMBELL NEBULA",
        deepSkyText: "The Dumbbell Nebula is a popular telescope target and a good introduction to planetary nebulae.",
        mission: "Find Cygnus and then look along the Milky Way. August is also a great month to plan a meteor-watch session.",
        difficulty: "BEGINNER"
    },

    september: {
        number: "09",
        title: "SEPTEMBER 2026",
        moonTitle: "AUTUMN MOON",
        moonText: "Use the Moon as a reference object while familiarizing yourself with the changing seasonal sky.",
        planetTitle: "EVENING TRANSITION",
        planetText: "The night sky begins transitioning toward autumn patterns. Watch which summer constellations remain visible after sunset.",
        constellationTitle: "PEGASUS",
        constellationText: "The Great Square of Pegasus is a useful autumn landmark and a good starting point for exploring nearby constellations.",
        deepSkyTitle: "ANDROMEDA GALAXY",
        deepSkyText: "Under dark skies, try finding the Andromeda Galaxy. Binoculars can make the search considerably easier.",
        mission: "Find the Great Square of Pegasus and use a sky map to navigate toward the Andromeda Galaxy.",
        difficulty: "INTERMEDIATE"
    },

    october: {
        number: "10",
        title: "OCTOBER 2026",
        moonTitle: "LUNAR NIGHTS",
        moonText: "October's longer nights provide more time to explore the Moon and compare features at different illumination phases.",
        planetTitle: "AUTUMN PLANETS",
        planetText: "Check the evening sky for bright planetary objects and distinguish them from nearby stars by their steady appearance.",
        constellationTitle: "CASSIOPEIA",
        constellationText: "Cassiopeia's distinctive W shape is one of the easiest northern-sky patterns to recognize.",
        deepSkyTitle: "ANDROMEDA GALAXY",
        deepSkyText: "Return to the Andromeda Galaxy and try finding it with binoculars from a darker observing location.",
        mission: "Find Cassiopeia and use it as a guide to explore the surrounding northern sky.",
        difficulty: "BEGINNER"
    },

    november: {
        number: "11",
        title: "NOVEMBER 2026",
        moonTitle: "MOON & WINTER RETURN",
        moonText: "Winter constellations begin returning to the evening sky. Use the Moon as a bright reference while learning the new patterns.",
        planetTitle: "PLANET WATCH",
        planetText: "Check the eastern and western horizons for bright planets and observe how their positions change through the season.",
        constellationTitle: "TAURUS",
        constellationText: "Taurus becomes prominent in the evening sky, with the Pleiades and Hyades offering recognizable star patterns.",
        deepSkyTitle: "PLEIADES",
        deepSkyText: "The Pleiades are especially rewarding through binoculars and can be seen as a compact group of bright stars.",
        mission: "Find the Pleiades and then trace the surrounding shape of Taurus.",
        difficulty: "BEGINNER"
    },

    december: {
        number: "12",
        title: "DECEMBER 2026",
        moonTitle: "WINTER MOON",
        moonText: "Use clear December nights to combine lunar observing with some of the year's most recognizable constellations.",
        planetTitle: "WINTER PLANETS",
        planetText: "Watch for bright planetary objects in the evening and early-morning sky during suitable observing windows.",
        constellationTitle: "ORION",
        constellationText: "Orion returns as a dominant winter landmark. Its Belt and bright stars make it ideal for beginners.",
        deepSkyTitle: "ORION NEBULA",
        deepSkyText: "Return to the Orion Nebula and compare what you can see with your first attempt earlier in the year.",
        mission: "End the year by finding Orion, Sirius and the Orion Nebula. See how much easier the sky feels now.",
        difficulty: "BEGINNER"
    }

};

const monthButtons = document.querySelectorAll(".month-button");

const monthNumber = document.getElementById("monthNumber");
const monthTitle = document.getElementById("monthTitle");

const moonTitle = document.getElementById("moonTitle");
const moonText = document.getElementById("moonText");

const planetTitle = document.getElementById("planetTitle");
const planetText = document.getElementById("planetText");

const constellationTitle =
    document.getElementById("constellationTitle");

const constellationText =
    document.getElementById("constellationText");

const deepSkyTitle =
    document.getElementById("deepSkyTitle");

const deepSkyText =
    document.getElementById("deepSkyText");

const missionText =
    document.getElementById("missionText");

const missionMonth =
    document.getElementById("missionMonth");

const missionDifficulty =
    document.getElementById("missionDifficulty");

function updateMonth(month) {

    const data = skyData[month];

    if (!data) {
        return;
    }

    monthNumber.textContent = data.number;
    monthTitle.textContent = data.title;

    moonTitle.textContent = data.moonTitle;
    moonText.textContent = data.moonText;

    planetTitle.textContent = data.planetTitle;
    planetText.textContent = data.planetText;

    constellationTitle.textContent =
        data.constellationTitle;

    constellationText.textContent =
        data.constellationText;

    deepSkyTitle.textContent =
        data.deepSkyTitle;

    deepSkyText.textContent =
        data.deepSkyText;

    missionText.textContent =
        data.mission;

    missionMonth.textContent =
        data.title.replace(" 2026", "");

    missionDifficulty.textContent =
        data.difficulty;

}

monthButtons.forEach((button) => {

    button.addEventListener("click", () => {

        monthButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        updateMonth(button.dataset.month);

    });

});

const calendarFilters =
    document.querySelectorAll(".calendar-filter");

const calendarEvents =
    document.querySelectorAll(".calendar-event");

function updateCalendar(filter) {

    calendarEvents.forEach((event) => {

        if (
            filter === "all" ||
            event.dataset.type === filter
        ) {
            event.style.display = "grid";
        } else {
            event.style.display = "none";
        }

    });

}

calendarFilters.forEach((button) => {

    button.addEventListener("click", () => {

        calendarFilters.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        updateCalendar(button.dataset.filter);

    });

});

updateMonth("january");
updateCalendar("all");