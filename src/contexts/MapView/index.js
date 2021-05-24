import { createContext, useState, useContext } from 'react';

const MapViewContext = createContext();

export default function MapViewProvider({ children }) {
	const [mapView, setMapView] = useState([]);

	return (
		<MapViewContext.Provider
			value={{
				mapView,
				setMapView,
			}}
		>
			{children}
		</MapViewContext.Provider>
	);
}

export function useMapView() {
	const { mapView, setMapView } = useContext(MapViewContext);
	return { mapView, setMapView };
}
