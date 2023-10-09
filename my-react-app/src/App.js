// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import './calculator.css';


import Header from './Components/Header/Header';
import UserInput from './Components/UserInput/UserInput';
import ResultsTable from './Components/ResultsTable/ResultsTable';


function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
    
    const yearlyData = []; 

    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
       
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  
return (
   <div>
    <Header/>
    <UserInput onCalculate={calculateHandler}/>
    {/* <UserInput /> */}
    <ResultsTable/>
   </div>
  );
};


export default App;
