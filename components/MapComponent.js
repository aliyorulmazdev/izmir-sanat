import { Map, Marker } from 'pigeon-maps';

const MapComponent = ({ center }) => {
  return (
    <Map center={center} zoom={14} width={600} height={400}>
      <Marker anchor={center} payload={1} />
    </Map>
  );
};

export default MapComponent;
