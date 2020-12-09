import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import './random-planet.css';

import { getPlanet } from '../../services/swapi-service';
import useData from '../hooks/useData';
import useInterval from '../hooks/useInterval';

import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import { PlanetDetails } from '../sw-components/details';

const _intervalDelay = 6000;
const getRandomPlanetId = () => Math.floor(Math.random() * 15 + 2);

const RandomPlanet = () => {
	const [randomId, setRandomId] = useState(5);

	const data = useData(getPlanet, {
		loading: true,
		error: false,
		data: null,
		itemId: randomId,
	});

	useInterval(() => setRandomId(getRandomPlanetId), _intervalDelay);

	if (data.error) {
		return <ErrorIndicator />;
	}

	if (data.data) {
		return (
			<Jumbotron className='random-planet mb-4'>
				<PlanetDetails itemId={randomId} nospinner message={<Spinner />} />
			</Jumbotron>
		);
	}

	return (
		<Jumbotron className='random-planet mb-4'>
			<Spinner />
		</Jumbotron>
	);
};

export default RandomPlanet;
