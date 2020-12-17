import React from "react";
import Header from "./component/Header/Header";
import AddTodo from "./component/AddTodo/AddTodo";
import List from "./component/List/List";
import Footer from "./component/Footer/Footer";
import { DataProvider } from "./component/DataProvider/DataProvider"

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header />
        <AddTodo />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
