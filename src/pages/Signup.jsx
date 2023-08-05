import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";
import { useState } from "react";
import { signUp } from "../services/user-service";
import { toast } from "react-toastify";

function Signup() {
  const [userData,setUserData] = useState({

      name:'',
      email:'',
      password:'',
      about : ''
  })
  
  const [error,setError] = useState({
    errors:{},
    isError:false    
  })


  // useEffect(()=>{
  //     console.log(userData);
  // },[userData])

  // handle change
  const handleChange = (event,property) =>{
    
    // dynamically set the values 
    setUserData({...userData,[property]:event.target.value})

  }

  // const [flag,setFlag] = useState(false);


  // resetting the form
  const resetData = ()=>{
    setUserData({
      name:'',
      email:'',
      password:'',
      about : ''
    })
  }
  
  const resetError=()=>{
    setError({
      error:{},
      isError:false
    })
  }
  const submitForm = (event) =>{
    event.preventDefault()
    
    if(error.isError){
      toast.error("Form data is invalid")
      setError({...error,isError:!error.isError})
      return;
    }

    // data validation
    console.log(userData)

    // call server api for sending data
    signUp(userData).then((resp)=>{
        // setFlag(false);
        console.log(resp);
        console.log("success log");
        toast.success("User is registered successfully ");
        resetData()
        resetError()

    }).catch(
      (error) =>{
        console.log(error);
        console.log("Error log")
        setError({
          errors:error,
          isError:!error.isError
        })
      }
    )
  }

  

  // const displayError = (property)=>{
  //     if(flag) return;
  //     if(error.errors?.response?.data?.[property]){
  //       setFlag(true)
  //       return error.errors?.response?.data?.[property]
  //     }
  // }

  return (
    <>
      <Base>
            <Container style={{height:200}}>
                 <Row className="mt-4 ">
                  
                    <Col sm={{size:8,offset:2}} xs ={{size:10,offset:1}}>
                      <Card color="dark" inverse>
                              <CardHeader color="light">                                     
                                     <h3> Fill information to Register !! </h3>
                              </CardHeader>

                              <CardBody>

                                {/* creating form  */}
                                     <Form onSubmit={submitForm}>
                                            {/* Name field  */}
                                            <FormGroup>
                                                       <Label for="name" > Name </Label>
                                                       <Input 
                                                       type="text" 
                                                       placeholder="Enter here" 
                                                       id="name"
                                                       min="4"
                                                       onChange={(e)=>handleChange(e,'name')}
                                                       value={userData.name}
                                                       invalid={ error.errors?.response?.data?.name ? true:false}
                                                       
                                                       />

                                                       <FormFeedback>
                                                        {error.errors?.response?.data?.name}
                                                        {/* {displayError('name')} */}
                                                       </FormFeedback>

                                            </FormGroup>
                                            {/* Email field  */}
                                            <FormGroup>
                                                       <Label for="email" > Email </Label>
                                                       <Input 
                                                       type="email" 
                                                       placeholder="Enter here" 
                                                       id="email"
                                                       onChange={(e)=>handleChange(e,'email')}
                                                       value={userData.email}
                                                       pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                                                       invalid={error.errors?.response?.data?.email ? true:false}
                                                       />

                                                      <FormFeedback>
                                                        {error.errors?.response?.data?.email}
                                                        {/* {displayError('email')} */}
                                                      </FormFeedback>
                                            </FormGroup>
                                            {/* Password field  */}
                                            <FormGroup>
                                                       <Label for="password" > Password </Label>
                                                       <Input 
                                                       type="password" 
                                                       placeholder="Enter here" 
                                                       id="password"
                                                       min = "6"
                                                       max = "10"
                                                       onChange={(e)=>handleChange(e,'password')}
                                                       value={userData.password}
                                                       invalid={error.errors?.response?.data?.password ? true:false}
                                                       />

                                                      <FormFeedback>
                                                        {error.errors?.response?.data?.password}
                                                        {/* {displayError('password')}   */}
                                                      </FormFeedback>
                                            </FormGroup>
                                            {/* About field  */}
                                            <FormGroup>
                                                       <Label for="about" > About </Label>
                                                       <Input 
                                                       type="textarea" 
                                                       placeholder="Enter here" 
                                                       id="about" 
                                                       style={{height:"200px"}}
                                                       onChange={(e)=>handleChange(e,'about')}
                                                       value={userData.about}
                                                       invalid={error.errors?.response?.data?.about ? true:false}
                                                       
                                                       />
                                                       <FormFeedback>
                                                        {error.errors?.response?.data?.about}
                                                        {/* {displayError('about')} */}
                                                      </FormFeedback>
                                            </FormGroup>

                                            <Container className="text-center">
                                              <Button color="light" outline className="me-4">Register</Button>
                                              <Button color="light" outline type="reset" className="ms-4"
                                                onClick={resetData}
                                              >Reset</Button>
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

export default Signup;
