// import Navbar from "./Components/navbar";
import "./App.css";

import React from "react";
import { Body } from "./Components/body";

export default function App(props) {
  return props.show ? (
    <div>Loading....</div>
  ) : (
    <div className="App">
      {/* <Navbar /> */}
      <Body/>
    </div>
  );
}

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { show: this.props.show };
//     debugger;
//   }

//   // componentWillMount() {
//   //   debugger;
//   // }
//   componentDidMount() {
//     debugger;
//     //after your component is mounted.
//     setTimeout(() => {
//       this.setState = {
//         ...this.state,
//         show: false,
//       };
//     }, 2000);
//   }

//   componentDidUpdate() {
//     debugger;
//   }

//   render() {
//     debugger;
//     return !this.state.show ? (
//       <div>Loading...</div>
//     ) : (
//       <div>
//         <Navbar />
//         <Body />
//       </div>
//     );
//   }
// }
