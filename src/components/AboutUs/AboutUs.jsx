import React from 'react';
import PersonCard from './PersonCard';
import './AboutUs.css';

const AboutUs = () => {
  const people = [
    {
      image: '../../vite.svg',
      name: 'Junus',
      surname: 'Osmanlic',
      description: 'Lead Developer and Project Manager'
    },
    {
      image: '../../vite.svg',
      name: 'Dzemil',
      surname: 'Sahovic',
      description: 'Designer with 5 years of experience'
    },
    {
      image: '../../vite.svg',
      name: 'Hamza',
      surname: 'Sener',
      description: 'Backend Developer'
    },
    {
      image: '../../vite.svg',
      name: 'Zejn',
      surname: 'Lekovic',
      description: 'Marketing and Communications Expert'
    }
  ];

  return (
    <div className="about-us-container">
      {people.map((person, index) => (
        <PersonCard
          key={index}
          image={person.image}
          name={person.name}
          surname={person.surname}
          description={person.description}
        />
      ))}
    </div>
  );
};

export default AboutUs;