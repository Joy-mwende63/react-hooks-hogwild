import React from 'react';

function HogFilterSort({ setGreased, setSortBy }) {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={e => setGreased(e.target.checked)} />
        Show Greased Hogs
      </label>
      <select onChange={e => setSortBy(e.target.value)}>
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}

export default HogFilterSort;
