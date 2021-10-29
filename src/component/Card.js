import React from 'react';
import './card.css';
import moment from 'moment';

const Card = ({ title, image, altText, date, number }) => {
  return (
    <div className="card">
      {image !== '' && <img src={image} alt={altText} className="image" />}
      {image === '' && (
        <img
          src="https://picsum.photos/id/1025/200/300"
          alt="Placeholder."
          className="image" />
      )}
      <div className="info">
        <div>
          {date !== '' && <p>{moment(date).format('MMMM  YYYY')}</p>}
          {date === '' && <p>{moment('01/01/2022').format('MMMM  YYYY')}</p>}
          {number !== '' && <p>{number}.</p>}
          {number === '' && <p>01.</p>}
        </div>
        {title !== '' && <h1>{title}</h1>}
        {title === '' && <h1>The beginning of everything.</h1>}
      </div>
    </div>
  );
};

export default Card;
