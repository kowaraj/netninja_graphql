import React from 'react';
import {getBooksQuery} from '../queries/queries';
import {graphql } from 'react-apollo';
import BookDetails from './BookDetails';

function displayBooks(props, s, setState){
  if (props.data.loading) 
  {
    return <div> Loading books... </div>
  }
  else
  {
    return props.data.books.map(b => {    
      return( 
        <li 
          key={b.id} 
          onClick={ (e)=>setState({...s, selected: b.id}) }> 
            { b.name } 
        </li> 
      )
    })
  }

}

function BookList(props) {
  const [state, setState] = React.useState({selected:null});

  return (

    <div className="BookList">
      <ul id="book-list"> 
          {displayBooks(props, state, setState)}
      </ul>
      <BookDetails bookId={state.selected}></BookDetails>
    </div>
  );
}

// to bind a query to a component...
// instead of:
// export default BookList;
// do:
export default graphql(getBooksQuery)(BookList);
