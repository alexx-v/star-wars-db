const _apiBase = 'https://swapi.dev/api';
const _imageBase = 'https://starwars-visualguide.com/assets/img';

// Extract id at the end of a URL (path/id/).
const _extractId = (item) => {
	const idRegExp = /\/(\d+)\/$/;
	return (item = item.match(idRegExp)[1]);
};

const _transformPerson = (person) => {
	return {
		id: _extractId(person.url),
		name: person.name,
		gender: person.gender,
		birthYear: person.birth_year,
		hairColor: person.hair_color,
		image: person.image,
	};
};

const _transformPlanet = (planet) => {
	return {
		id: _extractId(planet.url),
		name: planet.name,
		population: planet.population,
		rotationPeriod: planet.rotation_period,
		diameter: planet.diameter,
		image: planet.image,
	};
};

const _transformStarship = (starship) => {
	return {
		id: _extractId(starship.url),
		name: starship.name,
		model: starship.model,
		manufacturer: starship.manufacturer,
		costInCredits: starship.cost_in_credits,
		length: starship.length,
		image: starship.image,
	};
};

const getResource = async (url, cancelFetch) => {
	const res = await fetch(`${_apiBase}${url}`, cancelFetch);

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, received ${res.status}`);
	}

	return await res.json();
};

export const getAllPeople = async (cancelFetch) => {
	const { results } = await getResource(`/people/`, cancelFetch);
	return results.map(_transformPerson);
};

export const getAllPlanets = async (cancelFetch) => {
	const { results } = await getResource(`/planets/`, cancelFetch);
	return results.map(_transformPlanet);
};

export const getAllStarships = async (cancelFetch) => {
	const { results } = await getResource(`/starships/`, cancelFetch);
	return results.map(_transformStarship);
};

export const getPerson = async (cancelFetch, id) => {
	if (id === null) return;
	const person = await getResource(`/people/${id}/`, cancelFetch);
	person.image = getPersonImage(id);
	return _transformPerson(person);
};

export const getPlanet = async (cancelFetch, id) => {
	if (id === null) return;
	const planet = await getResource(`/planets/${id}/`, cancelFetch);
	planet.image = getPlanetImage(id);
	return _transformPlanet(planet);
};

export const getStarship = async (cancelFetch, id) => {
	if (id === null) return;
	const starship = await getResource(`/starships/${id}/`, cancelFetch);
	starship.image = getStarshipImage(id);
	return _transformStarship(starship);
};

export const getPersonImage = (id) => {
	return `${_imageBase}/characters/${id}.jpg`;
};

export const getPlanetImage = (id) => {
	return `${_imageBase}/planets/${id}.jpg`;
};

export const getStarshipImage = (id) => {
	return `${_imageBase}/starships/${id}.jpg`;
};
