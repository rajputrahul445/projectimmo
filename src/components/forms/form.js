import React from 'react'
import StepFirst from './stepFirst';
import StepFour from './stepFour';
import StepSecond from './stepSecond';
import StepThree from './stepThree';

const Form = ({popupHandle, floor, units, gewerbe, grundstück, stepCount, nextStep, backStep, formSubmit, handleInputChange, unitsValue, constructionYear, surface, room, floorValue, kommentar, federalState, postalCode, streetHouseNumber, desiredPrice, email, phoneNumber}) => {
  return (
    <>
    <div className='popup'>
        <div className='popupInr'>
            <div className='closeBtn' onClick={popupHandle}><i className="fas fa-times"></i></div>
            
            {
                stepCount === 1
                ?
                <StepFirst popupHandle={popupHandle} floor={floor} units={units} gewerbe={gewerbe} grundstück={grundstück} stepCount={stepCount} nextStep={nextStep} backStep={backStep} handleInputChange={handleInputChange} unitsValue={unitsValue} constructionYear={constructionYear} surface={surface} room={room} floorValue={floorValue} />
                :
                null
            }
            {
                stepCount === 2
                ?
                <StepSecond popupHandle={popupHandle}  stepCount={stepCount} nextStep={nextStep} backStep={backStep} handleInputChange={handleInputChange} kommentar={kommentar} />
                :
                null
            }
            {
                stepCount === 3
                ?
                <StepThree popupHandle={popupHandle}  stepCount={stepCount} nextStep={nextStep} backStep={backStep} handleInputChange={handleInputChange} federalState={federalState} postalCode={postalCode} streetHouseNumber={streetHouseNumber}/>
                :
                null
            }
            {
                stepCount === 4
                ?
                <StepFour popupHandle={popupHandle}  stepCount={stepCount} formSubmit={formSubmit} backStep={backStep} handleInputChange={handleInputChange} desiredPrice={desiredPrice} email={email} phoneNumber={phoneNumber}/>
                :
                null
            }
        </div>
    </div>
    </>
  )
}

export default Form;