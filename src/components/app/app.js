import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './app.css';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrBoundary from '../err-boundary/err-boundary';
import PeoplePage from '../pages/people-page';
import PlanetsPage from '../pages/planets-page';
import StarshipsPage from '../pages/starships-page';
import StarshipDetails from '../sw-components/starship-details';

const App = () => {
	return (
		<ErrBoundary>
			<Container fluid='lg' className='app'>
				<Router>
					<Header />

					<RandomPlanet />

					<Switch>
						<Route
							exact
							path='/'
							render={() => (
								<h2 className='text-center'>Welcome to Star Wars Data Base</h2>
							)}
						></Route>

						<Route path='/people/:id?'>
							<PeoplePage />
						</Route>

						<Route path='/planets/:id?'>
							<PlanetsPage />
						</Route>

						<Route exact path='/starships/'>
							<StarshipsPage />
						</Route>

						<Route
							path='/starships/:id'
							render={() => <StarshipDetails />}
						></Route>

						<Route render={() => <h2>Page not found :(</h2>} />
					</Switch>
				</Router>
			</Container>
		</ErrBoundary>
	);
};

export default App;
