import React from 'react';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <div id="missions-div">
          <h2 id="title-missions">Missões</h2>
        </div>
        <section>
          {missions.map((element) => (
            <MissionCard
              key={ element.name }
              name={ element.name }
              year={ element.year }
              country={ element.country }
              destination={ element.destination }
            />))}
        </section>
      </div>
    );
  }
}

export default Missions;
