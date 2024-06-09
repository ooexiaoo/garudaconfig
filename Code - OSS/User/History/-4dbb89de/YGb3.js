function generateCalendar() {
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    const monthName = getMonthName(month);
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
  
    let calendarHTML = `<h2>${monthName} ${year}</h2>`;
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
  
  // Function to calculate moon phase (for demonstration purposes)
  function calculateMoonPhase(year, month, day) {
    // You can replace this with a more accurate algorithm
    const phases = ['new', 'waxing_crescent', 'first_quarter', 'waxing_gibbous', 'full', 'waning_gibbous', 'last_quarter', 'waning_crescent'];
    return phases[(year + month + day) % phases.length];
  }
  