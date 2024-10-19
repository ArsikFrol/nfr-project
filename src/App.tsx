import React from "react";
import './App.css'

import RouterComponent from "./router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function App() {
  const dispatch = useDispatch()

  const users = useSelector((state: any) => state.allUser.users)
  const collections = useSelector((state: any) => state.allUser.collection)

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
      {users ? collections ? <RouterComponent /> : console.log() : console.log()}
    </>
  );
}

export default App;
