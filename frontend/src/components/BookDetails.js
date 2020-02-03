import React from 'react';
import {getBookQuery} from '../queries/queries';
import {graphql } from 'react-apollo';


function BookDetails(props) {
    console.log(props);
    return (
        <div id="book-details"> 
            <p> Output book details here... </p>

        </div>
    );
}

export default graphql(
    getBookQuery, 
    { 
        options: (props) => {
            return { 
                variables: { id: props.bookId}
            }
        }
    }
    )(BookDetails);
