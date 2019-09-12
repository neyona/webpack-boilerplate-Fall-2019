import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <p>This is the App file in the source folder.</p>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
