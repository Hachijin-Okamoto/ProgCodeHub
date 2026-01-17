import { Routes, Route } from 'react-router-dom';
import ProblemListPage from '@pages/ProblemListPage';
import ProblemDetailPage from './pages/ProblemDetailPage';
import ProblemCreatePage from '@pages/ProblemCreatePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProblemListPage />} />
      <Route path="/problems/:id" element={<ProblemDetailPage />} />
      <Route path="/problems/create" element={<ProblemCreatePage />} />
    </Routes>
  );
}

export default App;
