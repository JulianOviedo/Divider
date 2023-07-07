import { Route } from "wouter";
import Home from "./components/Home";
import Index from "./components/Index";
import AddPeople from "./components/AddPeople";
import addBills from "./components/AddBills";
import { useState } from "react";
import { PeopleContext } from "./context/PeopleContext";

interface GroupMembers {
  name: string;
  bill: number;
  id: string
}

function App() {
  const [people, setPeople] = useState<GroupMembers[]>([]);

  return (
    <>
      <PeopleContext.Provider value={{ people, setPeople }}>
        <Route path="/" component={Index} />
        <Route path="/home" component={Home} />
        <Route path="/add-people" component={AddPeople} />
        <Route path="/add-bills" component={addBills} />

        <footer className="text-xs text-center fixed bottom-0 w-full p-4">Inspirado en la garza divisora por 5</footer>
      </PeopleContext.Provider>
    </>
  );
}

export default App;
