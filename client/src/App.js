import { Route, Routes } from "react-router-dom";

import { Landing, Error, Register, ProtectedRoute } from "./pages";
import {
  AllJobs,
  AddJob,
  Stats,
  Profile,
  SharedLayout,
} from "./pages/dashboard";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        }
      >
        <Route path="add-job" element={<AddJob />} />
        <Route path="all-jobs" element={<AllJobs />} />
        <Route index element={<Stats />} />
        <Route path="add-job" element={<Profile />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
