import React from 'react';
import { Header } from './components/Header';
import { Playground } from './components/Playground';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto py-8">
        <Playground />
      </main>
    </div>
  );
}

export default App;