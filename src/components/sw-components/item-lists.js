import React from 'react';

import ItemList from '../item-list/item-list';
import withData from '../hoc-helpers/with-data';
import withChildFunction from '../hoc-helpers/with-child-function';

import {
	getAllPeople,
	getAllPlanets,
	getAllStarships,
} from '../../services/swapi-service';

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => (
	<span>
		{name} ({model})
	</span>
);

const PersonList = withData(
	withChildFunction(ItemList, renderName),
	getAllPeople
);

const PlanetList = withData(
	withChildFunction(ItemList, renderName),
	getAllPlanets
);

const StarshipList = withData(
	withChildFunction(ItemList, renderModelAndName),
	getAllStarships
);

export { PersonList, PlanetList, StarshipList };
