// import React, { Component } from "react";
// import "./App.css";
// import Card from "./Componants/card";

// const getMood = () => {
//   const moods = ["Angry", "Happy", "Paranoid", "sad", "hungry"];
//   return moods[Math.floor(Math.random() * moods.length)];
// };

// const getNum = () => {
//   return Math.floor(Math.random() * 10) + 1;
// };

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       cards: [
//         {
//           name: "Alok",
//           age: 23,
//           color: "Green",
//           hobbies: ["Dancing", "Coding", "Gaming", "Eating"],
//         },
//         {
//           name: "Rahul",
//           age: 24,
//           color: "White",
//           hobbies: ["Playing", "Watching Web", "Development"],
//         },
//         {
//           name: "Pawan",
//           age: 34,
//           color: "Purpal",
//           hobbies: ["Playing", "Watching Web", "Development"],
//         },
//         {
//           name: "Vinod",
//           age: 24,
//           color: "White",
//           hobbies: ["Playing", "Watching Web", "Development"],
//         },
//         {
//           name: "Dinesh",
//           age: 24,
//           color: "White",
//           hobbies: ["Playing", "Watching Web", "Development"],
//         },
//       ],
//     };
//   }

//   render() {
//     let cardList = this.state.cards.map((card) => {
//       return (
//         <Card
//           name={card.name}
//           age={card.age}
//           color={card.color}
//           hobbies={card.hobbies}
//         />
//       );
//     });
//     return <div className="App">{cardList}</div>;
//   }
// }
// export default App;

import React from "react";
import ColorMatrix from "./Componants/ColorMatrix";

const App = () => {
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h1>Color Matrix</h1>
      <ColorMatrix />
    </div>
  );
};

export default App;
