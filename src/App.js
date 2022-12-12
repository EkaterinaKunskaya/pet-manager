import React, { createContext } from 'react';
import { HashRouter } from 'react-router-dom';


import { PagesRouter } from './routes/PagesRouter';
import './styles/Normalize.css';
import './styles/App.css';
import Loader from './components/Loader';

import { observer } from 'mobx-react-lite';
import { MyFirebase } from './firebase/MyFirebase'
import store from './model/Store'

export const Context = createContext(null);

const App = () => {
    
    const loadingStore = store.firebaseService.isLoading;

    if (loadingStore) {
        return <Loader />
    }
    
    return(
        <Context.Provider value={{ ...MyFirebase, store }}>
            <HashRouter>
                <header className="header wrapper">
                    <div className="parallax_container">
                        <div className="parallax_label">PetManager</div>
                        <h1 className="parallax_title">Ваш менеджер</h1>
                        <h2 className="parallax_title">домашних любимцев</h2>
                    </div>
                </header>
                <div className="wrapper">
                    <PagesRouter />
                </div>
                <footer className="footer wrapper">
                    Created by EkaterinaKunskaya. 2022 <br/>
                    <a href="https://www.linkedin.com/in/ekaterina-kunskaya-bb3778252/" target='blank'>
                        LinkedIn 
                    </a>
                </footer>
            </HashRouter>
        </Context.Provider>

    );

};

export default observer(App);