// import { Button } from 'bootstrap';
import React from 'react'
import{Card, CardBody, CardTitle} from "reactstrap";

const ViewUser = (props) => {
  /*
  const userComplete =() => {
    props.onCompleteUser(props.username, props.age);
  };
  */
  return (
    <div>

        <Card>
        
         <CardBody>
          <CardTitle>{props.user.Username} ({props.user.Age} year old)
         </CardTitle>
         {/* <Button onClick={userComplete}>complete user</Button> */}


        </CardBody>
      </Card>
      

    </div>
  );
}

export default ViewUser;
