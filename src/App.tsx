import React, { useState } from 'react';
import LandingAnimation from './components/LandingAnimation';
import CommitteePage from './components/CommitteePage';

function App() {
  const [showCommittee, setShowCommittee] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      {!showCommittee ? (
        <LandingAnimation onComplete={() => setShowCommittee(true)} />
      ) : (
        <CommitteePage />
      )}
    </div>
  );
}

export default App;