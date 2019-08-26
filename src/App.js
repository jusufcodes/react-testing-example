import React from 'react';
import './Styling/Styling.scss';
import {LoadPattern} from "./PatternDemo/Components";

function App() {
  const [base, component, fn] = window.location.pathname.split("/");

  return (
    <div className="App">
      <LoadPattern
        component={component}
        fn={fn}
      />
    </div>
  );
}

export default App;
