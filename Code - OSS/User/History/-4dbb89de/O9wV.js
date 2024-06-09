async function generateCalendar() {
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    const monthName = getMonthName(month);
    
    // Call the Advanced Endpoint to get moon phase data
    const response = await fetch(`https://moon-phase.p.rapidapi.com/advanced?lat=51.4826&lon=0.0077`);
    const data = await response.json();
    
    const phaseName = data.phase_name; // Name of the current moon phase
    
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
  
    let calendarHTML = `<h2>${monthName} ${year}</h2>`;
    calendarHTML += `<p>Moon Phase: ${phaseName}</p>`;
    calendarHTML += '<div id="days" class="days"></div>';
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarHTML += '<div class="day"></div>';
    }
  
    for (let i = 1; i <= daysInMonth; i++) {
      const moonPhase = calculateMoonPhase(year, month, i);
      calendarHTML += `<div class="day">${i} <img src="moon_images/moon_${moonPhase}.png" alt="Moon Phase"></div>`;
    }
  
    document.getElementById("calendar").innerHTML = calendarHTML;
  }
  
  function displayMonthName() {
    const month = document.getElementById("month").value;
    const monthName = getMonthName(month);
    document.getElementById("monthName").innerText = monthName;
  }
  
  function getMonthName(month) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[month - 1];
  }
  
  function calculateMoonPhase(year, month, day) {
    // You can replace this with a more accurate algorithm or use the API to get moon phase data
    const phases = ['new', 'waxing_crescent', 'first_quarter', 'waxing_gibbous', 'full', 'waning_gibbous', 'last_quarter', 'waning_crescent'];
    return phases[(year + month + day) % phases.length];
  }
  