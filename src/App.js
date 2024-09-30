// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from "react";

function App() {
    const [mode, setMode] = useState("light");
    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
        } else {
            setMode("light");
        }
    };
    return (
        <>
            <Navbar aboutText="About React" mode={mode} toggleMode={toggleMode} />
            <div className="container">
                <TextForm heading="Enter your Data" />
                {/* <About/> */}
            </div>
        </>
    );
}

export default App;
