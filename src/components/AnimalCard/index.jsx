import React from 'react';

function AnimalCard(props) {
  const { animal } = props;
  console.log(animal);
  return (
    <div>
      <h1>{animal.name}</h1>
      <h2>{animal.species}</h2>
      <p>{animal.description}</p>
      <img src={animal.thumbnail} alt='thumbnail' />
      <img src={animal.image} alt='image' />
    </div>
  );
}

export default AnimalCard;
