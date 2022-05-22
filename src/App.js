import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from './Components/Mainpage';
import Facecollector from './Components/Facecollector';
import Facerecogniser from './Components/Facerecogniser';

let titles="Smart Attendance System";
let about="About";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar title={titles} TextAbout={about}/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/mainpage" element={<Mainpage/>} />
          <Route path="/facecollector" element={<Facecollector/>} />
          <Route path="/facerecogniser" element={<Facerecogniser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
