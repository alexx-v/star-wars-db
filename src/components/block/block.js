import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const Block = ({ left, right }) => {
	return (
		<Row>
			<Col sm={12} md={{ span: 6, order: 'first' }}>
				{left}
			</Col>
			<Col sm={12} md={6} xs={{ order: 'first' }} className='mb-4'>
				{right}
			</Col>
		</Row>
	);
};

Block.propTypes = {
	left: PropTypes.node,
	right: PropTypes.node,
};

export default Block;
