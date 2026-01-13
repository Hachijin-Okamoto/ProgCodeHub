import { Routes, Route } from "react-router-dom";
import ProblemList from "./pages/ProblemList";
import ProblemDetail from "./pages/ProblemDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProblemList />} />
      <Route path="/problems/:id" element={<ProblemDetail />} />
    </Routes>
  );
}

export default App;
