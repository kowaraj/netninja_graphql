import React from 'react';
import {getAuthorsQuery, addBookMutation} from '../queries/queries';
import {graphql } from 'react-apollo';


function DisplayAuthors(props) 
{
        if (props.data.loading) 
        {
          return <option> Loading authors... </option>
        }
        else
        {
          return props.data.authors.map(a => {    return( <option key={a.id} value={a.id}> { a.name } </option> )     })
        }
}

function submitTheForm(s, e) {
    e.preventDefault();
    console.log(s);
}
  
  function AddBook(props) {
    const [state, setState] = React.useState({name:'', genre:'', authorId:''});

    //console.log(state);
    return (
  

        <form id="add-book" onSubmit={ e=> submitTheForm(state, e)}>

        <div className="field">
            <label>Book name:</label>
            <input type="text" onChange={ (e) => setState({...state, name: e.target.value}) } />
        </div>
        
        <div className="field">
            <label>Genre:</label>
            <input type="text"  onChange={ (e) => setState({...state, genre: e.target.value}) } />
        </div>
        
        <div className="field">
            <label>Author:</label>
            <select  onChange={ (e) => setState({...state, authorId: e.target.value}) } >
                {DisplayAuthors(props)}
            </select>
        </div>

        <button>+</button>
        
        </form>
    );
  }
  
  // to bind a query to a component...
  // instead of:
  // export default BookList;
  // do:
  export default graphql(getAuthorsQuery)(AddBook);
  