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

  render() {
    const { cyan, magenta, newColor, dispatch } = this.props;
    const { handleChange } = this;

    return (
      <div className="container">
        <h1>Selecione a cor</h1>
        <h3>Cor Selecionada</h3>
        <div
          className="color-square"
          style={{ backgroundColor: `${newColor}` }}
        />
        <p>{newColor}</p>
        <input type="color" onChange={(e) => handleChange(e)} />
        <div className="buttons">
          <button onClick={() => dispatch(colorPicker(cyan))}> Ciano </button>
          <button onClick={() => dispatch(colorPicker(magenta))}>Magenta</button>
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
