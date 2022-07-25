import React from 'react'

const StepThree = ({popupHandle, stepCount, nextStep, backStep}) => {
  return (
    <div className='form'>
        <div className='form-group'>
            <input type='text' name='Bundesland' placeholder='Bundesland' className='form-control' />
        </div>
        <div className='form-group'>
            <input type='text' name='Postleitzahl' placeholder='Postleitzahl' className='form-control' />
        </div>
        <div className='form-group'>
            <input type='text' name='Straße' placeholder='Straße und Hausnummer' className='form-control'/>
        </div>
        <ul className='listInline gap-10 justify-content-between'>
            {stepCount === 0
                ?
                <li><button className="btn btn-secondary py-3 px-5 border-0" onClick={popupHandle}>SCHLIESSEN</button></li>
                :
                <li><button className="btn btn-secondary py-3 px-5 border-0" onClick={backStep}>Zurück</button></li>
            }
            <li><a href="/" className="btn btn-dark py-3 px-5 border-0" onClick={nextStep}>Weiter</a></li>
        </ul>
    </div>
  )
}

export default StepThree;