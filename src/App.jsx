import "./App.css";
import Aboutme from "./components/Aboutme";
import MyProject from "./components/MyProject";
import MySkills from "./components/MySkills";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Aboutme />
      <MyProject />
      <MySkills />
    </div>
  );
}

export default App;
