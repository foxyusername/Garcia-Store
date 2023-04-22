import "./assets/calculate.css";

export function Count(props){
   return <div className="score_div">
    <h1>X: {props.scoreX}</h1>
     <h1 className="h1">O: {props.scoreO}</h1>
   </div>
}