import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add 1 and 4 to get 5', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const addButton = container.find('#operator-add');
    const equalsButton = container.find('#operator-equals')
    const runningTotal = container.find('#running-total')
    button1.simulate('click')
    addButton.simulate('click')
    button4.simulate('click')
    equalsButton.simulate('click')
    expect(runningTotal.text()).toEqual('5')
  })

  it('should subtract 4 from 7 and get 3', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const minusButton = container.find('#operator-subtract');
    const equalsButton = container.find('#operator-equals')
    const runningTotal = container.find('#running-total')
    button7.simulate('click')
    minusButton.simulate('click')
    button4.simulate('click')
    equalsButton.simulate('click')
    expect(runningTotal.text()).toEqual('3')
  })


  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const multiplyButton = container.find('#operator-multiply');
    const equalsButton = container.find('#operator-equals')
    const runningTotal = container.find('#running-total')
    button3.simulate('click')
    multiplyButton.simulate('click')
    button5.simulate('click')
    equalsButton.simulate('click')
    expect(runningTotal.text()).toEqual('15')
  })

  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const divideButton = container.find('#operator-divide');
    const equalsButton = container.find('#operator-equals')
    const runningTotal = container.find('#running-total')
    button2.simulate('click')
    button1.simulate('click')
    divideButton.simulate('click')
    button7.simulate('click')
    equalsButton.simulate('click')
    expect(runningTotal.text()).toEqual('3')
  })

  it('should concatenate  multiple number clicks', () => {
    const button2 = container.find('#number2');
    button2.simulate('click')
    button2.simulate('click')
    button2.simulate('click')
    const runningTotal = container.find('#running-total')
    expect(runningTotal.text()).toEqual('222')
  })

  it('should chain multiple operator clicks', () => {
    const button4 = container.find('#number4');
    const button2 = container.find('#number2');
    const button7 = container.find('#number7');
    const divideButton = container.find('#operator-divide');
    const multiplyButton = container.find('#operator-multiply');
    const equalsButton = container.find('#operator-equals')
    const runningTotal = container.find('#running-total')
    button4.simulate('click')
    divideButton.simulate('click')
    button2.simulate('click')
    multiplyButton.simulate('click')
    button7.simulate('click')
    equalsButton.simulate('click')
    expect(runningTotal.text()).toEqual('14')
  })

  it('should clear the running total without affecting the calculation', () => {
    const button4 = container.find('#number4');
    const button2 = container.find('#number2');
    const addButton = container.find('#operator-add');
    const clearButton = container.find('#clear');
    const button5 = container.find('#number5');
    const equalsButton = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');

    button4.simulate('click');
    addButton.simulate('click');
    button2.simulate('click');
    clearButton.simulate('click');
    button5.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('9');
    
  //test fails, error in lin 15 of Calculator.js - I think it should be if ( runningTotal !== 0 || newTotal)
    


  })

})

