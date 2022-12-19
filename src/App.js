import React from "react";
import { Routes ,Route } from 'react-router-dom';

import Masterlayout from "./layouts/admin/MasterLayout";

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path="/admin/dashboard" element={<Masterlayout />} />
      </Routes>

    </div>
  );
}

export default App;
