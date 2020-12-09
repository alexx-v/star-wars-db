import { useState, useEffect } from 'react';

const useData = (getData, defaultResponse) => {
	const [data, setData] = useState(defaultResponse.data);
	const [loading, setLoading] = useState(defaultResponse.loading);
	const [error, setError] = useState(defaultResponse.error);
	const { itemId } = defaultResponse;

	useEffect(() => {
		const abortController = new AbortController();
		setLoading(true);
		setError(false);

		if (itemId === null) {
			setLoading(false);
			return;
		}

		getData({ signal: abortController.signal }, itemId)
			.then((data) => {
				setData(data);
				setLoading(false);
			})
			.catch(() => {
				if (!abortController.signal.aborted) {
					setError(true);
					setLoading(false);
				}
			});

		return () => {
			abortController.abort();
		};
	}, [itemId, getData]);

	return { data, loading, error };
};

export default useData;
