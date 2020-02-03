import React from 'react';
import {getAuthorsQuery} from '../queries/queries';
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

  
  function AddBook(props) {
    return (
  

        <form id="add-book">

        <div className="field">
            <label>Book name:</label>
            <input type="text" />
        </div>
        
        <div className="field">
            <label>Genre:</label>
            <input type="text" />
        </div>
        
        <div className="field">
            <label>Author:</label>
            <select>
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
  