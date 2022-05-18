import React, { useState } from 'react'
import { Form,FormGroup,Label,Input,Button } from 'reactstrap'
import ViewUser from './ViewUser'
import NewModal from '../NewModal';

const AddUser = () => {

  const[username,setUsername] = useState("");
  const[age, setAge] = useState(0);
  const[users, setUsers] = useState([])
  const[error, setError,] = useState(null)
  const[isError,setIsError, ]= useState(false)


  const setIsErrortofalse =() =>{
    setIsError(false)
  }
/*
  const userCompleteHandler = (username, age) => {
    console.log(username, age)
    const userWithCompletedInformation = users.filter(user => {

      return username !== user.username
    })
    console.log(userWithCompletedInformation)
    setUsers(userWithCompletedInformation);

  };
*/

  const UsernameChangeHandler =(event) =>{
    // console.log("username changed")
   setUsername(event.target.value)
  }
  const AgeChangeHandler = (event) =>{
    // console.log("Age changed")
    setAge(event.target.value)

  }
  const submitHandler = (event) =>{
    event.preventDefault()
    if(username.length>2 && age>0 && age<126){ 
      const user = {
         Username: username,
         Age: age
    }
    setUsers([...users, user]);
    // console.log("Users", users)
     }else{
       if(username.length<=0 && age==0){
         setIsError(true)
         setError("please enter the username and age value")
         console.log("please enter the username and age value")
         
       }
         else if(username.length<3){
          setIsError(true)
           setError("username cannot be less than 3 charactor")
         console.log("username cannot be less than 3 charactor")
       }
       else if(age<0 || age>125){
        setIsError(true)
         setError("age cannot be less than 1 and greater than 125")
         console.log("age cannot be less than 1 and greater than 125");
       }
     }
     
  }
  return (
    <div>
      <h1 className='text-center'>Add User</h1>
      <Form onSubmit={submitHandler}>
      <FormGroup>
          <Label for="Username">Username</Label>
          <Input type="text" 
          name="Username" 
          id="Username"
           placeholder="Username"
           onChange={UsernameChangeHandler}
            />
        </FormGroup>
        <FormGroup>
          <Label for="Age">Age</Label>
          <Input type="number" 
          name="Age" 
          id="Age" 
          placeholder="Age"
          onChange={AgeChangeHandler}
           />
        </FormGroup>
        <Button type="submit" color="primary">Add User</Button>
      </Form>
      {/* {isError ? <NewModal heading={"Error"} toggle = {setIsErrortofalse}><div>{error}</div></NewModal> : ""} */}

      {isError ? <NewModal error={error} closeError ={setIsErrortofalse}  />:""}
      <h1 className="text-center pt-5">Added Users</h1>
      {users.map(user =>{
        return <ViewUser user={user}/>
      })}

    </div>
  )
}

export default AddUser;
