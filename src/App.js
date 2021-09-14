import { Route } from "react-router-dom";
import Homepage from "./Homepage";
import React, { useState } from "react";
import EntryPage from "./EntryPage";

function App() {
  const [showBg, setShowBg] = useState(true);

  return (
    <React.Fragment>
      {showBg ? (
        <EntryPage setShowBg={setShowBg} />
      ) : (
        <Route path="/Homepage" component={Homepage} />
      )}
    </React.Fragment>
  );
}

export default App;
