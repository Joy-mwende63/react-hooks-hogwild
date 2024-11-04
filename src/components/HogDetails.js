import React from 'react';
import { Card } from 'semantic-ui-react';

function HogDetails({ hog }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{hog.name}</Card.Header>
        <Card.Description>
          <p><strong>Specialty:</strong> {hog.specialty}</p>
          <p><strong>Weight:</strong> {hog.weight}</p>
          <p><strong>Greased:</strong> {hog.greased ? 'Yes' : 'No'}</p>
          <p><strong>Highest Medal Achieved:</strong> {hog.highestMedal}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default HogDetails;

