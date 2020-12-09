import React, { useState } from 'react';

import './smoothImage.css';
import noImage from './no-image.jpg';

const SmoothImage = ({ src, alt }) => {
	const [loading, setLoading] = useState(true);
	const [isValidSrc, setIsValidSrc] = useState(!!src);

	return (
		<div className='smooth-image-wrapper'>
			{isValidSrc ? (
				<img
					src={src}
					alt={alt}
					className={`smooth-image image-${loading ? 'hidden' : 'visible'}`}
					onLoad={() => setLoading(false)}
					onError={() => {
						setLoading(false);
						setIsValidSrc(false);
					}}
				/>
			) : (
				<img
					src={noImage}
					alt={'Placeholder'}
					onLoad={() => setLoading(false)}
				/>
			)}
			{isValidSrc && loading && (
				<div className='smooth-preloader'>
					<span className='pulsate-bck' />
				</div>
			)}
		</div>
	);
};

export default SmoothImage;
