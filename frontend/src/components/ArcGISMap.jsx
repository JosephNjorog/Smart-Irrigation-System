import React, { useEffect, useRef } from 'react';
import { loadModules } from '@arcgis/core';

const ArcGISMap = () => {
  const mapRef = useRef();

  useEffect(() => {
    let view;

    loadModules(['esri/views/MapView', 'esri/WebMap'])
      .then(([MapView, WebMap]) => {
        const webmap = new WebMap({
          portalItem: {
            id: 'your-arcgis-webmap-id',
          },
        });

        view = new MapView({
          container: mapRef.current,
          map: webmap,
        });
      });

    return () => {
      if (view) {
        view.destroy();
      }
    };
  }, []);

  return <div className="arcgis-map" ref={mapRef} style={{ height: '400px', width: '100%' }}></div>;
};

export default ArcGISMap;
