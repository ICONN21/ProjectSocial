import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// ✅ HTTP Link for GraphQL API
const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql", // Change for production
});

// ✅ Middleware for Authentication (Attach JWT Token)
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// ✅ Apollo Client Setup
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// ✅ App Layout (Includes Navbar & Footer)
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Navbar />
        <div className="container">
          <Outlet /> {/* This is where each page component will render */}
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
