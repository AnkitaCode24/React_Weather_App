import React , {Component} from 'react';
//import ReactDOM from 'react-dom';
import User from './components/list';
import Practice from './components/practice';

//import logo from './logo.svg';

//import File1 from './components/File1';

 //const nums= [1,2,3,4,5];
// const updatednums= nums.map((number)=> {
//   return <li>{number*2}</li>
// })

class Users extends Component{
  //  constructor(props) {
  //    super(props);
  //    this.state= {
  //      users:["Ankita","shilpa","Shashi","Akansha"],
  //      emp:{
  //        firstname:"suyash",
  //        lastname:"soni"
  //      }
  //    };
  //  }

   render() {
  //   return
  //   (
  //     </p>
  //   )
     return (
    //   // <p>
    //   //    <h1>HELLO USERS</h1>
    //   //    <ul>
    //   //    {this.state.emp.firstname}
    //   //    {this.state.users.map((user,index)=> (
    //   //     <li>{user} </li>  
    //   //   ))}
    //   //    </ul>
    //   // {updatednums}
      
      <Practice />
     

    //   // </p>
     );
  }
}

// // function App() {
//   return(
//     User.map((e)=>{
//       return(
//         <Info name={e.name} id={e.id} />
//       )
     
//     })
//   )
    
   
//  }


export default Users;
