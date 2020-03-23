import React, {Component} from "react";

class Table extends Component{
    render(){
        const {characterData} = this.props;
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        characterData.map((row, index) => {
                            return (
                              <tr key={index}>
                                <td>{row.name}</td>
                                <td>{row.job}</td>
                                <th><button onClick={()=> this.props.removeChar(index)}>Delete</button></th>
                              </tr>
                            )
                          })
                    }
                </tbody>
            </table>
        )
    }
}

export default Table;