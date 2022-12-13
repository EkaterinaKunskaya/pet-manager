import React, { createContext } from 'react';
import { HashRouter } from 'react-router-dom';
import { PagesRouter } from './routes/PagesRouter';
import { observer } from 'mobx-react-lite';

import { MyFirebase } from './firebase/MyFirebase';
import store from './model/Store';

import './styles/Normalize.css';
import './styles/App.css';

export const Context = createContext(null);


const App = () => {
    const loadingStore = store.firebaseService.isLoading;

    if (loadingStore) {
        console.log('loading');
    }

    return (
        <Context.Provider value={{ ...MyFirebase, store }}>
            <HashRouter>
                <header className="header wrapper">
                    <div className="header-container">
                        <div className="header-label">PetManager</div>
                        <h1 className="header-title">Ваш менеджер<br />домашних любимцев</h1>
                    </div>
                </header>
                <div className="wrapper">
                    <PagesRouter />
                </div>
                <footer className="footer wrapper">
                    Created by EkaterinaKunskaya. 2022 <br />
                    <a href="https://www.linkedin.com/in/ekaterina-kunskaya-bb3778252/" target='blank'>
                        LinkedIn
                    </a>
                </footer>
            </HashRouter>
        </Context.Provider>
    );
};

export default React.memo(observer(App));