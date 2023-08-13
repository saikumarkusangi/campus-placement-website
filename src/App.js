import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import './index.css';
import Home from "./pages/Home";
import Learning from "./pages/Learning";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/learning' element={<Learning/>}/>
          </Route>
        </Routes> 
      </BrowserRouter>

  );
}

export default App;
