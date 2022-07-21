// import Counter from "./components/Counter";
// import React from "react";
import CounterContainer from "./containers/CounterContainer";
// import Todos from "./components/Todos";
import TodosContainer from "./containers/TodosContainer";

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
