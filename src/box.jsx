import './assets/box.css';

function Box(props){
   return <div className='board'>
<button className='box' onClick={props.onClick}>{props.value}</button>
   </div>
}


export default Box;