import React from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';
import Spinner from '../spinner/spinner';
import useData from '../hooks/useData';

const withData = (View, getData) => {
	return (props) => {
		const data = useData(getData, {
			loading: true,
			error: false,
			data: null,
			itemId: props.itemId,
		});

		if (data.loading && !props.nospinner) {
			return <Spinner />;
		}

		if (data.error) {
			return <ErrorIndicator />;
		}

		if (data) {
			return <View {...props} data={data.data} />;
		}
	};
};

export default withData;
