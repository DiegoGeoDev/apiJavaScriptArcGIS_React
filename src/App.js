import './App.css';
import BaseMap from './components/BaseMap';
import ZoomWidget from './components/ZoomWidget';

import MapViewProvider from './contexts/MapView';

function App() {
	const mapSettings = {
		center: [-45.9, -23.4],
		zoom: 8,
		basemap: 'topo-vector',
	};

	return (
		<MapViewProvider>
			<BaseMap center={mapSettings.center} zoom={mapSettings.zoom} basemap={mapSettings.basemap} />
			<ZoomWidget zoom={mapSettings.zoom} position="top-left" />
		</MapViewProvider>
	);
}

export default App;
