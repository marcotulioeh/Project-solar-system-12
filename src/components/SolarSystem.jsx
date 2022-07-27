import React from 'react';
// import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import '../App.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <div id="title-div">
          <h2 id="title-planet">Planetas</h2>
        </div>
        <div className="planet-div">
          {planets.map((element) => (<PlanetCard
            key={ element.name }
            planetName={ element.name }
            planetImage={ element.image }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
