import React from 'react';
import { CenteringMethod } from '../types';

interface PreviewProps {
  method: CenteringMethod;
  properties: Record<string, string>;
}

export function Preview({ method, properties }: PreviewProps) {
  const getContainerStyle = () => {
    switch (method) {
      case 'flexbox':
        return {
          display: 'flex',
          justifyContent: properties.justifyContent || 'center',
          alignItems: properties.alignItems || 'center',
          flexDirection: properties.flexDirection || 'row',
        };
      case 'grid':
        return {
          display: 'grid',
          placeItems: properties.placeItems || 'center',
          gridTemplateColumns: properties.gridTemplateColumns || '1fr',
        };
      case 'absolute':
        return {
          position: 'relative',
          height: '100%',
        };
      case 'transform':
        return {
          position: 'relative',
          height: '100%',
        };
      case 'margin':
        return {
          height: '100%',
        };
      default:
        return {};
    }
  };

  const getBoxStyle = () => {
    switch (method) {
      case 'absolute':
      case 'transform':
        return {
          position: 'absolute',
          ...properties,
        };
      case 'margin':
        return {
          margin: properties.margin || 'auto',
          marginTop: properties.marginTop || '0',
          height: '96px',
          width: '96px',
        };
      default:
        return {};
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Preview</h2>
      <div
        className="w-full h-[400px] bg-gray-100 rounded-lg relative"
        style={getContainerStyle()}
      >
        <div
          className="w-24 h-24 rounded-lg shadow-lg overflow-hidden"
          style={getBoxStyle()}
        >
          <img
            src="https://media1.giphy.com/media/2A75RyXVzzSI2bx4Gj/giphy.gif"
            alt="Animated Capybara"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}