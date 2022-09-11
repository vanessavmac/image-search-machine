import { useEffect, useState } from 'react';
import API from '../api'
import Card from './Card';

function Results() {
  const [results, setResults] = useState([])
  const [thumbnail, setSrc] = useState('');
  const [title, setTitle] = useState('');
  const [source, setSource] = useState('');
  const [sourceLink, setSourceLink] = useState('');
  const [thumbnailLink, setThumbnailLink] = useState('');

  useEffect(() => {
    const fetchImg = async () => {
      let response = await API.get('/image-search');
      const data = response.data
      console.log(data)
      setResults(data)
    };
    fetchImg();
  }, []);

  return (
    <div>
      <h2>Search Results</h2>
      <button>Download All</button>
      <div className="gallery">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Results;
