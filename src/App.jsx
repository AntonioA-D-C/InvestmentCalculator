import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import Form from './components/Form/Form';
import UniqueHeader from './components/Header/UniqueHeader';
import ResultsTable from './components/ResultsTable/ResultsTable';

function App() {
  const [allYearlyData, setYearlyData] = useState([])
  const calculateHandler = (userInput) => {
  
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
 
    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    console.log(currentSavings)
    console.log(+userInput['current-savings']);
    console.log(yearlyContribution);
    console.log(expectedReturn);
    console.log(duration)
 console.log(yearlyData);
  setYearlyData(yearlyData);
    // do something with yearlyData ...
  };

  function resetThis(){
   
    setYearlyData([]);
  }
  return (
    <div>
 
      <UniqueHeader logo={logo}/>
      <Form resetThis={resetThis}  calculateHandler={calculateHandler}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
     {Array.isArray(allYearlyData) && allYearlyData.length>0 ? <ResultsTable data={allYearlyData}/> : <p style={{color: "red", textAlign: "center"}}>No hay datos introducidos</p>}
    </div>
  );
}

export default App;
