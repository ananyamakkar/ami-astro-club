const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    });

    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 650) {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        }
    });
}

const cosmicFacts = [
    { fact: "TABBY'S STAR DIMS IN WAYS NO ONE FULLY UNDERSTANDS.", explanation: "KIC 8462852 has shown unusually irregular, dramatic dips in brightness, and proposed explanations range from dust clouds to disintegrating comets." },
    { fact: "WASP-76b RAINS IRON.", explanation: "On this ultra-hot exoplanet, temperatures on the day side vaporize metals, and models suggest iron condenses into rain on the cooler night side." },
    { fact: "A ROGUE PLANET CAN WANDER THE GALAXY WITH NO STAR AT ALL.", explanation: "Some planets are ejected from their systems by gravitational interactions and drift through interstellar space unattached to any sun." },
    { fact: "THE BOÖTES VOID IS AN ALMOST EMPTY REGION OF SPACE 330 MILLION LIGHT-YEARS ACROSS.", explanation: "This enormous void contains far fewer galaxies than expected, and astronomers are still working out why it is so empty." },
    { fact: "'OUMUAMUA WAS THE FIRST CONFIRMED VISITOR FROM ANOTHER STAR SYSTEM.", explanation: "Detected in 2017, this elongated object passed through our solar system on a trajectory showing it originated outside it." },
    { fact: "THE \"OH-MY-GOD PARTICLE\" HIT EARTH'S ATMOSPHERE WITH THE ENERGY OF A THROWN BASEBALL.", explanation: "Detected in 1991, this cosmic ray carried an extraordinary amount of energy for a single subatomic particle, and its origin remains debated." },
    { fact: "A MOON OF URANUS HAS A CLIFF FIVE TIMES TALLER THAN MOUNT EVEREST.", explanation: "Verona Rupes, on the moon Miranda, may be the tallest known cliff in the solar system, likely formed by a violent impact that nearly shattered the moon." },
    { fact: "55 CANCRI e MAY BE PARTLY MADE OF DIAMOND.", explanation: "Models of this carbon-rich exoplanet suggest that extreme pressure could compress carbon into diamond deep within its interior." },
    { fact: "SATURN'S MOON IAPETUS HAS TWO STRIKINGLY DIFFERENT COLORED HEMISPHERES.", explanation: "One side is dark, one is bright, likely because dust from another moon coats its leading face." },
    { fact: "NEPTUNE'S MOON TRITON HAS GEYSERS THAT ERUPT NITROGEN GAS.", explanation: "Triton is one of the few moons known to be geologically active, with plumes rising kilometers above its icy surface." },
    { fact: "THE FASTEST-SPINNING PULSAR ROTATES 716 TIMES PER SECOND.", explanation: "PSR J1748-2446ad, discovered in 2004, spins fast enough that its surface moves at a meaningful fraction of the speed of light." },
    { fact: "HYPERVELOCITY STARS CAN BE FLUNG OUT OF THE GALAXY ENTIRELY.", explanation: "Close encounters with the supermassive black hole at the Milky Way's center can eject stars at speeds fast enough to escape the galaxy." },
    { fact: "A STAR NAMED S2 ORBITS SAGITTARIUS A* IN UNDER 16 YEARS.", explanation: "Tracking this star's tight, fast orbit around the Milky Way's central black hole provided key evidence for the black hole's existence." },
    { fact: "THE PISTOL STAR RADIATES AS MUCH ENERGY IN SIX SECONDS AS THE SUN DOES IN A YEAR.", explanation: "It is one of the most luminous stars known, buried near the crowded center of our galaxy." },
    { fact: "ASTEROID 16 PSYCHE MAY BE THE EXPOSED METAL CORE OF A SHATTERED PROTOPLANET.", explanation: "Unlike most rocky asteroids, Psyche appears unusually metal-rich, possibly the remnant core of a much larger early world." },
    { fact: "A GIANT MAGNETAR FLARE IN 2004 OUTSHONE EVERY OTHER GAMMA-RAY SOURCE IN THE SKY.", explanation: "The outburst from SGR 1806-20 released more energy in a tenth of a second than the Sun does in about 100,000 years." },
    { fact: "GRB 080319B WAS BRIGHT ENOUGH TO SEE WITH THE NAKED EYE FROM 7.5 BILLION LIGHT-YEARS AWAY.", explanation: "This gamma-ray burst remains the most distant object ever visible without a telescope." },
    { fact: "SEDNA TAKES ABOUT 11,000 YEARS TO ORBIT THE SUN ONCE.", explanation: "This distant dwarf planet candidate has one of the most extreme and elongated orbits known in the solar system." },
    { fact: "THE COLDEST KNOWN NATURAL PLACE IN THE UNIVERSE IS A NEBULA, NOT A PLANET.", explanation: "Temperatures inside the Boomerang Nebula drop to around one degree above absolute zero, colder than the cosmic microwave background itself." },
    { fact: "ONE EXOPLANET MAY HAVE GLASS RAINING SIDEWAYS IN ITS ATMOSPHERE.", explanation: "Extreme winds and silicate particles on HD 189733 b have led researchers to describe conditions resembling horizontal glass rain." },
    { fact: "TON 618 IS ONE OF THE MOST MASSIVE KNOWN BLACK HOLES, AT TENS OF BILLIONS OF SOLAR MASSES.", explanation: "Its enormous size challenges models of how supermassive black holes grow so large so early in cosmic history." },
    { fact: "TRAPPIST-1 HOSTS SEVEN ROUGHLY EARTH-SIZED PLANETS AROUND A SINGLE SMALL STAR.", explanation: "Several of these worlds orbit close enough together that, standing on one, you could see the others as large disks in the sky." },
    { fact: "THE \"WOW! SIGNAL\" WAS A STRONG, UNEXPLAINED RADIO SIGNAL DETECTED IN 1977.", explanation: "Despite decades of searching, no one has been able to identify its source or detect it again." },
    { fact: "PULSAR TIMING ARRAYS MAY BE DETECTING A BACKGROUND HUM OF GRAVITATIONAL WAVES.", explanation: "By timing dozens of pulsars across the galaxy with extreme precision, astronomers have found hints of ripples in spacetime from countless distant black hole mergers." },
    { fact: "ONE EXOPLANET IS SLOWLY BEING TORN APART AND EATEN BY ITS OWN STAR.", explanation: "WASP-12b orbits so close to its star that gravitational forces are stripping away its atmosphere into a disk of infalling gas." },
    { fact: "A GLOWING GAS CLOUD KNOWN AS HANNY'S VOORWERP WAS DISCOVERED BY A SCHOOLTEACHER.", explanation: "A citizen scientist found this strange green object while classifying galaxies online, and it turned out to be gas illuminated by a now-quiet quasar." },
    { fact: "FAST RADIO BURSTS CAN RELEASE MORE ENERGY IN MILLISECONDS THAN THE SUN PRODUCES IN DAYS.", explanation: "These intense, extremely brief radio flashes come from deep space, and their exact origins are still an active area of research." },
    { fact: "JUPITER'S GREAT RED SPOT HAS BEEN SHRINKING FOR DECADES.", explanation: "This centuries-old storm is still large enough to swallow Earth, but observations show it has been steadily getting smaller and rounder." },
    { fact: "BETELGEUSE UNEXPECTEDLY DIMMED IN LATE 2019, SPARKING SUPERNOVA SPECULATION.", explanation: "The \"Great Dimming\" turned out to be caused by an enormous dust cloud the star had ejected, not an imminent explosion." },
    { fact: "THE COSMIC WEB CONNECTS GALAXIES ACROSS FILAMENTS HUNDREDS OF MILLIONS OF LIGHT-YEARS LONG.", explanation: "Rather than being scattered randomly, galaxies are arranged along vast threadlike structures separated by enormous voids." }
];

const cosmicFact = document.getElementById("cosmicFact");
const cosmicExplanation = document.getElementById("cosmicExplanation");

let currentFact = -1;

function showRandomFact() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * cosmicFacts.length);
    } while (randomIndex === currentFact && cosmicFacts.length > 1);

    currentFact = randomIndex;

    cosmicFact.textContent = cosmicFacts[randomIndex].fact;
    cosmicExplanation.textContent = cosmicFacts[randomIndex].explanation;
}

if (cosmicFact && cosmicExplanation) {
    showRandomFact();
}