import { useState } from "react";
import { Button } from "./components/Button";
import Input from "./components/Input";
import "./index.css";

function App() {
  const [show,setShow] = useState(false);
  return (
    <>
      <Input type="text" className="border-2 rounded-md border-slate-500 mb-3 mt-6 w-[15vmax] h-[4vmin] block" />
      <Input type={show?"text":"password"} className="border-2 rounded-md border-slate-500 mb-3 my-6 w-[15vmax] h-[4vmin]"/>
      <Button className="" onClick={() => setShow(!show)}>
        {show ? "hide" : "show"}
      </Button>
     
      <Button size="sm" variant="default" onClick={() => alert("hello")} className="block">
        Submit
      </Button>
    </>
  );
}

export default App;
