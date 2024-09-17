import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
    <Navbar aboutText="About React"/>
    <div className="container">
    {/* <TextForm heading="Enter your Data"/> */}
    <About/>
    </div>
    
    </>
  );
}

export default App;
