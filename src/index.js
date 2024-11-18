import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {FirebaseContext} from "./store/FirebaseContext";
import Context from './store/FirebaseContext'
import { firebaseApp, auth,db } from './firebase/config';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    
<FirebaseContext.Provider value={{ firebase: firebaseApp, auth ,db}}>
    <Context>
    <App />
    </Context>
</FirebaseContext.Provider>);

