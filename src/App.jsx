import './css/app.css'
import Todo from "./components/Todo";
import Header from "./components/Header";
import React from 'react';


function App() {
  return (
    <div  className="App">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
