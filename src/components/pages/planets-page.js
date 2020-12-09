import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { PlanetList } from '../sw-components/item-lists';
import { PlanetDetails } from '../sw-components/details';
import Block from '../block/block';

const PlanetsPage = () => {
	const history = useHistory();
	const { id = null } = useParams();

	return (
		<Block
			left={<PlanetList onItemSelected={(id) => history.push(id)} />}
			right={<PlanetDetails itemId={id} />}
		></Block>
	);
};

export default PlanetsPage;
