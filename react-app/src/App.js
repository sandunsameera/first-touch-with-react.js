import React from 'react';
import logo from "./logo.svg";
import './App.css';

class App extends React.Component{

  	constructor(props){
      super(props);
      this.state ={
        newItem :"",
        list:[]
      }
    }

    addItem(todoValue){
      if(todoValue !== ""){
        const newItem = {
          id:Date.now(),
          value:todoValue,
          isDone:false,
        };
        const list = [...this.state.list];
        list.push(newItem);

        this.setState({
          list,
          newItem:"",
        });
      }
    }

    deleteItem(id){
      const list = [...this.state.list];
      const updatelist = list.filter(item=>item.id !==id);
      this.setState({
        list:updatelist
      })
    }

    updateInput(input){
      this.setState({newItem:input})
    }
  render(){
    return(
      <div>
        <img className ='logo'src={logo} width="300" heigh='300' alt="fuck"/>
        <h1 className = 'app-title'>To Do app using React.js</h1>
        <div className = 'container'>Add an item..</div>
        <br/>
        <input type="text"
        className="input-text"
        placeholder="Write to do"
        value={this.setState.newItem}
        onChange={e=>this.updateInput(e.target.value)}
        />

        <button className="add-btn"
        onClick={()=>this.addItem(this.state.newItem)}
        disabled={!this.state.newItem.length}
        
        >Add todo</button>
        <div className="click">
          <ul>
            {this.state.list.map(item=>{
              return(
                <li key={item.id}>
                  <input 
                  type="checkbox"
                  name="ïdDone"
                  checked={item.isDone}
                  onChange={()=>{}}/>
                  {item.value}
                <button className = "btn" onClick={()=>this.deleteItem(item.id)}>Delete</button>
                </li>
              );
            })}
            <li><input type="checkbox" name="" id=""/>
            Work hard on web devoloping
            <button className="btn">Delete</button>
            </li>
          </ul>
        </div>
      </div>
    );
  };
}

export default App;