import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Menu />
      {/* Your other components/routes */}
    </BrowserRouter>
  );
}

export default App;
