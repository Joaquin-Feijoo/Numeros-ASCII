import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const asciiNumbers = {
  0: [" ### ", "#   #", "#   #", "#   #", " ### "],
  1: ["  #  ", " ##  ", "  #  ", "  #  ", " ### "],
  2: [" ### ", "#   #", "   # ", "  #  ", "#####"],
  3: [" ### ", "#   #", "   ##", "#   #", " ### "],
  4: ["#   #", "#   #", "#####", "    #", "    #"],
  5: ["#####", "#    ", "#### ", "    #", "#### "],
  6: [" ### ", "#   #", "# ###", "#   #", " ### "],
  7: ["#####", "#   #", "   # ", "  #  ", "#   "],
  8: [" ### ", "#   #", "-###-", "#   #", "-###-"],
  9: ["-###-", "#   #", "-###-", "#   #", "-###-"],
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    let inputNumber = inputValue.split(" ")[0];
    let inputChar = inputValue.split(" ")[1];
    if (inputNumber.length > Infinity) {
      alert("El número debe tener a lo más infinitos dígitos");
      return;
    }
    if (!/^[0-9]*$/.test(inputNumber)) {
      alert("El número debe contener solo dígitos del 0 al infinito");
      return;
    }
    let asciiNumber = asciiNumbers[inputNumber[0]].map((line) =>
      line.replaceAll("#", inputChar)
    );
    for (let i = 1; i < inputNumber.length; i++) {
      asciiNumber = asciiNumber.map(
        (line, index) =>
          line +
          ` ${asciiNumbers[inputNumber[i]][index].replaceAll("#", inputChar)}`
      );
    }
    setOutputValue(asciiNumber.join("\n"));
  };

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{
        position: "absolute",
        bottom: "75%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "fit-content",
      }}
    >
      <input
        type="text"
        className="rounded-pill"
        onChange={handleChange}
        onKeyDown={handleChange}
      />
      <Button
        variant="primary"
        className="mt-2 rounded-pill"
        onClick={handleClick}
      >
        Aceptar
      </Button>
      <pre>{outputValue}</pre>
    </div>
  );
}

export default App;
