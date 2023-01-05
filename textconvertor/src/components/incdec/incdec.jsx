import React from 'react'
import './incdec.css'

class IncDec extends React.Component{
constructor(){
super();
this.state={
    count:0
}
}
increaseCounter(){
    this.setState({
        count: this.state.count+1
    })
}

decreaseCounter(){
    this.setState({
        count: this.state.count-1
    })
}
changeInputValue(value){
    this.setState({
        count:value
    })
}
render(){
return (
    <div>
<div class= 'inner'>
    
    <button class='inc' onClick={()=>this.increaseCounter()}>
      +
    </button>
    

    <input type="number" value={this.state.count} onChange={(event)=>this.changeInputValue(event.target.value)}/>
   
    
    <button class='dec' onClick={()=>this.decreaseCounter()}>
   -
    </button >
    
</div>
</div>
)}
}
export default IncDec






