import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Price() {
  const [coin, setCoin] = useState(null);

  let { symbol } = useParams();
  let apiKey = import.meta.env.VITE_API_Key;
  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  async function getCoin() {
    try {
      let res = await axios.get(url);

      setCoin(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  //useEffect to get coin data and set to state
  useEffect(() => {
    getCoin();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist.
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return coin && coin.rate ? loaded() : loading();
}

export default Price;
