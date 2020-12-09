import React from 'react';

import './record.css';
import { ListGroup } from 'react-bootstrap';

const Record = ({ data, field, label }) => {
	return (
		<ListGroup.Item className='record'>
			<span className='term'>{label}:</span>
			<span className='field'>{data[field]}</span>
		</ListGroup.Item>
	);
};

export default Record;
