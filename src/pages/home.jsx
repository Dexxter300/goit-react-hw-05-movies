import { useEffect } from 'react';
import { getTrends } from 'components/api';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trends } from 'components/trends/trends';

const Home = () => {
  // const [status, setStatus] = useState('idle');
  const [trend, setTrend] = useState(null);
  useEffect(() => {
    // setStatus('pending');
    getTrends()
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setTrend(res.results);
        //   setStatus('resolved');
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1
        style={{
          margin: 0,
          paddingTop: '10px',
          paddingLeft: '5px',
          color: 'white',
        }}
      >
        Trends
      </h1>
      {trend && <Trends trends={trend} />}
    </div>
  );
};

export default Home;
