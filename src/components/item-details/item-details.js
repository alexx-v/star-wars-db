import React, { Children, cloneElement } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import './item-details.css';

import SmoothImage from '../smoothImage/smoothImage';
import ErrBoundary from '../err-boundary/err-boundary';

const ItemDetails = ({
	data,
	children,
	message = <p className='text-info'>Select an item from a list</p>,
}) => {
	if (!data) return message;

	return (
		<ErrBoundary>
			<Card className='item-details'>
				<div className='item-image'>
					<SmoothImage src={data.image} alt={data.name} />
				</div>

				<Card.Body>
					<Card.Title>{data.name}</Card.Title>
					<ListGroup variant='flush' className='list-group'>
						{Children.map(children, (child) => {
							return cloneElement(child, { data });
						})}
					</ListGroup>
				</Card.Body>
			</Card>
		</ErrBoundary>
	);
};

export default ItemDetails;
