import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";

let titles="Smart Attendance System";
let about="About";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar title={titles} TextAbout={about}/>
        <Routes>
          <Route path="/" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
