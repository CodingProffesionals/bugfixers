import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import About from "./routes/about";
import { UserContext } from "./context/UserContext";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

interface Usertype {
  name: string
}
const User: Usertype = {
  name: 'test'
}

//apollo client setup
const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
});

function App() {

  //***** Direct calling the query *******/
  
  // client
  //   .query({
  //     query: gql`
  //     query ExampleQuery {
  //     company {
  //       ceo
  //     }
  //   }
  //   `,
  //   })
  //   .then((result) => console.log(result));

  return (
    <UserContext.Provider value={User}>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </UserContext.Provider>
  )
}

export default App
