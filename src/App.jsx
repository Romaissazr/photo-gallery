import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-blue-600 text-white text-center py-4">
        <h1 className="text-2xl font-bold">Photo Gallery</h1>
      </header>
      <main className="p-4 w-full max-w-4xl">
        <input
          type="text"
          placeholder="Search for photos..."
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
     
        </div>
      </main>
    </div>
  );
}

export default App;
