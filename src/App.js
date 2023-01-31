import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorPicker } from './redux/actions';
import './style.css';

class App extends Component {
  state = {
    color: '',
  };

  handleChange = ({ target }) => {
    const { color } = this.state;
    const { dispatch } = this.props;
    const { value } = target;
    this.setState({ color: value }, () => {
      dispatch(colorPicker(color));
    });
  };

  handleButton = (newColor) => {
    const { color } = this.state;
    const { dispatch } = this.props;
    this.setState({ color: newColor }, () => {
      dispatch(colorPicker(color));
    });
  };

  render() {
    const { dispatch, newColor, cyan, magenta } = this.props;
    const { handleChange, handleButton } = this;
    const { color } = this.state;
    return (
      <div className="container">
        <h1>Selecione a cor</h1>
        <h3>Cor Selecionada</h3>
        <div className="color-square" style={{ backgroundColor: `${color}` }} />
        <p>{newColor}</p>
        <input type="color" onChange={(e) => handleChange(e)} />
        <div className="buttons">
          <button
            onClick={() => this.setState({ color: cyan }, () => this.set)}
          >
            Ciano
          </button>
          <button onClick={() => handleButton(magenta)}>Magenta</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  newColor: state.colorReducer.newColor,
  cyan: state.colorReducer.cyan,
  magenta: state.colorReducer.magenta,
});

export default connect(mapStateToProps)(App);
