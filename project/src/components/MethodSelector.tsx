import React from 'react';
import { CenteringMethod } from '../types';
import { Box, Grid, Move, MoveHorizontal, ArrowUpDown } from 'lucide-react';

const methods = [
  { id: 'flexbox', label: 'Flexbox', icon: Box },
  { id: 'grid', label: 'Grid', icon: Grid },
  { id: 'absolute', label: 'Absolute', icon: Move },
  { id: 'margin', label: 'Margin', icon: MoveHorizontal },
  { id: 'transform', label: 'Transform', icon: ArrowUpDown },
] as const;

interface MethodSelectorProps {
  method: CenteringMethod;
  onMethodChange: (method: CenteringMethod) => void;
}

export function MethodSelector({ method, onMethodChange }: MethodSelectorProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Select Centering Method</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {methods.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onMethodChange(id as CenteringMethod)}
            className={`flex flex-col items-center p-3 rounded-lg transition-colors
              ${method === id
                ? 'bg-purple-100 text-purple-700 border-2 border-purple-500'
                : 'bg-gray-50 hover:bg-gray-100'
              }`}
          >
            <Icon className="h-6 w-6 mb-2" />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}