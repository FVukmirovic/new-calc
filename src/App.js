import React from 'react';
import './App.css';
import CalculationHistory from "./calculationHistory"
import CurrentCalculation from "./currentCalculation"
import ClearAll from "./clearAll"
import OperationButton from './operationButton'
import DigitButton from './digitButton'
import DeleteButton from './deleteButton'
import EqualsButton from './equalsButton'

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      calculationHistory: '',
      currentCalculation: [],
      result: 0
    };
  }

handleButtonClick(clickedValue){
  let oldValue = this.state.currentCalculation;
  oldValue = oldValue ? Object.values(oldValue) : []; //provjeravamo da li niz postoji
  let lastItem = oldValue[oldValue.length -1];
  let secondLastItem = oldValue[oldValue.length -2];
    //dodajemo broj u niz
  if(typeof lastItem === 'number' && typeof clickedValue === 'number'){
    lastItem = parseInt(String(lastItem) + String(clickedValue));  
    oldValue[oldValue.length -1] = lastItem;
    //spajanje 2 broja i tacke u jedan decimalan broj
  } else if (typeof lastItem === 'string' && typeof clickedValue === 'number' && lastItem === '.') {
    lastItem = parseFloat(String(secondLastItem) + String(lastItem) + String(clickedValue));
    oldValue.pop();
    oldValue[oldValue.length -1] = lastItem;
    //unosenje onog sto je kliknuto
  } else {
    if(lastItem === '.' && clickedValue === '.'){
      oldValue.pop();
    }
    oldValue.push(clickedValue);
  }
    this.setState({
      currentCalculation: oldValue
    });
}

render(){
  return (
    <div className="App">
      <header className="App-header">
        <div className="calculator-container">
          <div className="one">
            <CalculationHistory 
            classes='calcHistory'
            history={this.state.calculationHistory}/>
          </div>
          <div className="two">
            <CurrentCalculation 
            classes='currentCalc'
            current={this.state.currentCalculation}/>
          </div>
          <ClearAll clickHandle = {
             () => this.setState({
               calculationHistory:'',
               currentCalculation: []
             })} />

          <OperationButton 
            content="+/-"
            clickHandle= { () => {
              let oldValue = this.state.currentCalculation;
              oldValue = oldValue ? Object.values(oldValue) : []; //provjeravamo da li niz postoji
              let lastItem = oldValue[oldValue.length -1];

              if(typeof lastItem === 'number'){
                lastItem = lastItem *= -1;  
                oldValue[oldValue.length -1] = lastItem;
                this.setState({currentCalculation: oldValue});
            }}} />             
          <OperationButton 
            content="%"
            clickHandle = { () => this.handleButtonClick('%')
             } />   
          <OperationButton 
            classes='numOperators'
            content="&divide;"
            clickHandle = { () => this.handleButtonClick('/')
             } />                
          <DigitButton 
            content="7"
            clickHandle = { () => this.handleButtonClick(7)
             } />  
          <DigitButton 
            content="8"
            clickHandle = { () => this.handleButtonClick(8)
             } />  
          <DigitButton 
            content="9"
            clickHandle = { () => this.handleButtonClick(9)
             } />                            
          <OperationButton 
            classes='numOperators'
            content="&times;"
            clickHandle = { () => this.handleButtonClick('*')
             } />   
          <DigitButton 
            content="4"
            clickHandle = { () => this.handleButtonClick(4)
             } />  
          <DigitButton 
            content="5"
            clickHandle = { () => this.handleButtonClick(5)
             } />  
          <DigitButton 
            content="6"
            clickHandle = { () => this.handleButtonClick(6)
             } />                            
          <OperationButton 
            classes='numOperators'
            content="-"
            clickHandle = { () => this.handleButtonClick('-')
             } />   
          <DigitButton 
            content="1"
            clickHandle = { () => this.handleButtonClick(1)
             } />  
          <DigitButton 
            content="2"
            clickHandle = { () => this.handleButtonClick(2)
             } />  
          <DigitButton 
            content="3"
            clickHandle = { () => this.handleButtonClick(3)
             } />                            
          <OperationButton 
            classes='numOperators'
            content="+"
            clickHandle = { () => this.handleButtonClick('+')
             } />             
          <DigitButton 
            content="0"
            clickHandle = { () => this.handleButtonClick(0)
             } />  
          <DigitButton 
            content="."
            clickHandle = { () => this.handleButtonClick('.')
            }/>               
          <DeleteButton 
            content=""
            clickHandle = { () => {
              let oldValue = this.state.currentCalculation;
              oldValue = oldValue ? Object.values(oldValue) : []; //provjeravamo da li niz postoji
              let lastItem = oldValue[oldValue.length -1];

              if (typeof lastItem === 'number'){
                lastItem = String(lastItem).slice(0,-1);               
                oldValue[oldValue.length -1] = lastItem ? parseInt(lastItem) : '';
              } else {
                oldValue.pop();
              }

              this.setState({currentCalculation: oldValue})
            }} />  
          <EqualsButton 
            classes = 'numEqual'
            content="0"
            clickHandle = { () => {
              let tempCalc = this.state.currentCalculation.join('')
              let tempHistory = this.state.calculationHistory + tempCalc
              this.setState({calculationHistory: tempCalc})
              //join('') spaja elemente niza u string bez , izmedju elemenata
              let result = eval(tempCalc)
              let resultString = String(result)
              this.setState({result: result, currentCalculation: resultString})
            }} 

            />               
        </div>
      </header>
    </div>
  );
}
}