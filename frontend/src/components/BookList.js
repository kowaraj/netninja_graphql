import React from 'react';
import {getBooksQuery} from '../queries/queries';
import {graphql } from 'react-apollo';


function f(props){
  if (props.data.loading) 
  {
    return <div> Loading books... </div>
  }
  else
  {
    return props.data.books.map(b => {    return( <li key={b.id}> { b.name } </li> )     })
  }

}

function BookList(props) {
  return (

    <div className="BookList">
      <ul id="book-list"> 
          {f(props)}
      </ul>
    </div>
  );
}

// to bind a query to a component...
// instead of:
// export default BookList;
// do:
export default graphql(getBooksQuery)(BookList);
