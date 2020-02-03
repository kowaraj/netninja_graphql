# ...


- 24
  - BookList component

- 25 
  - (from the app) gql query -> "apollo-client" (graphql client) -> SERVER 
  - "react-apollo" is a bind for React
  - "graphql" is a JS implementation of the GraphQL

- 26 
  - "gql" is a parser for Apollo queries
  - "graphql" (from 'react-apollo') is to bind (result will be stored in props.data) a query to a component
  - "cors" (on the backend) is to allow graphql request from :3000 to be accepted by the server on :4000 

- 31
  - "compose" (from 'react-apollo') is to bind multiple queries/mutations to a single component

    As 'compose' was removed from react-apollo, do:
    ```
      npm install lodash.flowright
      import * as compose from 'lodash.flowright';
    ```

- 32 
  - mutation's "variables" is to pass values into a mutation

- 33
  - mutation's "refetchQueries" is to re-fetch the data
