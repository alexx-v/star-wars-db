import React from 'react';

import './error-indicator.css';
import errorImage from './boom.gif';

const ErrorIndicator = () => {
	return (
		<div className='error-indicator my-5'>
			<img src={errorImage} alt='error' className='error-indicator__img' />
			<span className='boom'>BOOM!</span>
			<span>Something has gone terribly wrong</span>
			<span>(but we have already sent droids to fix it)</span>
		</div>
	);
};

export default ErrorIndicator;
