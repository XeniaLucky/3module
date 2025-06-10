import React from 'react';
import CardList from '../CardList/CardList';
import { useSearchParams } from 'react-router-dom';

const CardsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit') || '10') : 10; 

  return (
    <div>
      <h1>Cards Page</h1>
      <CardList limit={limit} />
    </div>
  );
};

export default CardsPage;