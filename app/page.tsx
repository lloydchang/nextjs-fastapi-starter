// app/page.tsx
// Client-side React component to fetch and display search results.

'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define an interface for the expected data structure
interface Item {
  title: string; // Adjust this based on the actual structure of your API response
}

const Page: React.FC = () => {
  const [data, setData] = useState<Item[]>([]); // Use the interface for the state
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    axios.get('http://localhost:8000/search?query=')
      .then((res) => {
        setData(res.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Set loading to false on error as well
      });
  }, []);

  return (
    <div>
      <h1>Hello,</h1> {/* Greeting displayed in the UI */}
      {loading ? (
        <p>Loading...</p> // Optional loading message
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.title}</li> // Accessing title of each item
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
