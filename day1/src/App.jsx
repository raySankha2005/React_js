import { useState } from 'react'

import './App.css'

// function App() {
//   const name="sankha"
//   const role="developer"
//   const goal="react js"

//   return (
//     <>
//     <div className='min-h-screen bg-gray-950 text-white flex flex-col justify-center items-center'>
//       <h1 className='font-bold text-4xl'>Hello ,{name}</h1>
//       <p className='font-medium text-2xl'>Role:--{role}</p>
//       <p className='font-light text-5xl'>Goal:--{goal}</p>
//     </div>
//     </>
//   )
// }

// export default App


//TOPIC 2--> PROPS AND DESTRUCTURING
// function Student({name,course,year}){
//   return(
//     <div>
//       <h1>{name}</h1>
//       <h4>Course:{course}</h4> 
//       <p>YEAR:{year}</p>
//     </div>
//   )
// }
// function App(){
//   return(
//   <div>
//     <Student name={"Sankhadip Ray"} course={"btech"} year={2026}></Student>
//      <Student name={"Aritra Maiti"} course={"btech"} year={2026}></Student>
//       <Student name={"Ishan Ray"} course={"btech"} year={2026}></Student>
//   </div>
//   );
// }
// export default App

//------>>Topic 3 Children props
// function Box({children})
// {
//   return(
//     <div className='rounded-3xl bg-olive-800 p-0.5 mb-1'>
//       {children}
//     </div>
//   )
// }
// function App()
// {
//   return(
//     <>
//      <Box>
//       <h1>React Story</h1>
//       <p>Quite Interesting </p>
//      </Box>
//      <Box>
//       <h1>Full stack Developer</h1>
//      <p>Learning skill which matters the most</p>
//      </Box>
//     </>
//   )
// }
// export default App