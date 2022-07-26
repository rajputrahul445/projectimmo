import React from 'react'

const StepFour = ({popupHandle, stepCount, formSubmit, backStep, handleInputChange, desiredPrice, email, phoneNumber}) => {
  return (
    <div className='form'>
        <div className='form-group'>
            <input type='text' name='desiredPrice' placeholder='Was ist ihr Wunschpreis?' className='form-control' onChange={(e)=> handleInputChange(e)} value={desiredPrice}/>
        </div>
        <div className='form-group'>
            <input type='text' name='email' placeholder='Email' className='form-control' onChange={(e)=> handleInputChange(e)} value={email} />
        </div>
        <div className='form-group'>
            <input type='text' name='phoneNumber' placeholder='Telefonnummer' className='form-control' onChange={(e)=> handleInputChange(e)} value={phoneNumber}/>
        </div>
        <ul className='listInline gap-10 justify-content-between'>
            {stepCount === 0
                ?
                <li><button className="btn btn-cancel py-3 px-5 border-0" onClick={popupHandle}>SCHLIESSEN</button></li>
                :
                <li><button className="btn btn-cancel py-3 px-5 border-0" onClick={backStep}>Zurück</button></li>
            }
            <li><button type='submit' className="btn btn-submit py-3 px-5 border-0" onClick={formSubmit}>Senden</button></li>
        </ul>
    </div>
  )
}

export default StepFour;