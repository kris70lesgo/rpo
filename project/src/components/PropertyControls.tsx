import React, { useState } from 'react';
import { CenteringMethod } from '../types';
import { methodProperties } from '../utils/cssProperties';

interface PropertyControlsProps {
  method: CenteringMethod;
  properties: Record<string, string>;
  onPropertyChange: (properties: Record<string, string>) => void;
}

export function PropertyControls({
  method,
  properties,
  onPropertyChange,
}: PropertyControlsProps) {
  const [localProperties, setLocalProperties] = useState<Record<string, string>>({});

  const handlePropertyChange = (property: string, value: string) => {
    setLocalProperties({ ...localProperties, [property]: value });
  };

  const applyChanges = () => {
    onPropertyChange(localProperties);
  };

  const currentProperties = methodProperties[method];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Properties</h2>
      <div className="space-y-4">
        {Object.entries(currentProperties).map(([property, config]) => (
          <div key={property} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {config.label}
            </label>
            {config.type === 'select' ? (
              <select
                value={localProperties[property] || config.defaultValue}
                onChange={(e) => handlePropertyChange(property, e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              >
                {config.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={config.type}
                value={localProperties[property] || config.defaultValue}
                onChange={(e) => handlePropertyChange(property, e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            )}
          </div>
        ))}
        <button
          onClick={applyChanges}
          className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          Apply Changes
        </button>
      </div>
    </div>
  );
}