import React, { Component } from 'react';
import { connect } from 'react-redux';

//import AddDevice from '../components/AddNewDevice/AddNewDevice';

class Persons extends Component {
 /*    state = {
        persons: []
    }

    
    

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    } */
    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.props.onAddPerson(newPerson);
    }


    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.newPersons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        newPersons : state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
       onAddPerson: (person) => dispatch({type: 'ADD_PERSON',newPerson:person}),
        onDeletePerson:(id)=>dispatch({type:'DELETE_PERSON',personId:id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);