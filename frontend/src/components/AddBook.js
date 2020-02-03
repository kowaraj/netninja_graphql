import React from 'react';
import {getAuthorsQuery, addBookMutation, getBooksQuery} from '../queries/queries';
import {graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';



function DisplayAuthors(props) 
{
        const data = props.getAuthorsQuery_NAMEDHERE
        if (data.loading) 
        {
          return <option> Loading authors... </option>
        }
        else
        {
          return data.authors.map(a => {    return( <option key={a.id} value={a.id}> { a.name } </option> )     })
        }
}

function submitTheForm(s, e, props) {
    e.preventDefault();
    console.log(s);
    props.addBookMutation_MYNAME({
        variables: {name: s.name, genre: s.genre, authorId: s.authorId},
        refetchQueries: [{query: getBooksQuery}]
    });
}
  
  function AddBook(props) {
    const [state, setState] = React.useState({name:'', genre:'', authorId:''});

    //console.log(state);
    return (
  

        <form id="add-book" onSubmit={ e=> submitTheForm(state, e, props)}>

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
  export default compose(
            graphql(getAuthorsQuery, { name: "getAuthorsQuery_NAMEDHERE"}), 
            graphql(addBookMutation, { name: "addBookMutation_MYNAME"})
        )(AddBook);
  