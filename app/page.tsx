// app/page.tsx
// Client-side React component to fetch and display search results.

'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Page: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/search?query=TED')
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
