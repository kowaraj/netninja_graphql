import React from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const my_client = new ApolloClient({uri: "http://localhost:4000/graphql"})

function App() {
  return (
    <ApolloProvider client = {my_client}>
      <div className="App">
        <h1> This is App header </h1>
        <BookList />
        <AddBook />

      </div>
    </ApolloProvider>
  );
}

export default App;
