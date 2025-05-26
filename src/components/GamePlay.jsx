import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button } from "../styled/Button";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [CurrentDice, setCurrentDice] = useState(1);

  const [error,setError]=useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selectd any number")
      return;
    }
    
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 1);
    }
    setSelectedNumber(undefined);
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}></TotalScore>
        <NumberSelector error={error}
        setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        ></NumberSelector>
      </div>
      <RoleDice CurrentDice={CurrentDice} roleDice={roleDice}></RoleDice>
      <div className="btns">
        <Button>Reset</Button>
        <Button></Button>
      </div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
