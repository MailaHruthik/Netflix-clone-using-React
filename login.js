import netflixLogo from './Assets/netflix_logo.png';
import { useState } from 'react';
import'./login.css';


export function Login(){
    let[signState, setSignState] = useState("Sign In")
    return(
        <>
   
      <div className='container'>
        
        <div className='sign-up'>
        <img src={netflixLogo} className='netflixLogo'></img>
        <div className='sign-up-form' style={{color:'white'}}>
            <div className='details'>
            <p>{signState}</p>
            {signState=="Sign Up" ? 
            <input type='text'className='text' placeholder='Your name'></input>:<></>}
            <input type='text' className='text' placeholder='Email or phone number'></input>
            <input type='text'className='text' placeholder='Password'></input>
            <button className='btn'>{signState}</button>
            </div>
            <div style={{display:'flex'}} className='check-box'>
            <input type='checkbox'></input>
            <p>Remember me</p>
            <p style={{marginLeft:'45px'}}>Need Help</p>
            </div>
            <div className='sign-in-form'>
                {
                    signState=="Sign In" ? <p style={{fontSize:'small'}}>New to Netflix? <span style={{marginLeft:'5px', cursor:'pointer'}} onClick={()=>{setSignState("Sign Up")}}>{"Sign Up"}</span></p> :
                    <p style={{fontSize:'small'}}>Already have account? <span style={{marginLeft:'5px', cursor:'pointer'}} onClick={()=>{setSignState("Sign In")}} >{"Sign In"}</span></p> 
                }
            
            
            </div>

        </div>
        </div>
        </div>
        </>
      
    )
}