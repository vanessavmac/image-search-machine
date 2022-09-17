import { useEffect, useState } from 'react';
import API from '../api';
import Card from './Card';

function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchImg = async () => {
      const res = await API.get('/api/searches/get-all');
      setResults(res.data);
      console.log(res.data);
    };
    fetchImg();
  }, []);

  return (
    <div>
      <h2>Search Results</h2>
      <button>Download All</button>
      <div className="gallery">
        
        {results.map((element) => (
          <Card
            key={element.id}
            thumbnailLink={element.cardImage.link}
            thumbnail={element.cardImage.thumbnail}
            title={element.cardImage.title}
            query={element.q}
            sourceLink={element.link}
            source={element.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Results;
