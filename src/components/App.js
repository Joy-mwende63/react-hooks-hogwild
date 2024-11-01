import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import hogs from "../porkers_data"; // Make sure this path is correct
import HogFilterSort from "./HogFilterSort";
import HogForm from "./HogForm";

function App() {
	const [hogsData, setHogsData] = useState(hogs);
	const [greased, setGreased] = useState(false);
	const [sortBy, setSortBy] = useState('');

	const filteredHogs = hogsData.filter(hog => !greased || hog.greased);
	const sortedHogs = [...filteredHogs].sort((a, b) => {
		if (sortBy === 'name') return a.name.localeCompare(b.name);
		if (sortBy === 'weight') return a.weight - b.weight;
		return 0;
	});

	return (
		<div className="App">
			<Nav />
			<HogFilterSort setGreased={setGreased} setSortBy={setSortBy} />
			<div className="ui grid container">
				{sortedHogs.map(hog => (
					<HogTile key={hog.name} hog={hog} />
				))}
			</div>
			<HogForm setHogsData={setHogsData} />
		</div>
	);
}

export default App;
