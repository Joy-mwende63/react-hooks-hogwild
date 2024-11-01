import React, { useState } from 'react';
import HogDetails from './HogDetails';
import { Card } from 'semantic-ui-react';

function HogTile({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card onClick={() => setShowDetails(!showDetails)} className="ui eight wide column">
      <img src={hog.image} alt={hog.name} />
      <h2>{hog.name}</h2>
      {showDetails && <HogDetails hog={hog} />}
    </Card>
  );
}

export default HogTile;
