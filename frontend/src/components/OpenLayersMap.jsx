import React, { useEffect } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

const OpenLayersMap = () => {
  useEffect(() => {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([37.7749, -122.4194]), // Example coordinates (San Francisco)
        zoom: 10,
      }),
    });

    return () => {
      // Cleanup on component unmount
      map.setTarget(null);
    };
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default OpenLayersMap;
