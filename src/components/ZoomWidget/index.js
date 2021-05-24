import React, { useState, useEffect } from 'react';
import { useMapView } from '../../contexts/MapView';
import * as S from './styles';

const ZoomWidget = ({ position = 'top-left', zoom }) => {
	const { mapView } = useMapView();
	const [, view] = mapView;
	const [zoomState, setZoomState] = useState(zoom);

	useEffect(() => {
		view &&
			view.watch('zoom', function (newValue, oldValue, property, object) {
				setZoomState(newValue.toFixed());
			});
	}, [view]);

	const validatePosition = (position) => {
		const positionValues = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
		return positionValues.includes(position) ? position : 'top-left';
	};

	const validatedPosition = validatePosition(position);

	return (
		<S.Container position={validatedPosition}>
			<S.Label>Zoom:</S.Label>
			<S.ZoomValue>{zoomState}</S.ZoomValue>
		</S.Container>
	);
};

export default ZoomWidget;
