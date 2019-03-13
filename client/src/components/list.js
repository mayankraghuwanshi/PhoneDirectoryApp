import React, {Component} from 'react';

class List extends Component {
    delete(number){
       const {list} = this.props
       let updatedList =  list.filter(user=>user.number!==number)
       this.props.save(updatedList)
    }

    render() {
        const {list} = this.props
        let i=1
        return (
            <div>
                <div className="list-container" >
                    <button className="hbutton" onClick={this.props.add}>Back</button>
                    <p align="center">Phone Directory</p>
                    <table className="list" align="center" border = "1px solid">
                        <tr>
                            <td>S.N.</td>
                            <td>Name</td>
                            <td>Number</td>
                            <td>Action</td>
                        </tr>
                        {list.length!==0 ? list.map(user=>
                                <tr>
                                    <td className="sn">{i++}</td>
                                    <td className="uname">{user.name}</td>
                                    <td className="num">{user.number}</td>
                                    <td className="abutton"><button onClick={this.delete.bind(this , user.number)} >delete</button></td>
                                </tr>
                            ) :
                        <tr>
                            <td className='sn'>NaN</td>
                            <td className="uname">Empty</td>
                            <td className="num">Empty</td>
                            <td>Null</td>
                        </tr>
                        }
                    </table>
                </div>
            </div>
        );
    }
}

export default List;