import React from 'react'
import StepFirst from './stepFirst';
import StepFour from './stepFour';
import StepSecond from './stepSecond';
import StepThree from './stepThree';

const Form = ({popupHandle, floor, units, gewerbe, grundstück, stepCount, nextStep, backStep, formSubmit, handleInputChange, unitsValue, constructionYear, surface, room, floorValue}) => {
  return (
    <>
    <div className='popup'>
        <div className='popupInr'>
            <div className='closeBtn' onClick={popupHandle}><i className="fas fa-times"></i></div>
            
            {
                stepCount === 1
                ?
                <StepFirst popupHandle={popupHandle} floor={floor} units={units} gewerbe={gewerbe} grundstück={grundstück} stepCount={stepCount} nextStep={nextStep} backStep={backStep} handleInputChange={handleInputChange} unitsValue={unitsValue} constructionYear={constructionYear} surface={surface} room={room} floorValue={floorValue}/>
                :
                null
            }
            {
                stepCount === 2
                ?
                <StepSecond popupHandle={popupHandle}  stepCount={stepCount} nextStep={nextStep} backStep={backStep}/>
                :
                null
            }
            {
                stepCount === 3
                ?
                <StepThree popupHandle={popupHandle}  stepCount={stepCount} nextStep={nextStep} backStep={backStep}/>
                :
                null
            }
            {
                stepCount === 4
                ?
                <StepFour popupHandle={popupHandle}  stepCount={stepCount} formSubmit={formSubmit} backStep={backStep}/>
                :
                null
            }
        </div>
    </div>
    </>
  )
}

export default Form;