import React, { useState } from 'react';

function HogForm({ setHogsData }) {
  const [newHog, setNewHog] = useState({ name: '', image: '', specialty: '', weight: '', greased: false, highestMedal: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setHogsData(prevHogs => [...prevHogs, newHog]);
    setNewHog({ name: '', image: '', specialty: '', weight: '', greased: false, highestMedal: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Inputs for each property */}
      <input type="text" placeholder="Name" value={newHog.name} onChange={e => setNewHog({ ...newHog, name: e.target.value })} />
      <input type="text" placeholder="Image URL" value={newHog.image} onChange={e => setNewHog({ ...newHog, image: e.target.value })} />
      <input type="text" placeholder="Specialty" value={newHog.specialty} onChange={e => setNewHog({ ...newHog, specialty: e.target.value })} />
      <input type="number" placeholder="Weight" value={newHog.weight} onChange={e => setNewHog({ ...newHog, weight: e.target.value })} />
      <label>
        <input type="checkbox" checked={newHog.greased} onChange={e => setNewHog({ ...newHog, greased: e.target.checked })} />
        Greased
      </label>
      <input type="text" placeholder="Highest Medal" value={newHog.highestMedal} onChange={e => setNewHog({ ...newHog, highestMedal: e.target.value })} />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;
