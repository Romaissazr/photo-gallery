import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const API_KEY = "p9BusfHZJ70qlw0oTHH7zAJpzrsv1l1i2kxSzj3aVxPHVkDXYsWyTT1c";
  const BASE_URL = "https://api.pexels.com/v1/"; 

 
  const fetchPhotos = async (searchQuery = "") => {
    setLoading(true); 
    try {
      const response = await axios.get(`${BASE_URL}search`, {
        headers: {
          Authorization: API_KEY,
        },
        params: {
          query: searchQuery || "nature", 
          page: 1, 
          per_page: 40,
        },
      });
      setPhotos(response.data.photos); 
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchPhotos(); 
  }, []); 
  

 
  const handleSearch = (e) => {
    e.preventDefault(); 
    fetchPhotos(query); 
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Photos </h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex justify-center mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for photos..."
          className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-indigo-300"
        />
        <button
          type="submit"
          className="p-2 bg-indigo-500 text-white rounded-r-md hover:bg-indigo-600"
        >
          Search
        </button>
      </form>

 
      {loading && <p className="text-center">Loading...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="rounded overflow-hidden shadow-lg">
            <img
              src={photo.src.medium} 
              alt={photo.alt}
              className="w-full h-48 object-cover"
            />
            <div className="p-2">
              <p className="text-sm text-gray-600">{photo.photographer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
