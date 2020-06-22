import React, { useState } from 'react';

export const Exemple = React.memo (function Example() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  const [count, setCount] = useState(0);

  function onClick () {
    setCount(count + 1)
  }
  return <div>
    {console.log('render Exemple')}
    <p>Vous avez cliqué {count} fois</p>
    <button onClick={onClick}>
      Cliquez ici
    </button>
  </div>
})