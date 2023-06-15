import React from 'react';
import { useState ,useContext} from 'react';
import { Box,TextField ,Button,styled,Typography} from '@mui/material' 
import { API } from '../../service/api';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider.jsx';

// import axios from 'axios';
const Component=styled(Box)`
    width:400px;
    margin:auto;
    box-shadow:5px 2px 5px 2px rgb(0 0 0/0.6);
    // margin-top:60px;
`;


const Error = styled(Typography)`
    font-size: 10px;
    // color: #ff6161;
    color: red;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`



const Image=styled('img')({
         width:100,               // box upar define h par img use pata hi nahi hoga ki ye kya h isi liye ye method use karna padega
         margin:'auto',
         display:'flex',

});

const Wrapper=styled(Box)`
   padding: 25px 25px;
   display:flex;
   flex-direction:column;
   & > div,& > button {
    margin-top:20px;
   }
`;
     
const signupinitialvalues={
  name:"",
  username:"",
  password:""
};

const logininitialvalues={
  username:"",
  password:""
 
};

function Login({isuserAuthenticated}) {
    
  const imgUrl ='https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png' ;

       const [account,toggleAccount]=useState('login');
       const [signup,setSignup]=useState(signupinitialvalues);
       const [error,setError]=useState('');
       const [log,setLog]=useState(logininitialvalues);

       const {setAccount }=useContext(DataContext);

       const navigate=useNavigate();

      const onInputchange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});
        // console.log(signup);
      }

      const onValuechange=(e)=>{
            //  console.log(e.target.username);
            // const {name,value}=e.target;
            // console.log(name ,value);
            setLog({...log,[e.target.name]:e.target.value});
      }

       const toggle=()=>{
            account==='signup'?toggleAccount('login'):toggleAccount('signup');
          
       }



      const signupUser=async()=>{
        // e.preventDefault();
        // console.log(signup);
             
             try {
              // const {name,username,password}=signup;
              //   const {data}=await axios.post("http://localhost:8000/signup",signup);
              //   // console.log(signup.password);
              //   if(data.success)
              //   {
              //     alert("user register successfully !!");
              //     //  navigate("/register");
              //   }

              let response= await  API.userSignup(signup);
            // if(response.isSuccess){
                setSignup(signupinitialvalues);
                toggleAccount('login');
                  setError('');
            // }
            // else
            // {
            //         setError('Something went wrong bhaiya!!');
            // }
             } catch (error) {
                   console.log(`something went wrong to the server     ${error}`);
                   setError('Something went wrong bhaiya!!');
             }
      }

      const loginUser=async()=>{
               try {
                 let response=await API.userLogin(log);
                 setLog(logininitialvalues);
                 setError('');

                 sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
                 sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);

                 setAccount({ name: response.data.name, username: response.data.username });
                 isuserAuthenticated(true);
                 navigate('/');


               } catch (error) {
                    console.log(`something went wrong when login &{error}`);
                    setError('Something went wrong bhaiya!!'); 
               }
      }

  return (
    
    <Component>
      <Box> 
      {/* console.log(signup); */}
           <Image src={imgUrl} alt='Login/'/>
           { account==='login' ?
           <Wrapper>
           <TextField variant='standard' onChange={(e)=> onValuechange(e)} name='username'  label="Enter Username"/>
           <TextField variant='standard' onChange={(e)=> onValuechange(e)} name='password' label="Password"/>
           <Button variant="contained" onClick={()=>loginUser()} >Login</Button>
           <Button onClick={()=>toggle()}>Create an acount</Button>
           </Wrapper> 
           : 
           <Wrapper>
           <TextField variant='standard' onChange={(e)=> onInputchange(e)} name='name' label="Name"/>
           <TextField variant='standard' onChange={(e)=> onInputchange(e)} name='username' label="Username"/>
           <TextField variant='standard' onChange={(e)=> onInputchange(e)} name='password' label="Password"/>
           {error&& <Error>{error}</Error>}
           <Button variant="contained" onClick={()=>signupUser()}  >Sign Up</Button>
           <Button onClick={()=>toggle()}>Already have an account</Button>
           </Wrapper>
}
           </Box>
    </Component>
  )
}

export default Login;
// onClick={()=>signupUser()}

// let response= await  API.userSignup(signup);
            // if(response.isSuccess){
            //     setSignup(signupinitialvalues);
            //     toggleAccount('login');
            //     setError('');
            // }
            // else
            // {
            //       setError('Something went wrong bhaiya!!');
            // }