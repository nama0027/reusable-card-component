import React from 'react';
import styled from 'styled-components';
import placeHolder from 'assets/placeholder.png';

import moment from 'moment';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 40.62rem;
  width: 25rem;
  background-color: #e5dccd;
  font-weight: 400;
  font-style: normal;
  box-shadow: -4px 4px 2px rgba(0, 0, 0, 0.5);
  border-radius: 2px;
`;
const CardImage = styled.img`
  width: 100%;
  height: 27rem;
`;
const TitleText = styled.h1`
  line-height: 4rem;
  font-family: 'Rosarivo', serif;
  font-size: 2.88rem;
  margin: 0;
  padding: 0 24px;
`;
const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
`;
const DateNumber = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.2rem;
  text-transform: uppercase;
`;

const CardStyledCom = ({ title, image, altText, date, number }) => {
  return (
    <CardContainer>
      {image !== '' && <CardImage src={image} alt={altText} />}
      {image === '' && <CardImage src={placeHolder} alt="Placeholder." />}
      <div className="info">
        <DateContainer>
          {date !== '' && (
            <DateNumber>{moment(date).format('MMMM  YYYY')}</DateNumber>
          )}
          {date === '' && (
            <DateNumber>{moment('01/01/2022').format('MMMM  YYYY')}</DateNumber>
          )}
          {number !== '' && <DateNumber>{number}.</DateNumber>}
          {number === '' && <DateNumber>01.</DateNumber>}
        </DateContainer>
        {title !== '' && <TitleText>{title}</TitleText>}
        {title === '' && <TitleText>The beginning of everything.</TitleText>}
      </div>
    </CardContainer>
  );
};

export default CardStyledCom;
