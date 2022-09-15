import {  Route, BrowserRouter ,Routes} from 'react-router-dom';
import routesConfig from '@routes/routesConfig';
import Header from '@components/Header';
import { REPO_NAME } from '@constants/repo';

import styles from './App.module.css';

const App = () =>{
    return  (
    <BrowserRouter basename={`/${REPO_NAME}/`} >
        <div className={styles.wrapper}>
            <Header/>
            <Routes>
                {
                    routesConfig.map((route, index)=>{
                    return <Route 
                    key={index}
                    exact={route.exact}
                    element={route.element}  
                    path={route.path}
                  />
                    })
                }
            </Routes>
        </div>
    </BrowserRouter>
    )

}

export default App;


