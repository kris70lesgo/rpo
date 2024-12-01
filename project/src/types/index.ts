export type CenteringMethod = 'flexbox' | 'grid' | 'absolute' | 'margin' | 'transform';

export interface Challenge {
  id: string;
  title: string;
  description: string;
  method: CenteringMethod;
  targetProperties: Record<string, string>;
}

export interface GameState {
  currentScore: number;
  currentLevel: number;
  hintsRemaining: number;
  unlockedMethods: CenteringMethod[];
}