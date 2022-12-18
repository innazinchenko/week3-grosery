import { Component } from "react";
import check from './check.png';

export class GroseryList extends Component {
    state = {
        userInput: "",
        groceryList: []
    }

    onChangeEvent(e) {
        this.setState({userInput:e});
    }

addItem(input) {
    if (input==='') {
        alert("Please enter an item")
    } else{
    let listArray = this.state.groceryList
    listArray.push(input);
    this.setState ({groceryList: listArray, userInput: ""})
    console.log(listArray)
}
}

deleteItem() {
    let listArray=this.state.groceryList;
    listArray=[];
    this.setState({groceryList: listArray})
}

crossedWord(event) {
    const Li = event.target;
    Li.classList.toggle("crossed");
}

onFormSubmit(e) {
    e.preventDefault();
}

    render () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
             <input type="text"
             placeholder="What to you want to buy?"
             onChange={(e)=>{this.onChangeEvent(e.target.value)}}
             value={this.state.userInput}/>   
            </div>

            <div className="container">
                <button onClick={()=>this.addItem(this.state.userInput)} className="add btn" >Add</button>
            </div>

<ul>
    {this.state.groceryList.map((item, index) => (
        <li onClick={this.crossedWord} key={index}>
            <img src={check} width="40px" alt="bag"/>
            {item}</li>
    ))}
</ul>

<div className="container">
<button onClick={()=>this.deleteItem()} className="delete btn">Delete</button>
</div>
</form>
            </div>
        )
    }
}