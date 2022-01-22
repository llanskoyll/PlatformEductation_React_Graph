import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import SemesterStore from "./store/SemesterStore";


const client = new ApolloClient({
    link: createHttpLink({uri:}), // Здесь должен быть спец.токен, но его нет :)
    cache: new InMemoryCache()
})

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        semesters : new SemesterStore()
    }}>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Context.Provider>,
    document.getElementById('root')
)
;
