import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

import './item-list.css';

import ErrBoundary from '../err-boundary/err-boundary';

const ItemList = ({ data, onItemSelected, children: renderLabel }) => {
	const items = data.map((item) => {
		const { id } = item;
		const label = renderLabel(item);

		return (
			<ListGroup.Item key={id} action onClick={() => onItemSelected(id)}>
				{label}
			</ListGroup.Item>
		);
	});

	return (
		<ErrBoundary>
			<ListGroup className='item-list mb-4'>{items}</ListGroup>
		</ErrBoundary>
	);
};

ItemList.defaultProps = {
	onItemSelected: () => {},
};

ItemList.propTypes = {
	onItemSelected: PropTypes.func,
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	children: PropTypes.func.isRequired,
};

export default ItemList;
