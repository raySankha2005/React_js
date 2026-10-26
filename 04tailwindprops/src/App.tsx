import Card from "./components/card"
function App() {
 let  myObj={
  name:"Sankhadip",
  age:18,
  arr:[1,4,8,9]
  }
  let box=[1,7,0,6,4];
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Tailwind
      </h1>
      <Card username="sankhadip" headtxt="react1" />
      <Card username="Rick"  />
    </>
  )
}

export default App