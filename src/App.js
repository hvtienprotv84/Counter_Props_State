import "./App.css";
import React from "react";
import { GrPowerReset } from "react-icons/gr";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    addOne() {
        let counters = this.state.counter;
        this.setState({ counter: (counters += 1) });
    }

    subtractOne() {
        let counters = this.state.counter;
        this.setState({ counter: (counters -= 1) });
    }

    reset() {
        this.setState({ counter: 0 });
      }

    render() {
        return (
            <div className="App">
                <main>
                    <h1 id="title_project">Bộ Đếm<br/>Props - State</h1>
                    <div id="button-wrapper">
                        <button
                            className="buttons"
                            onClick={() => this.addOne()}
                        >
                            +
                        </button>
                        <button
                            className="buttons"
                            onClick={() => this.subtractOne()}
                        >
                            -
                        </button>
                    </div>
                    <h1>{this.state.counter}</h1>
                </main>
                <div>
                <button
                        className="buttons"
                        id="button_reset"
                        onClick={() => this.reset()}
                        >
                        <GrPowerReset id="icon_reset" />
                        </button>
                </div>
            </div>
        );
    }
}

export default App;
