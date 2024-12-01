import { CenteringMethod } from '../types';

export interface PropertyConfig {
  label: string;
  type: 'select' | 'text' | 'number';
  options?: string[];
  defaultValue: string;
}

export const methodProperties: Record<CenteringMethod, Record<string, PropertyConfig>> = {
  flexbox: {
    'justifyContent': {
      label: 'Justify Content',
      type: 'select',
      options: ['center', 'flex-start', 'flex-end', 'space-between', 'space-around'],
      defaultValue: 'center',
    },
    'alignItems': {
      label: 'Align Items',
      type: 'select',
      options: ['center', 'flex-start', 'flex-end', 'stretch', 'baseline'],
      defaultValue: 'center',
    },
    'flexDirection': {
      label: 'Flex Direction',
      type: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      defaultValue: 'row',
    },
  },
  grid: {
    'placeItems': {
      label: 'Place Items',
      type: 'select',
      options: ['center', 'start', 'end', 'stretch'],
      defaultValue: 'center',
    },
    'gridTemplateColumns': {
      label: 'Grid Template Columns',
      type: 'text',
      defaultValue: '1fr',
    },
  },
  absolute: {
    top: {
      label: 'Top',
      type: 'text',
      defaultValue: '50%',
    },
    left: {
      label: 'Left',
      type: 'text',
      defaultValue: '50%',
    },
    transform: {
      label: 'Transform',
      type: 'text',
      defaultValue: 'translate(-50%, -50%)',
    },
  },
  margin: {
    margin: {
      label: 'Margin',
      type: 'text',
      defaultValue: 'auto',
    },
    marginTop: {
      label: 'Margin Top',
      type: 'text',
      defaultValue: '0',
    },
  },
  transform: {
    position: {
      label: 'Position',
      type: 'select',
      options: ['relative', 'absolute', 'fixed'],
      defaultValue: 'relative',
    },
    transform: {
      label: 'Transform',
      type: 'text',
      defaultValue: 'translate(-50%, -50%)',
    },
  },
};