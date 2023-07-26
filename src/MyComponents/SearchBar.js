import React, { useState } from 'react';
import axios from 'axios';
const API_KEY = 'AIzaSyBfnb51ms5zRpMceaXBrYpYb7inmHb5drw';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = () => {
    axios
      .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          q: searchQuery,
          part: 'snippet',
          maxResults: 9,
          type: 'video',
          order: 'viewCount'
        },
      })
      .then((response) => {
        setSearchResults(response.data.items);

      })
      .catch((error) => {
        console.error('Error fetching results:', error);
      });
  };

  return (
    <div>
      <input
        className='srcbar'
        placeholder="Search..."
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className='button' onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map((item) => (
          <div className='result'>
            <li key={item.id.videoId}>
              <a
                href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.snippet.title}
              </a>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;