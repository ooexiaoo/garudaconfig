'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';

const MyComponent = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();

      // Add leading zeros to minutes and seconds if needed
      const formattedMinutes = (minutes < 10) ? `0${minutes}` : minutes;
      const formattedSeconds = (seconds < 10) ? `0${seconds}` : seconds;

      setCurrentTime(`${hours}:${formattedMinutes}:${formattedSeconds}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const openModal = () => {
      const modalElement = document.getElementById('usernameModal'); 
      if (modalElement) {
        modalElement.style.display = "flex";
    // Add your modal opening logic here
  };
};

  const closeModal = () => {
    const modalElement = document.getElementById('usenameModal');
    if (modalElement) {
      modalElement.style.display = "none";
    }
    // Add your modal closing logic here
  };

  function saveUsername() {
    const usernameInput = document.getElementById('usernameInput') as HTMLInputElement;
    if (usernameInput) {
      let username = usernameInput.value.trim();
      
      // Limit the username to 8 characters
      username = username.slice(0, 8);
  
      if (username !== '') {
        // Save the username to local storage
        localStorage.setItem('username', username);
  
        // Close the modal
        closeModal();
  
        // Update the greeting
        updateGreeting(username);
      }
    }
  }
  

  function updateGreeting(username: string) {
    const greetingTime = getGreetingTime();
    let imagePath = '';
  
    if (greetingTime === 'Night') {
      imagePath = './sleep-menhera-chan.png';
    } else if (greetingTime === 'Morning') {
      imagePath = './8841-menhera-morning2.png';
    } else if (greetingTime === 'Afternoon') {
      imagePath = './5271-menhera-chillout.png';
    } else {
      imagePath = './1370-menhera-tired.png';
    }
  
    const helloElement = document.getElementById('hello');
    if (helloElement) {
      helloElement.innerHTML = `
        <div class="bg-img">
          <b><img src="${imagePath}" alt="Greeting Image"/><h2>Good ${greetingTime}, ${username}</h2></b>
        </div>
      `;
    }
  }  

  function getGreetingTime(): string {
    const currentHours: number = new Date().getHours();
  
    if (currentHours < 4) {
      return 'Night';
    } else if (currentHours < 12) {
      return 'Morning';
    } else if (currentHours < 17) {
      return 'Afternoon';
    } else {
      return 'Evening';
    }
  }
  



  return (
    <div className='w-full flex flex-col min-h-screen items-center justify-center'>
    <div className="bg-img">
      <div className='text-center text-8xl font-bold' id="hello"></div>
      <h1 className='text-center text-8xl font-bold' id="time">{currentTime}</h1>
      <form action="https://duckduckgo.com/" target="_blank" method="GET" className="flex search-bar items-center justify-center">
        <input className="flex search text-center" type="text" placeholder="Search Here" name="q" />
        <button type="submit">
          <Image
          src="/icons8-search.svg"
          alt="Search"
          width={20}
          height={20}/>
        </button>
      </form>
    </div>
    </div>
  );
};
export default MyComponent;
