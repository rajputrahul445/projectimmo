import React from 'react'

const StepFour = ({popupHandle, stepCount, formSubmit, backStep}) => {
  return (
    <div className='form'>
        <div className='form-group'>
            <input type='text' name='Wunschpreis' placeholder='Was ist ihr Wunschpreis?' className='form-control' />
        </div>
        <div className='form-group'>
            <input type='text' name='Email' placeholder='Email' className='form-control' />
        </div>
        <div className='form-group'>
            <input type='text' name='Straße' placeholder='Telefonnummer' className='form-control'/>
        </div>
        <ul className='listInline gap-10 justify-content-between'>
            {stepCount === 0
                ?
                <li><button className="btn btn-secondary py-3 px-5 border-0" onClick={popupHandle}>SCHLIESSEN</button></li>
                :
                <li><button className="btn btn-secondary py-3 px-5 border-0" onClick={backStep}>Zurück</button></li>
            }
            <li><button type='submit' className="btn btn-dark py-3 px-5 border-0" onClick={formSubmit}>Senden</button></li>
        </ul>
    </div>
  )
}

export default StepFour;