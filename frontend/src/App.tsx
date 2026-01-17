import { Routes, Route } from 'react-router-dom';
import ProblemListPage from '@pages/ProblemListPage';
import ProblemDetailPage from './pages/ProblemDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProblemListPage />} />
      <Route path="/problems/:id" element={<ProblemDetailPage />} />
    </Routes>
  );
}

export default App;
