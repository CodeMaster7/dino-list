import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Dino from "./components/dino/Dino";
import Input from "./components/input/Input";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dinos: [],
      weight: null,
      name: "",
      diet: ""
    };
    this.updateState = this.updateState.bind(this);
    this.createDino = this.createDino.bind(this);
  }

  updateState(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  createDino() {
    const { name, weight, diet } = this.state;
    if (!name || !weight || !diet) return;
    axios.post("/api/dino", { name, weight, diet }).then(res => {
      this.setState({
        dinos: res.data,
        weight: 0,
        name: "",
        diet: ""
      });
    });
  }
  // <input id='weight' onChange={this.updateState}

  componentDidMount() {
    axios.get("/api/dino").then(res => {
      this.setState({
        dinos: res.data
      });
    });
  }
  render() {
    console.log("app state: ", this.state);
    const dinoList = this.state.dinos.map((dino, i) => {
      return <Dino key={dino.id} name={dino.name} weight={dino.weight} diet={dino.diet} />;
    });
    return (
      <div className="App">
        <section className="main-container">
          <Input updateState={this.updateState} createDino={this.createDino} />
          <hr />
          {dinoList}
        </section>
      </div>
    );
  }
}

export default App;
