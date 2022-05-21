import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from './Components/Mainpage';

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
        <Routes>
        <Route path="/mainpage" element={<Mainpage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
