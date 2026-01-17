import { Routes, Route } from 'react-router-dom';
import ProblemListPage from '@pages/ProblemListPage';
import ProblemDetail from './pages/ProblemDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProblemListPage />} />
      <Route path="/problems/:id" element={<ProblemDetail />} />
    </Routes>
  );
}

export default App;
