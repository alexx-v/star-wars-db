import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { PersonList } from '../sw-components/item-lists';
import { PersonDetails } from '../sw-components/details';
import Block from '../block/block';

const PeoplePage = () => {
	const history = useHistory();
	const { id = null } = useParams();

	return (
		<Block
			left={<PersonList onItemSelected={(id) => history.push(id)} />}
			right={<PersonDetails itemId={id} />}
		></Block>
	);
};

export default PeoplePage;
