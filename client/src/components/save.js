import React, {Component} from 'react';

class Save extends Component {
    constructor(){
        super()
        this.state = {
            name : "",
            number : "",
            error : null,
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange (e){
        this.setState({[e.target.name] : e.target.value , error : null})
    }

    onSubmit(e){
        e.preventDefault()
        //destructure list because we are going to use it more then once
        const {list} = this.props
        const {name , number} = this.state
        const user = {
            name,
            number
        }
        if(name==="" || number===""){
            this.setState({error : "all fields are required!"})
        }
        else if(list.length===0){
            list.push(user)
            this.props.save(list)
            this.setState({name : "" , number : ""})
        }
        else{
            let shouldSave = true
            list.find(user=>{
                if(user.number.toString()===number){
                    this.setState({error : "Number is alredy saved!"})
                    shouldSave = false
                    return
                }
            })
            if(shouldSave){
                list.push(user)
                this.props.save(list)
                this.setState({name : "" , number : ""})
            }
        }


    }

    render() {
        const {name , number , error} = this.state
        return (<div className='form-container'>
                <button className="hbutton" onClick={this.props.showContacts}>Show contacts</button>
                <form className='form-body' type = "post" onSubmit={this.onSubmit.bind(this)}>
                <label>Add Subscriber</label>
                <input
                placeholder="Name"
                value = {name}
                name = "name"
                onChange={this.onChange}
                />
                <br/>
                <input
                placeholder="Number"
                value = {number}
                name = "number"
                type="number"
                onChange={this.onChange}
                /><br/>
                <input type="submit" value="Save"/><br/>
                {error && <small style={{color : "red"}}>{error}</small>}
                </form>
                <p><b>Subscriber to be added</b></p>
         <p>name : {name} <br/>number : {number}</p>
        </div>
        );
    }
}

export default Save;