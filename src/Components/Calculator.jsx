import React from "react";
import { useState } from "react";
import '../assets/Calculator.css';

function DisplayNumber() {

    const [numbertoDisplay, setnumbertoDisplay] = useState("0");
    const [storedOperator, setstoredOperator] = useState("");
    const [storedNumber, setstoredNumber] = useState(0);

    const NumberonClick = (number) => {

        if (numbertoDisplay === "0") {
            setnumbertoDisplay(number);
            return;
        }
        
        setnumbertoDisplay(numbertoDisplay + number)

    }

    const addDecimal = () => {
        setnumbertoDisplay(numbertoDisplay + ".");
    }

    const operator = ( operator ) => {

        if (storedOperator === "") {
            if (operator === "=") {
                return;
            }

            setstoredNumber(parseFloat(numbertoDisplay));
            setnumbertoDisplay("0")
            setstoredOperator(operator);

        } else if (operator === "=") {
            if (storedOperator === "+") {
                setnumbertoDisplay((storedNumber + parseFloat(numbertoDisplay)).toString());
            } else if (storedOperator === "-") {
                setnumbertoDisplay((storedNumber - parseFloat(numbertoDisplay)).toString());
            } else if (storedOperator === "/") {
                setnumbertoDisplay((storedNumber / parseFloat(numbertoDisplay)).toString());
            } else if (storedOperator === "*") {
                setnumbertoDisplay((storedNumber * parseFloat(numbertoDisplay)).toString());
            }

            setstoredNumber(0);
            setstoredOperator("");
            
        } else if (operator !== "=") {

            if (storedOperator === "+") {
                setstoredNumber(storedNumber + parseFloat(numbertoDisplay));
            } else if (storedOperator === "-") {
                setstoredNumber(storedNumber - parseFloat(numbertoDisplay));
            } else if (storedOperator === "/") {
                setstoredNumber(storedNumber / parseFloat(numbertoDisplay));
            } else if (storedOperator === "*") {
                setstoredNumber(storedNumber * parseFloat(numbertoDisplay));
            }

            setnumbertoDisplay("0");
            setstoredOperator(operator);

        }

    }


    return (
        <>
            <div className="calculator-body" ></div>
            <div className="container button-holder">

                <button onClick={() => setnumbertoDisplay("0")}>AC</button>
                <button onClick={() => setnumbertoDisplay((parseFloat(numbertoDisplay)*-1).toString())}>+/-</button>
                <button onClick={() => setnumbertoDisplay((Math.pow(parseFloat(numbertoDisplay),2)).toString())}>^2</button>
                <button onClick={() => operator("/")}>/</button>

                <button onClick={() => NumberonClick("7")}>7</button>
                <button onClick={() => NumberonClick("8")}>8</button>
                <button onClick={() => NumberonClick("9")}>9</button>
                <button onClick={() => operator("*")}>*</button>

                <button onClick={() => NumberonClick("4")}>4</button>
                <button onClick={() => NumberonClick("5")}>5</button>
                <button onClick={() => NumberonClick("6")}>6</button>
                <button onClick={() => operator("+")}>+</button>

                <button onClick={() => NumberonClick("1")}>1</button>
                <button onClick={() => NumberonClick("2")}>2</button>
                <button onClick={() => NumberonClick("3")}>3</button>
                <button onClick={() => operator("-")}>-</button>

                <button onClick={() => NumberonClick("0")}>0</button>
                <button onClick={() => addDecimal()}>.</button>
                <button></button>
                <button onClick={() => operator("=")}>=</button>

            </div>

            <div className="screen"></div>
            <div className="text-box">{ numbertoDisplay }</div>

            <div className="credits"> Made by David Herring </div>
        </>
    )

}

export default DisplayNumber;