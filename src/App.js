import React, { Fragment } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Formulaire from '../src/Component/Formulaire';




const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <div>                 
                    <div>
                        <Routes>
                             
                            <Route path="/" element={<Formulaire/>}/>
                           
                        </Routes>
                    </div>
               
                </div>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
