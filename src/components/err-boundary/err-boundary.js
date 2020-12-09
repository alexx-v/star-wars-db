import React from 'react';
import useErrorBoundary from 'use-error-boundary';

import ErrorIndicator from '../error-indicator/error-indicator';

const ErrBoundary = ({ children }) => {
	const { ErrorBoundary, didCatch } = useErrorBoundary();

	if (didCatch) {
		return <ErrorIndicator />;
	}

	return <ErrorBoundary>{children}</ErrorBoundary>;
};

export default ErrBoundary;
