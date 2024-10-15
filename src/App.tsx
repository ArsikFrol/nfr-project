import React from "react";
import './App.css'

import RouterComponent from "./router";
import { useDispatch } from "react-redux";
import axios from "axios";

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    axios.get('http://localhost:3001/user').then((data) => {
      dispatch({ type: 'OPEN_SITE_USERS', payload: data.data })
    })
    axios.get('http://localhost:3001/collection').then((data) => {
      dispatch({ type: 'OPEN_SITE_COLLECTION', payload: data.data })
    })
  }, [])

  return (
    <>
      <RouterComponent />
    </>
  );
}

export default App;
