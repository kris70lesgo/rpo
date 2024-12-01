import React from 'react';
import { CenteringMethod } from '../types';
import { ClipboardCopy } from 'lucide-react';

interface CodeDisplayProps {
  method: CenteringMethod;
  properties: Record<string, string>;
}

export function CodeDisplay({ method, properties }: CodeDisplayProps) {
  const generateCSS = () => {
    const lines = [
      '.container {',
      method === 'flexbox' ? '  display: flex;' :
      method === 'grid' ? '  display: grid;' :
      method === 'absolute' ? '  position: relative;' : '',
      ...Object.entries(properties).map(([prop, value]) => `  ${prop}: ${value};`),
      '}',
    ].filter(Boolean);

    if (method === 'absolute' || method === 'transform') {
      lines.push(
        '',
        '.centered-div {',
        '  position: absolute;',
        ...Object.entries(properties).map(([prop, value]) => `  ${prop}: ${value};`),
        '}'
      );
    }

    return lines.join('\n');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCSS());
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Generated CSS</h2>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 transition-colors"
        >
          <ClipboardCopy className="h-4 w-4" />
          Copy
        </button>
      </div>
      <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto">
        <code className="text-sm text-gray-800">{generateCSS()}</code>
      </pre>
    </div>
  );
}