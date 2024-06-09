import React from 'react'
import { useRouter } from 'next/router';

const SearchBar = () => {
  const router = useRouter();

  const handleSubmit = (event: { preventDefault: () => void; target: { elements: { search: { value: any; }; }; }; }) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    router.push(`https://duckduckgo.com/?q=${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input type="text" name="search" placeholder="Search Here" className="input input-bordered input-accent w-full max-w-xs" />
      <button type="submit">Search</button>
    </form>
    
  );
};
export default SearchBar;
