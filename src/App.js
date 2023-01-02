import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Footer from "./pages/Footer.jsx";
// import Sign from "./pages/Sign.jsx";

function App() {
  return (
    <div className="app_app">
      <Routes>
        <Route path='*' element={<Main />} />
        {/* <Route path='/sign' element={<Sign />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
