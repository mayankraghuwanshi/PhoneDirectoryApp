import React, { Component } from 'react';
import '../assets/App.css';
import Save from "../components/save";
import List from "../components/list";

class App extends Component {
    constructor(){
        super()
        this.state = {
            list : [],
            showContact : false
        }
        this.save = this.save.bind(this)
        this.changeShow = this.changeShow.bind(this)
    }
  save(updatedList){
      this.setState({list : updatedList , showContact : true})
  }
  changeShow(){
      const showContact = !this.state.showContact
      this.setState({showContact})
  }

  render() {
     const {list , showContact} = this.state
    return (
      <div className="App">
          {showContact ?
          <List
              list = {list}
              save = {this.save}
              add = {this.changeShow}
          />:
          <Save
              list = {list}
              save = {this.save}
              showContacts ={this.changeShow}
          />
          }
      </div>
    );
  }
}

export default App;
