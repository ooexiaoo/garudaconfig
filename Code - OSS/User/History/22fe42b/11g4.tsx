const MyComponent = () => {
    return (
      <div className="bg-img">
        <div id="hello"></div>
        <h1 id="time"></h1>
        <form action="https://duckduckgo.com/" target="_blank" method="GET" className="search-bar">
          <input className="search" type="text" placeholder="Search Here" name="q" />
          <button type="submit">
            <img src="/icons8-search.svg" alt="Search" />
          </button>
        </form>
      </div>
    );
  };
  
  export default MyComponent;
  