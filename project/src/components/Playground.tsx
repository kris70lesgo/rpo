import React, { useState } from 'react';
import { CenteringMethod } from '../types';
import { MethodSelector } from './MethodSelector';
import { PropertyControls } from './PropertyControls';
import { Preview } from './Preview';
import { CodeDisplay } from './CodeDisplay';
import { GameMode } from './GameMode';

export function Playground() {
  const [method, setMethod] = useState<CenteringMethod>('flexbox');
  const [properties, setProperties] = useState<Record<string, string>>({});
  const [isGameMode, setIsGameMode] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <button
          onClick={() => setIsGameMode(!isGameMode)}
          className={`px-4 py-2 rounded-md transition-colors ${
            isGameMode
              ? 'bg-purple-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {isGameMode ? 'Practice Mode' : 'Challenge Mode'}
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <MethodSelector method={method} onMethodChange={setMethod} />
          {isGameMode ? (
            <GameMode
              onMethodChange={setMethod}
              onPropertiesChange={setProperties}
            />
          ) : (
            <>
              <PropertyControls
                method={method}
                properties={properties}
                onPropertyChange={setProperties}
              />
              <CodeDisplay method={method} properties={properties} />
            </>
          )}
        </div>
        <Preview method={method} properties={properties} />
      </div>
    </div>
  );
}