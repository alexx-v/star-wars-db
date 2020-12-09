import React from 'react';

import ItemDetails from '../item-details/item-details';
import Record from '../record/record';

import withData from '../hoc-helpers/with-data';
import withChildFunction from '../hoc-helpers/with-child-function';
import { getPerson, getPlanet } from '../../services/swapi-service';

const createRecord = (arr) => {
	return arr.map(({ field, label }) => {
		return <Record key={field} field={field} label={label} />;
	});
};

const records = {
	person: [
		{ field: 'gender', label: 'Gender' },
		{ field: 'birthYear', label: 'Birth Year' },
	],
	planet: [
		{ field: 'population', label: 'Population' },
		{ field: 'rotationPeriod', label: 'Rotation Period' },
		{ field: 'diameter', label: 'Diameter' },
	],
};

const renderPerson = createRecord(records.person);
const renderPlanet = createRecord(records.planet);

const PersonDetails = withData(
	withChildFunction(ItemDetails, renderPerson),
	getPerson
);

const PlanetDetails = withData(
	withChildFunction(ItemDetails, renderPlanet),
	getPlanet
);

export { PersonDetails, PlanetDetails };
