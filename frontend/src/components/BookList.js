import React from 'react';

// bind a query to the component to access the data
import {graphql } from 'react-apollo';

// constructing a template for a query:
import {gql} from 'apollo-boost';
const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`




function BookList(props) {
  return (

    <div className="BookList">
        {console.log(props)}
      <ul id="book-list"> 
          <li>Boook namee</li>
      </ul>
    </div>
  );
}

// to bind a query to a component...
// instead of:
// export default BookList;
// do:
export default graphql(getBooksQuery)(BookList);
