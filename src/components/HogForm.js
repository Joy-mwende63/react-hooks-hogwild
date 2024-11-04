import React, { useState } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';

function HogForm({ setHogsData }) {
  const [newHog, setNewHog] = useState({
    name: '',
    image: '',
    specialty: '',
    weight: '',
    greased: false,
    highestMedal: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setHogsData(prevHogs => [...prevHogs, newHog]);
    setNewHog({ name: '', image: '', specialty: '', weight: '', greased: false, highestMedal: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={newHog.name}
          onChange={e => setNewHog({ ...newHog, name: e.target.value })}
        />
      </Form.Field>

      <Form.Field>
        <label>Image URL</label>
        <input
          type="text"
          placeholder="Image URL"
          value={newHog.image}
          onChange={e => setNewHog({ ...newHog, image: e.target.value })}
        />
      </Form.Field>

      <Form.Field>
        <label>Specialty</label>
        <input
          type="text"
          placeholder="Specialty"
          value={newHog.specialty}
          onChange={e => setNewHog({ ...newHog, specialty: e.target.value })}
        />
      </Form.Field>

      <Form.Field>
        <label>Weight</label>
        <input
          type="number"
          placeholder="Weight"
          value={newHog.weight}
          onChange={e => setNewHog({ ...newHog, weight: e.target.value })}
        />
      </Form.Field>

      <Form.Field>
        <Checkbox
          label='Greased'
          checked={newHog.greased}
          onChange={e => setNewHog({ ...newHog, greased: e.target.checked })}
        />
      </Form.Field>

      <Form.Field>
        <label>Highest Medal</label>
        <input
          type="text"
          placeholder="Highest Medal"
          value={newHog.highestMedal}
          onChange={e => setNewHog({ ...newHog, highestMedal: e.target.value })}
        />
      </Form.Field>

      <Button type="submit" primary>Add Hog</Button>
    </Form>
  );
}

export default HogForm;

