import "./App.css";
import { EndPage } from "./pages/EndPage";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";
import { Page3 } from "./pages/Page3";
import { Page4 } from "./pages/Page4";
import { Page5 } from "./pages/Page5";
import { Page6 } from "./pages/Page6";
import { StartPage } from "./pages/StartPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="w-screen h-screen max-w-screen-sm m-auto box-border py-8 px-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/1" element={<Page1 />} />
          <Route path="/2" element={<Page2 />} />
          <Route path="/3" element={<Page3 />} />
          <Route path="/4" element={<Page4 />} />
          <Route path="/5" element={<Page5 />} />
          <Route path="/6" element={<Page6 />} />
          <Route path="/end" element={<EndPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
