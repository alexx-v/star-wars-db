import React from 'react';
import { useParams } from 'react-router-dom';

import ItemDetails from '../item-details/item-details';
import Record from '../record/record';
import ErrorIndicator from '../error-indicator/error-indicator';
import Spinner from '../spinner/spinner';

import { getStarship } from '../../services/swapi-service';
import useData from '../hooks/useData';

const StarshipDetails = () => {
	const { id } = useParams();

	const data = useData(getStarship, {
		loading: true,
		error: false,
		data: null,
		itemId: id,
	});

	if (data.loading) {
		return <Spinner />;
	}

	if (data.error) {
		return <ErrorIndicator />;
	}

	return (
		<ItemDetails data={data.data}>
			<Record field='model' label='Model' />
			<Record field='length' label='Length' />
			<Record field='costInCredits' label='Cost' />
		</ItemDetails>
	);
};

export default StarshipDetails;
