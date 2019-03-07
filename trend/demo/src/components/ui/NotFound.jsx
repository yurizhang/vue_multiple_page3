import React from "react";
import ViewCode from './viewCode';
import "./App.css"

class App extends React.Component {
    render(){
        return (
            <div className="lost-404">
                <h1 className="lost-404-title">404</h1>
                <p className="lost-404-content">YOUR PAGE SEEMS LOST :(</p>
                <br/> <br/> <br/> <br/> <br/> <br/>
                <ViewCode name="NotFound" code="0" />
            </div>
        )
    }
}

export default App