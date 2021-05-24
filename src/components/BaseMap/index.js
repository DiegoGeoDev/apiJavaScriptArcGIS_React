import React, { useEffect } from 'react';
import { useMapView } from '../../contexts/MapView';
import { setDefaultOptions, loadModules } from 'esri-loader';
import * as S from './styles';

const BaseMap = ({ center = [0, 0], zoom = 0, basemap = 'topo-vector' }) => {
	setDefaultOptions({ version: '4.19', css: true });

	const { setMapView } = useMapView();

	useEffect(() => {
		loadModules(['esri/Map', 'esri/views/MapView']).then(([ArcGISMap, MapView]) => {
			const map = new ArcGISMap({
				basemap,
			});

			const view = new MapView({
				container: 'mapViewDiv',
				map: map,
				center,
				zoom,
			});

			setMapView([map, view]);
		});
	}, [basemap, center, setMapView, zoom]);

	return <S.Container id="mapViewDiv" />;
};

export default BaseMap;
