import { Route } from "wouter"
import Home from "./components/Home"
import Index from "./components/Index"
import AddPeople from "./components/AddPeople"
import addBills from "./components/AddBills"

function App() {

  return (
    <>
      <Route path="/" component={Index} />
      <Route path="/home" component={Home}/>
      <Route path="/add-people" component={AddPeople} />
      <Route path="/add-bills" component={addBills} />


      <footer className="text-xs text-center fixed bottom-0 w-full p-4">Inspirado en la garza divisora por 5</footer>
    </>
  )
}

export default App
