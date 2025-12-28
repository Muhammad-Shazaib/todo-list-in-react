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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    }
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div>
      <section className="section-center">
        <form className="todo-form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <h1>Todo List App</h1>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="Enter your Todo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>

        <br />
        <br />
        {list.length > 0 && (
          <div className="todo-container">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className="clear-btn" onClick={clearList}>
              Clear Items
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
