import { useState, useEffect } from "react";
import Alert from "./Components/Alert";
import List from "./Components/List";
import "./App.css";

// local storage
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!name) {
  
      showAlert(true, "danger", "please enter value");
    } 
    }
      
  return (
    <div>
      <section className="section-center">
        <form className="todo-form" onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
          <h1>Todo List App</h1>
          <div className="form-control">
            
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;
