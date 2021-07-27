import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import Users from './App';
// import First from './components/usestate';
// import Second from './components/State';
//import usestate from './components/practice';
//import EmpTable from './components/EmpTable';
//import Welcome from './components/practice';
//import Example from './components/practice';
//import FormHandling from "./components/FormHandling";
//import Validation from './components/FormValidation';
//import ToDoList from "./components/ToDoList";
// import Calc from "./components/Calc";
import CurrentLocWeather from "./components/CurrentlocWeather";
// import Weather from "./components/WeatherApp";

class Own extends React.Component {
  // constructor(props){
  //   super(props);

  //   this.state= {
  //     conceptname:this.props.concept,
  //     count:0,
  //     color:'red',
  //     name:this.props.name
  //   };
  //   this.clickhere=this.clickhere.bind(this);
  // }

  // clickhere =() => {
  //  let count = this.state.count;
  //  this.setState({count: ++count});
  // }

  // clickme = () => {
  //   this.setState({
  //     color:'blue'
  //   })
  // }

  // changename = ()=> {
  //   this.setState({
  //     name:'shweta'
  //   })
  // }

  render() {
    return (
      <>
        <CurrentLocWeather />
        {/* <Weather /> */}
        {/* <Calc /> */}
        {/* <ToDoList /> */}
        {/* <Validation /> */}
        {/* <FormHandling /> */}

        {/* <h1> State Concept</h1>
               <h2> state is {this.state.conceptname}</h2>
               <h3> count is {this.state.count}</h3>
               <h4>my color is ..{this.state.color}</h4>
               <h2>my name is {this.state.name} </h2>
               <button onClick={this.clickhere}>click here</button>
               <button onClick={this.clickme}>change color</button>
               <button onClick={this.changename}>change name</button> */}

        {/* <Users />   */}
        {/* <App  />   */}
        {/* <Clocks title="Welcome to timer"/> */}
        {/* <Users /> */}
        {/* <First />
                 <Second /> */}
        {/* <Example /> */}
        {/* <EmpTable /> */}
      </>
    );
  }
}

ReactDOM.render(
  <Own />,

  document.getElementById("root")
);
