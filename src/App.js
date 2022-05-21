import Login from './Components/Login';
import Navbar from './Components/Navbar';

let title="Smart Attendance System"
let about="About";
function App() {
  return (
    <div className="App">
      <Navbar title={title} TextAbout={about}/>
      <Login/>
    </div>
  );
}

export default App;
