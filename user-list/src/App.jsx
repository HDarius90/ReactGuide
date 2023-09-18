import "./App.css";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";
import { useState } from "react";

function App() {
  const [listItems, setListItems] = useState(["May (31 years old)"]);

  const onNewUser = (newListItem) => {
    setListItems((prevListItems) => [...prevListItems, newListItem]);
  };

  return (
    <div>
      <AddUser addUser={onNewUser} />
      <UsersList listItems={listItems} />
    </div>
  );
}

export default App;
