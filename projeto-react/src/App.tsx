import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import ConferenciaPage from "./pages/conferencia/ConferenciaPage.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conferencia" element={<ConferenciaPage />} />
      </Routes>
    </>
  );
}

export default App;
