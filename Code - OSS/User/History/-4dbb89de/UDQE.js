const fetchMoonPhaseData = async () => {
    try {
        const response = await fetch("https://moon-phase.p.rapidapi.com/basic", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "moon-phase.p.rapidapi.com",
                "x-rapidapi-key": "YOUR_RAPIDAPI_KEY"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        const data = await response.json();
        displayMoonPhase(data.phase_name);
    } catch (error) {
        console.error("Error fetching data:", error);
        displayMoonPhase("Error fetching moon phase data");
    }
};

const displayMoonPhase = (text) => {
    const phaseTextElement = document.getElementById("phase-text");
    phaseTextElement.innerText = text;
};

fetchMoonPhaseData();
