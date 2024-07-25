import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DataFetcher = () => {
  const [grimaldoData, setGrimaldoData] = useState(null);
  const [infoData, setInfoData] = useState(null);
  const [itemsData, setItemsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGrimaldoData = axios.get('/api/grimaldo');
    const fetchInfoData = axios.get('/api/info');
    const fetchItemsData = axios.get('/api/data');

    Promise.all([fetchGrimaldoData, fetchInfoData, fetchItemsData])
      .then(responses => {
        setGrimaldoData(responses[0].data);
        setInfoData(responses[1].data);
        setItemsData(responses[2].data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Data from Flask</h1>
      <h2>Grimaldo Message:</h2>
      <pre>{JSON.stringify(grimaldoData, null, 2)}</pre>
      <h2>Info:</h2>
      <pre>{JSON.stringify(infoData, null, 2)}</pre>
      <h2>Items:</h2>
      <pre>{JSON.stringify(itemsData, null, 2)}</pre>
      <button onClick={() => navigate('/joke')}>Go to Joke</button>
    </div>
  );
};

export default DataFetcher;
