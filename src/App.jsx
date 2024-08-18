
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
          <div className='inputs is-flex is-flex is-flex-direction-column'>
            <label className='is-flex is-flex is-flex-direction-column'>
              <h2>Квартира:</h2>
              <input
                class="input is-rounded is-small"
                type="tel"
                placeholder={rent}
                value={rent}
                onChange={(e) => handleRent(e)}
              />
            </label>
            <label className='is-flex is-flex is-flex-direction-column'>
              <h2>Комуналка:</h2>
              <input
                class="input is-rounded is-small"
                type="tel"
                placeholder={utility}
                onChange={(e) => handleUtility(e)}
              />
            </label>
            <label className='is-flex is-flex is-flex-direction-column'>
              <h2>Прибудинкова територія:</h2>
              <input
                class="input is-rounded is-small"
                type="tel"
                placeholder={homeTerritory}
                onChange={(e) => handleHomeTerritory(e)}
              />
            </label>
            <label className='is-flex is-flex is-flex-direction-column'>
              <h2>Витрати Андрій:</h2>
              <input
                class="input is-rounded is-small"
                type="tel"
                placeholder={expensesAndrii}
                onChange={(e) => handleExpensesAndrii(e)}
              />
            </label>
            <label className='is-flex is-flex is-flex-direction-column'>
              <h2>Витрати Любомир:</h2>
              <input
                class="input is-rounded is-small"
                type="tel"
                placeholder={expensesLubomir}
                onChange={(e) => handleExpensesLubomir(e)}
              />
            </label>
            <label className='is-flex is-flex is-flex-direction-column'>
              <h2>Витрати Тарас:</h2>
              <input
                class="input is-rounded is-small"
                type="tel"
                placeholder={expensesTaras}
                onChange={(e) => handleExpensesTaras(e)}
              />
            </label>
            <label className='is-flex is-flex is-flex-direction-column'>
              <h2>Витрати Соломія:</h2>
              <input
                class="input is-rounded is-small"
                type="tel"
                placeholder={expensesTaras}
                onChange={(e) => handleExpensesTaras(e)}
              />
            </label>
          </div>
          {/* <p>загальна сума <span>{Math.ceil(calcTotalUtility())}</span> грн</p> */}
          {/* <p>загальнi витрати {Math.ceil(calcTotalExpenses())} грн</p> */}
          <div className='result'>
            <p>Андрій {Math.ceil(calcAndrii())} грн</p>
            <p>Любомир {Math.ceil(calcLubomir())} грн</p>
            <p>Тарас і Соломія {Math.ceil(calcTaras())} грн</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
