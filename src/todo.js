import React, {Component} from 'react';

class Todo extends Component {
    constructor(props){
        super(props)
        this.state={
            name: " ",
            todo: []
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.add = this.add.bind(this);

    }

    onChangeHandler(event){  //event access click funtion
        var inputVal = event.target.value;
        this.setState({
            name:inputVal
        })
    }

    add(){
        var inputVal = this.state.name;
        var nameInstance = this.state.todo;
        nameInstance.push(inputVal);
        this.setState({
            toddo: nameInstance,
            name: " "
        })
        console.log(this.state.todo)
    }
   
    

    render(){
        var namelist = this.state.todo.map((e,i)=>   //element (e), Index (i) 
        <li key={i}>{e} </li>
        )  
        return (
            <div>
                <div className='header'> <h1>Reactjs Todo App</h1></div>

                <div>
                    <ul>
                        {namelist}
                    </ul>
                </div>
                
                <div>
                <input type='text' value={this.state.name} onChange = {this.onChangeHandler}  />
                <button onClick={this.add}>Add</button>
                </div>
            </div>

            // value call throgh state
        )
    }
}
export default Todo;