// app/page.tsx
// Client-side React component to fetch and display search results.

'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define an interface for the item
interface Item {
  title: string;
}

// Define the state type as an array of Item
const Page: React.FC = () => {
  const [data, setData] = useState<Item[]>([]); // Set the initial state type to Item[]

  useEffect(() => {
    axios.get<Item[]>('http://localhost:8000/search?query=TED') // Ensure the response is typed
      .then((res) => setData(res.data))
      .catch(console.error); // Simplified error handling
  }, []);

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  );
};

export default Page;
