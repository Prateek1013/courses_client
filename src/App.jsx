import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import AddCourse from "./components/popups/AddCourse";
function App() {
  return (
    <BrowserRouter>
      <div className="bg-base h-screen">
        <AddCourse/>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/course/details/:id" element={<Details/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
