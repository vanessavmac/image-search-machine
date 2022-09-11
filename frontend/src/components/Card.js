import React from 'react';

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';

function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <a href={props.thumbnailLink}>
          <img src={props.thumbnail} alt={props.title} />
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
          <a href={props.sourceLink}>{props.source}</a>
        </h4>
        <p>{props.title}</p>
      </div>
    </div>
  );
}

export default Card;
