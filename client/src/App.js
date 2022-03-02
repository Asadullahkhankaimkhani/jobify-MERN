import { Route, Routes } from "react-router-dom";

import { Landing, Error, Dashboard, Register } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
