import React, { useState } from 'react';
import useErrorBoundary from 'use-error-boundary';

import ErrorIndicator from '../error-indicator/error-indicator';

const ErrorButton = () => {
	const { ErrorBoundary, didCatch, error } = useErrorBoundary();

	const [renderError, setRenderError] = useState(false);

	if (renderError) {
		this.foo.bar = 0;
	}

	if (didCatch) {
		return <ErrorIndicator className='mt-5' />;
	}

	return (
		<ErrorBoundary>
			<button
				className='btn btn-danger btn-lg'
				onClick={() => setRenderError(true)}
			>
				Throw Error
			</button>
		</ErrorBoundary>
	);
};

export default ErrorButton;
