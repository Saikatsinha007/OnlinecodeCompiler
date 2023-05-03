import React from 'react';
import {AppBar, Toolbar,styled} from '@mui/material';
import imgageone from './assets/polar.png'
const Container =styled(AppBar)`
background:	 #ff944d;
height:12vh;
justifyContent="center";
`
const mystyle={
  display: "flex",
  justifycontent: "center"
}
const header = () => {
  return (
    <div>
       <Container position='static'>
        <Toolbar style={mystyle}><h1>Code Compiler</h1> 
             <img src={imgageone} style={{width:90}}/>
        </Toolbar>
       </Container>
 
 
  </div>
  )
}

export default header