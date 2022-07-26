import React from 'react'

const StepThree = ({popupHandle, stepCount, nextStep, backStep, handleInputChange, federalState, postalCode, streetHouseNumber}) => {
  return (
    <div className='form'>
        <div className='form-group'>
            <input type='text' name='federalState' placeholder='Bundesland' className='form-control' onChange={(e)=> handleInputChange(e)} value={federalState}/>
        </div>
        <div className='form-group'>
            <input type='text' name='postalCode' placeholder='Postleitzahl' className='form-control' onChange={(e)=> handleInputChange(e)} value={postalCode}/>
        </div>
        <div className='form-group'>
            <input type='text' name='streetHouseNumber' placeholder='Straße und Hausnummer' className='form-control' onChange={(e)=> handleInputChange(e)} value={streetHouseNumber}/>
        </div>
        <ul className='listInline gap-10 justify-content-between'>
            {stepCount === 0
                ?
                <li><button className="btn btn-cancel py-3 px-5 border-0" onClick={popupHandle}>SCHLIESSEN</button></li>
                :
                <li><button className="btn btn-cancel py-3 px-5 border-0" onClick={backStep}>Zurück</button></li>
            }
            <li><a href="/" className="btn btn-submit py-3 px-5 border-0" onClick={nextStep}>Weiter</a></li>
        </ul>
    </div>
  )
}

export default StepThree;