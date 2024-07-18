import './Card.css'
import React from 'react'

function Card(props) {

  let click=()=>{
    alert("SomeOne CLicked me!!")
  }

  let copy=()=>{
    alert("Yuppp Don't Copy 😠😠😠😠")
  }

  let hobbie=props.hobbies.map((h)=><li>{h}</li>)

  console.log(props)
  return (
    <div className='card' onCopy={copy}>
    <h1>Name: {props.name}</h1>
    <h3>Age: {props.age}</h3>
    <p>My fav color is {props.color}</p>
    <ul>
        {hobbie}
    </ul>
    </div>  
)
}








// class Card extends Component {
//   constructor(props){
//     super(props);
//   }
//   render() {
//     return (
//         <div className='card'>
//         <h1>Name: {this.props.name}</h1>
//         <h3>Age: {this.props.age}</h3>
//         <p>My fav color is {this.props.color}</p>
//     </div>
//     )
//   }
// }

export default Card;


