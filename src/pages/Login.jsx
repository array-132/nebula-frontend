import { useState } from "react";
import Base from "../components/Base";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { toast } from "react-toastify";
import { loginUser } from "../services/user-service";
import { doLogin } from "../auth/auth";


function Login() {
  
  const [loginDetail,setLoginDetail] = useState({
     email:'',
     password:''
  })

  // const [error,setError] = useState({
  //   errors:{},
  //   isError:false    
  // })

  const handleChange = (event,field)=>{
    
    let actualValue =  event.target.value
    setLoginDetail({
      ...loginDetail,
      [field] : actualValue
    })
  }

  const handleReset = () =>{
    setLoginDetail({
      email: "",
      password: ""
    })
  }

  // const resetError=()=>{
  //   setError({
  //     error:{},
  //     isError:false
  //   })
  // }
  const submitForm = (event) =>{
    event.preventDefault()
    
    // data validation
    
    if(loginDetail.email.trim() == "" ){
      toast.error("Email is required !!")
      return; 
    }
    else if(loginDetail.password.trim() == ""){
      toast.error("Password is required !!")
      return;
    }
    
    // if(error.isError){
    //   toast.error("Form data is invalid")
    //   setError({...error,isError:!error.isError})
    //   return;
    // }

    
    
    console.log(loginDetail)

    // submit the data to server to generate token
    loginUser(loginDetail).then((data)=>{
        console.log(data)

        //save the data to local storage
        doLogin(data,()=>{
          console.log("login detail is saved to local Storage");
          // redirect to user dashboard page
        })
        handleReset()
        toast.success('User logged in successfully')
    }).catch((error)=>{
        console.log(error)
        if(error.response.status==400 || error.response.status==404){
          toast.error(error.response.data.message)
        }else{
          toast.error("Something went wrong on server !!!")
        }
        
    })

    // call server api for sending data
    // signUp(loginDetail).then((resp)=>{
    //     console.log(resp);
    //     console.log("success log");
    //     toast.success("User is registered successfully ");
    //     resetData()
    //     resetError()
    // }).catch(
    //   (error) =>{
    //     console.log(error);
    //     console.log("Error log")
    //     setError({
    //       errors:error,
    //       isError:!error.isError
    //     })
    //   }
    // )
  }
  
  return (
    <>
    <Base>
          <Container style={{height:100}}>
               <Row className="mt-4 ">
                
                  <Col sm={{size:4,offset:4}} xs ={{size:10,offset:1}}>
                    <Card color="dark" inverse>
                            {/* <CardHeader color="light">                                     
                                   <h3> Login Here </h3>
                            </CardHeader> */}

                            <CardBody>

                              {/* creating form  */}
                                   <Form onSubmit={submitForm}>
                                          
                                          {/* Email field  */}
                                          <FormGroup>
                                                     <Label for="email" > Email </Label>
                                                     <Input 
                                                     type="email" 
                                                     placeholder="Enter here" 
                                                     id="email"
                                                     value={loginDetail.email}
                                                     onChange={(e)=>handleChange(e,'email')}/>
                                          </FormGroup>
                                          {/* Password field  */}
                                          <FormGroup>
                                                     <Label for="password" > Password </Label>
                                                     <Input 
                                                     type="password" 
                                                     placeholder="Enter here" 
                                                     id="password"
                                                     value={loginDetail.password}
                                                     onChange={(e)=>handleChange(e,'password')}/>
                                          </FormGroup>

                                          <Container className="text-center">
                                            <Button color="light" outline className="me-4">Login</Button>
                                            <Button color="light" onClick={handleReset} outline type="reset" className="ms-4">Reset</Button>
                                          </Container>

                                   </Form>
                            </CardBody>                        
                    </Card>
                  
                  </Col>
                
                </Row>      
          </Container>
    </Base>

  </>

  );
}

export default Login;
