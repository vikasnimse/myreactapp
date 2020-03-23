import React, {Component} from "react";
import Table from "./Table"
import Form from "./Form"
class App extends Component{
    state = {
        characters : [
            {
              name: 'Charlie',
              job: 'Janitor',
            },
            {
              name: 'Mac',
              job: 'Bouncer',
            },
            {
              name: 'Dee',
              job: 'Aspring actress',
            },
            {
              name: 'Dennis',
              job: 'Bartender',
            },
          ]
    }
    removeChar = index => {
        const {characters} = this.state;
        this.setState({
            characters: characters.filter((row, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit =  character => {
        this.setState({
            characters: [...this.state.characters , character]
        })
    }
    render(){
        const {characters} = this.state;
        return (
            <div className="conatiner">
                <Table characterData={characters} removeChar={this.removeChar} />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App;