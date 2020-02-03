import React from 'react';
import {getBookQuery} from '../queries/queries';
import {graphql } from 'react-apollo';

function displayDetails(props) {
    const {book} = props.data;
    if(book) {
        return (
            <div>
                <h2> {book.name}</h2>
                <p> {book.author.name}</p>
                <p> All books: </p>
                <ul>
                    { book.author.books.map( b=> { return <li key={b.id}>{b.name}</li>})}
                </ul>
            </div>
        )
    }
    else {
        return (
            <div> No book selected... </div>
        )
    }
}

function BookDetails(props) {
    console.log(props);
    return (
        <div id="book-details"> 
            <p> Output book details here... </p>
            {displayDetails(props)}
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
