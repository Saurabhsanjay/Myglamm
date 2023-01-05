import { CircularProgress } from '@chakra-ui/react';
import React, { useContext } from 'react'
import AppContext from '../../context/Appcontext';

const Loading = () => {
  const {loading}=useContext(AppContext)
  
  
    if(loading){
      return(
          <div style={{display:"grid",placeItems:"center",height:"500px"}}>
          <CircularProgress isIndeterminate color='pink.500' thickness='6px' size='3.5rem' />
          </div>
          )
  }
  
  
}

export default Loading
