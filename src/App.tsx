import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      {/* Your other components/routes */}
    </BrowserRouter>
  );
}

export default App;
