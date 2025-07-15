import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useAuth } from "./context/AuthProvider";
// import './App.css'

function App() {
  const {loading, data} = useAuth();
  console.log(loading)
  console.log(data)
  return (
    <>
      <Navbar />
      <Sidebar/>
    </>
  );
}

export default App;