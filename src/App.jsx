import React, { Component } from "react";
import "./App.css";
import logo from './logogit.jpg'


const Button = ({ value, onClick }) => (
  <button onClick={() => onClick(value)}>{value}</button>
);

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      result: "",
    };
  }

  handleButtonClick = (value) => {
    let inputValue = this.state.input;
  
    if (
      value === "sin(" ||
      value === "cos(" ||
      value === "tan(" ||
      value === "√(" ||
      value === "^" ||
      value === "ln(" || 
      value === "log("
    ) {
      inputValue += value;
    } else {
      inputValue += value;
    }
  
    this.setState({
      input: inputValue,
    });
  };
  

  handleClear = () => {
    this.setState({
      input: "",
      result: "",
    });
  };

  handleCalculate = () => {
    try {
      let inputWithReplacedFunctions = this.state.input.replace(
        /sin\(/g,
        "Math.sin("
      );
      inputWithReplacedFunctions = inputWithReplacedFunctions.replace(
        /cos\(/g,
        "Math.cos("
      );
      inputWithReplacedFunctions = inputWithReplacedFunctions.replace(
        /tan\(/g,
        "Math.tan("
      );
      inputWithReplacedFunctions = inputWithReplacedFunctions.replace(
        /√\(/g,
        "Math.sqrt("
      );
      inputWithReplacedFunctions = inputWithReplacedFunctions.replace(
        /ln\(/g,
        "Math.log("
      ); 
      inputWithReplacedFunctions = inputWithReplacedFunctions.replace(
        /log\(/g,
        "Math.log10("
      ); 
  
      inputWithReplacedFunctions = inputWithReplacedFunctions.replace(
        /\^/g,
        "**"
      );
  
      const result = Function(`return ${inputWithReplacedFunctions}`)();
      this.setState({
        result: result,
      });
    } catch (error) {
      this.setState({
        result: "Error",
      });
    }
  };
  

  render() {
    return (
      <body>
        <div className="menu">
          <h1>Calculadora Cientifica</h1>
          <h2>Diplomante: Ing. Wilder Rosas Flores</h2>
        </div>
        <div className="instrucciones">
          <h3>INSTRUCCIONES</h3>
          <p>· C Limpia los datos introducidos </p>
          <p>· = Da el resultado de la operacion </p>
          <h3>La calculadora tiene las siguentes opreaciones:</h3>
          <p>· + SUMA </p>
          <p>· - RESTA </p>
          <p>· * MULTIPLICACION </p>
          <p>· / DIVISION </p>
          <p>· √ RADICACION </p>
          <p>· Log LOGARITMO </p>
          <p>· Ln LOGARITMO NATURAL </p>
          <h3>
            Ademas que cuenta con las siguientes funciones trigonometricas:
          </h3>
          <p>· SIN </p>
          <p>· COS </p>
          <p>· TAN </p>
          <h4>
            Las funciones como RADICACION, LOGARITMO, LOGARITMO NATURAL, SIN, COS y TAN se deben cerrar los
            parentesis caso contrario saldra error al intentar realizar la
            operacion.
          </h4>
        </div>

        <div></div>
        <div className="calculator">
          <div className="input">
            <h1>CALCULADORA</h1>
            <input type="text" value={this.state.input} readOnly />
          </div>
          <div className="buttons">
            {[...Array(10).keys()].map((num) => (
              <Button key={num} value={num} onClick={this.handleButtonClick} />
            ))}
          </div>
          <div className="buttons-operations">
          <Button value="+" onClick={this.handleButtonClick} />
            <Button value="-" onClick={this.handleButtonClick} />
            <Button value="*" onClick={this.handleButtonClick} />
            <Button value="/" onClick={this.handleButtonClick} />
            <Button value="=" onClick={this.handleCalculate} />
            <Button value="(" onClick={this.handleButtonClick} />
            <Button value=")" onClick={this.handleButtonClick} />
            <Button value="sin(" onClick={this.handleButtonClick} />
            <Button value="cos(" onClick={this.handleButtonClick} />
            <Button value="tan(" onClick={this.handleButtonClick} />
            <Button value="√(" onClick={this.handleButtonClick} />
            <Button value="^" onClick={this.handleButtonClick} />
            <Button value="ln(" onClick={this.handleButtonClick} />
            <Button value="log(" onClick={this.handleButtonClick} />
            <Button value="C" onClick={this.handleClear} />
          </div>
          <div className="output">
            <input type="text" value={this.state.result} readOnly />
          </div>
        </div>
        <div className="repositorio">
          <h1>LINK DEL REPOSITORIO EN GIT HUB</h1>
        <a href="https://github.com/Anghelus29/CALCULADORA_REACT.git">
            <img
              src={logo}
              alt="GitHub Logo"
              width="150px" 
              height="150px"
            />
          </a>
        </div>

        <div className="footer">
          <p>© 2023 Wilder Rosas Flores</p>
        </div>
      </body>
    );
  }
}

export default Calculator;
