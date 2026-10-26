import { useState } from "react";
 function App()
 {
    const [color]=useState("pink")
    return(
        <>
        <div className="w-full h-screen duration-100" 
        style={{backgroundColor:color}}></div>
        </>
    )
 }
 export default App