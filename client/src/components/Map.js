import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

const Map = ({ isMarker }) => {
  const lat = 51.827951;
  const lng = 55.144223;

  const handleClick = () => {
    window.location.assign(
      `https://www.google.ru/maps/dir//Ulitsa+70+Let+Vlksm,+14,+Orenburg,+Orenburgskaya+oblast',+460052/@${lat},${lng},19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x417bf68a2572a42f:0x2cdcc539c053d530!2m2!1d55.144282!2d51.8278883`,
    );
  };

  return (
    <div className='map'>
      <GoogleMap defaultCenter={{ lat: lat, lng: lng }} defaultZoom={18} onClick={handleClick}>
        {isMarker && <Marker position={{ lat: lat, lng: lng }} />}
      </GoogleMap>
    </div>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
