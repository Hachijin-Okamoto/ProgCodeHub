import { Routes, Route } from 'react-router-dom';
import ProblemListPage from '@pages/ProblemListPage';
import ProblemDetailPage from './pages/ProblemDetailPage';
import ProblemCreatePage from '@pages/ProblemCreatePage';
import ProblemEditPage from '@pages/ProblemEditPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProblemListPage />} />
      <Route path="/problems/:id" element={<ProblemDetailPage />} />
      <Route path="/problems/create" element={<ProblemCreatePage />} />
      <Route path="/problems/:id/edit" element={<ProblemEditPage />} />
    </Routes>
  );
}

export default App;
