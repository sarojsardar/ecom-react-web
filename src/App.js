import React from "react";
import { Routes ,Route } from 'react-router-dom';

import Masterlayout from "./layouts/admin/MasterLayout";

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path="/admin" name="Admin" render={(props)=>  <Masterlayout {...props} />} />
      </Routes>

    </div>
  );
}

export default App;
