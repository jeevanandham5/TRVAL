import { TextField } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/system'
import '../components/Signup.css'

const Newbtn = styled(Button)({
    backgroundColor:'#fff',
    color:'rgb(7, 88, 99)',
    width: '150px',
    height: '50px',
    margin: '40px',
    fontSize: '20px',
    fontWeight:'10px',
    "&:hover":{
        backgroundColor:'rgb(7, 88, 99)',
        color:'#fff',
        fontWeight:'10px',
    }
})

const Signup = () => {
  return (
    <>
    <div className='signup'>
        <div className='box'>
<h1>TRVLO <i className='fab fa-typo3'/></h1>
<TextField id="outlined-basic" label="Username" variant="outlined" color="common"   />
<TextField id="outlined-basic" label="E-mail" variant="outlined"color="common"   />
<TextField id="outlined-basic" label="Password" variant="outlined" color="common"   />
<TextField id="outlined-basic" label="confirm Password" variant="outlined" color="common"   />
<div className='button'>
    
<Newbtn variant="contained" className="new-btn"> Sign-up</Newbtn>

<Newbtn variant="contained" className="new-btn"> login</Newbtn>
</div>

        </div>

    </div>
    </>
  )
}

export default Signup