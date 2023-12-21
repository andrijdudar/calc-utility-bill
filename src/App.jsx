
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


  function handleTouchStart(e) {
    e.preventDefault();
    const el = e.target;
    el.classList.add('no-zoom');
    el.focus();
  }

  function handleTouchMove(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <h1>
            Калькулятор комуналки
          </h1>
          <div className='inputs is-flex is-flex is-flex-direction-column'>
            <label className='is-flex is-flex is-flex-direction-row'>
              <h2>Квартира:</h2>
              <input
                class="input is-rounded is-small zoomable-input"
                type="tel"
                placeholder={rent}
                value={rent}
                onChange={(e) => handleRent(e)}
              />
            </label>
            <label className='is-flex is-flex is-flex-direction-row'>
              <h2>Комуналка:</h2>
              <input
                class="input is-rounded is-small zoomable-input"
                type="tel"
                placeholder={utility}
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchMove={(e) => handleTouchMove(e)}
                onChange={(e) => handleUtility(e)}
              />
            </label>
            <label className='is-flex is-flex is-flex-direction-row'>
              <h2>Прибудинкова_територія:</h2>
              <input
                class="input is-rounded is-small zoomable-input"
                type="tel"
                placeholder={homeTerritory}
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchMove={(e) => handleTouchMove(e)}
                onChange={(e) => handleHomeTerritory(e)}
              />
            </label>
            <label className='is-flex is-flex is-flex-direction-row'>
              <h2>Витрати_Андрій:</h2>
              <input
                class="input is-rounded is-small zoomable-input"
                type="tel"
                placeholder={expensesAndrii}
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchMove={(e) => handleTouchMove(e)}
                onChange={(e) => handleExpensesAndrii(e)}
              />
            </label>
            <label className='is-flex is-flex is-flex-direction-row'>
              <h2>Витрати_Любомир:</h2>
              <input
                class="input is-rounded is-small zoomable-input"
                type="tel"
                placeholder={expensesLubomir}
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchMove={(e) => handleTouchMove(e)}
                onChange={(e) => handleExpensesLubomir(e)}
              />
            </label>
            <label className='is-flex is-flex is-flex-direction-row'>
              <h2>Витрати_Тарас:</h2>
              <input
                class="input is-rounded is-small zoomable-input"
                type="tel"
                placeholder={expensesTaras}
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchMove={(e) => handleTouchMove(e)}
                onChange={(e) => handleExpensesTaras(e)}
              />
            </label>
          </div>
          {/* <p>загальна сума <span>{Math.ceil(calcTotalUtility())}</span> грн</p> */}
          {/* <p>загальнi витрати {Math.ceil(calcTotalExpenses())} грн</p> */}
          <div className='result'>
            <p>Андрій {Math.ceil(calcAndrii())} грн</p>
            <p>Любомир {Math.ceil(calcLubomir())} грн</p>
            <p>Тарас {Math.ceil(calcTaras())} грн</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
