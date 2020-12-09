import React from 'react';
import { useHistory } from 'react-router-dom';
import { StarshipList } from '../sw-components/item-lists';

const PeoplePage = () => {
	const history = useHistory();

	return (
		<StarshipList
			onItemSelected={(id) => {
				history.push(id);
			}}
		/>
	);
};

export default PeoplePage;
