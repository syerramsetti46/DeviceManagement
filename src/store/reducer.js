const initialState ={
    persons:[]
};

const reducer = (state = initialState,action)=>{
    switch (action.type){
        case 'ADD_DEVICE':
            return {
                ...state,
                persons: state.persons.concat({id :action.newPerson.id,name:action.newPerson.name,age :action.newPerson.age})
            }

        case 'DELETE_DEVICE':
            return{
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            }
    }
    return state
};

export default reducer;
