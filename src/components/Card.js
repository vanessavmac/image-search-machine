import React, { useState, useEffect } from 'react';
import API from '../api';

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';

function Card(props) {
  const [results, setResults] = useState([])
  const [thumbnail, setSrc] = useState('');
  const [title, setTitle] = useState('');
  const [source, setSource] = useState('');
  const [sourceLink, setSourceLink] = useState('');
  const [thumbnailLink, setThumbnailLink] = useState('');

  useEffect(() => {
    const fetchImg = async () => {
      let response = await API.get();
      console.log(response.data)
    };
    fetchImg();
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <a href={thumbnailLink}>
          <img src={thumbnail} alt={title} />
        </a>
      </div>
      <div className="card-body">
        <div className="card-controls">
          <span id="edit">
            <ModeEditOutlineOutlinedIcon />
          </span>
          <span id="download">
            <FileDownloadOutlinedIcon />
          </span>
          <span id="zoom">
            <ZoomInOutlinedIcon />
          </span>
        </div>
        <h3>{props.query}</h3>
        <h4>
          <a href={sourceLink}>{source}</a>
        </h4>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Card;
