import React from "react";
import './App.css'

import RouterComponent from "./router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function App() {
  const dispatch = useDispatch()

  const users = useSelector((state: any) => state.allUser.users)
  const collections = useSelector((state: any) => state.allUser.collection)
  const soldNFT = useSelector((state: any) => state.allUser.soldNFT)
  const soldCollection = useSelector((state: any) => state.allUser.soldCollection)


  React.useEffect(() => {
    axios.get('http://localhost:3001/user').then((data) => {
      dispatch({ type: 'OPEN_SITE_USERS', payload: data.data })
    })
    axios.get('http://localhost:3001/collection').then((data) => {
      dispatch({ type: 'OPEN_SITE_COLLECTION', payload: data.data })
    })
    axios.get('http://localhost:3001/soldNFT').then((data) => {
      dispatch({ type: 'OPEN_SOLD_NFT', payload: data.data })
    })
    axios.get('http://localhost:3001/soldCollections').then((data) => {
      dispatch({ type: 'OPEN_SOLD_COLLECTION', payload: data.data })
    })
  }, [])

  return (
    <>
      {soldNFT ? soldCollection ? users ? collections ? <RouterComponent /> : console.log() : console.log() : console.log() : console.log()}
    </>
  );
}

export default App;
