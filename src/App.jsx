
import { useState } from 'react';
import './App.css';

function App() {
  const [rent, setRent] = useState(5000);
  const [utility, setUtility] = useState(0);
  const [homeTerritory, setHomeTerritory] = useState(0);
  const [expensesAndrii, setExpensesAndrii] = useState(0);
  const [expensesLubomir, setExpensesLubomir] = useState(0);
  const [expensesTaras, setExpensesTaras] = useState(0);
  const calcTotalExpenses = () => {
    return expensesAndrii + expensesLubomir + expensesTaras;
  };

  const calcTotalUtility = () => {
    return utility + homeTerritory;
  };
  const calcAndrii = () => {
    return (((calcTotalUtility() / 3) + rent + (expensesLubomir / 3) + (expensesTaras / 3)) - expensesAndrii);
  };
  const calcLubomir = () => {
    return (((calcTotalUtility() / 3) + rent + (expensesAndrii / 3) + (expensesTaras / 3)) - expensesLubomir);
  };
  const calcTaras = () => {
    return (((calcTotalUtility() / 3) + rent + (expensesAndrii / 3) + (expensesLubomir / 3)) - expensesTaras);
  };


  const handleRent = (event) => {
    setRent(+event.target.value);
  };

  const handleUtility = (event) => {
    setUtility(+event.target.value);
  };
  const handleHomeTerritory = (event) => {
    setHomeTerritory(+event.target.value);
  };
  const handleExpensesAndrii = (event) => {
    setExpensesAndrii(+event.target.value);
  };
  const handleExpensesLubomir = (event) => {
    setExpensesLubomir(+event.target.value);
  };
  const handleExpensesTaras = (event) => {
    setExpensesTaras(+event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <h1>
            Калькулятор комуналки
          </h1>
          <div className='inputs'>
            <label>
              <p>Квартира</p>
              <input
                class="input is-rounded is-small"
                type="number"
                placeholder={rent}
                value={rent}
                onChange={(e) => handleRent(e)}
              />
            </label>
            <label>
              <p>Комуналка</p>
              <input
                class="input is-rounded is-small"
                type="number"
                placeholder={utility}
                onChange={(e) => handleUtility(e)}
              />
            </label>
            <label>
              <p>Прибудинкова територія</p>
              <input
                class="input is-rounded is-small"
                type="number"
                placeholder={homeTerritory}
                onChange={(e) => handleHomeTerritory(e)}
              />
            </label>
            <label>
              <p>Витрати Андрій</p>
              <input
                class="input is-rounded is-small"
                type="number"
                placeholder={expensesAndrii}
                onChange={(e) => handleExpensesAndrii(e)}
              />
            </label>
            <label>
              <p>Витрати Любомир</p>
              <input
                class="input is-rounded is-small"
                type="number"
                placeholder={expensesLubomir}
                onChange={(e) => handleExpensesLubomir(e)}
              />
            </label>
            <label>
              <p>Витрати Тарас</p>
              <input
                class="input is-rounded is-small"
                type="number"
                placeholder={expensesTaras}
                onChange={(e) => handleExpensesTaras(e)}
              />
            </label>
          </div>
          {/* <p>загальна сума <span>{Math.ceil(calcTotalUtility())}</span> грн</p> */}
          {/* <p>загальнi витрати {Math.ceil(calcTotalExpenses())} грн</p> */}
          <p>Андрій {Math.ceil(calcAndrii())} грн</p>
          <p>Любомир {Math.ceil(calcLubomir())} грн</p>
          <p>Тарас {Math.ceil(calcTaras())} грн</p>
        </div>
      </header>
    </div>
  );
}

export default App;
