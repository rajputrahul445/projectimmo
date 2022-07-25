import React from 'react'

const StepFirst = ({popupHandle, floor, units, gewerbe, grundstück, stepCount, nextStep, backStep, handleInputChange, unitsValue, constructionYear, surface, room, floorValue}) => {
  return (
    <div className='form'>
        <h1>Beschreiben Sie Ihre Immobilie</h1>
        { units || gewerbe ||( grundstück === false)?
            <div className='form-group'>
                <input type='number' placeholder='Einheiten' name='unitsValue' className='form-control' onChange={(e) => handleInputChange(e)} value={unitsValue} />
            </div>
            :
            null
        }
        {grundstück ?
            <div className='form-group'>
                <input type='number' placeholder='Fläche' name='surface' className='form-control' onChange= {(e)=> handleInputChange(e)} value={surface}/>
            </div>
            :
            null
        }
        {grundstück ? 
            null
            :
            <div className='form-group'>
                <input type='number' placeholder='Baujahr' name='constructionYear' className='form-control' onChange= {(e)=> handleInputChange(e)} value={constructionYear}/>
            </div>
        }
        {floor || units || gewerbe ?
            <div className='form-group'>
                <input type='number' placeholder='Stockwerke' name='floorValue' className='form-control' onChange= {(e)=> handleInputChange(e)} value={floorValue} />
            </div>
            :
            null
        }
        { units || gewerbe || grundstück
            ? null
            : <div className='form-group'>
                <input type='number' placeholder='Zimmer' name='room' className='form-control' onChange={(e)=> handleInputChange(e)} value={room} />
            </div>
            }
        { units ?
            <React.Fragment>
                <h3>Teilungserklärung</h3>
                <ul className='listInline gap-20 mb-3'>
                    <li>
                        <div className='customRadio'>
                            <input type='radio' id='Teilungserklärung_ja' value='' name='Teilungserklärung' defaultChecked={true} onChange={(e)=> handleInputChange(e)}/>
                            <label htmlFor='Teilungserklärung_ja'>Ja</label>
                        </div>
                    </li>
                    <li>
                        <div className='customRadio'>
                            <input type='radio' id='Teilungserklärung_nein' name='Teilungserklärung' />
                            <label htmlFor='Teilungserklärung_nein'>Nein</label>
                        </div>
                    </li>
                </ul>
            </React.Fragment>
            :
            null
        }
        <h3>Erbpacht</h3>
        <ul className='listInline gap-20 mb-3'>
            <li>
                <div className='customRadio'>
                    <input type='radio' id='ja' name='Erbpacht' defaultChecked={true} onChange={(e)=> handleInputChange(e)}/>
                    <label htmlFor='ja'>Ja</label>
                </div>
            </li>
            <li>
                <div className='customRadio'>
                    <input type='radio' id='nein' name='Erbpacht' />
                    <label htmlFor='nein'>Nein</label>
                </div>
            </li>
        </ul>
        { grundstück ?
            <React.Fragment>
                <h3>Bebauung möglich?</h3>
                <ul className='listInline gap-20 mb-3'>
                    <li>
                        <div className='customRadio'>
                            <input type='radio' id='Bebauung_ja' name='Bebauung' defaultChecked={true}/>
                            <label htmlFor='Bebauung_ja'>Ja</label>
                        </div>
                    </li>
                    <li>
                        <div className='customRadio'>
                            <input type='radio' id='Bebauung_nein' name='Bebauung' />
                            <label htmlFor='Bebauung_nein'>Nein</label>
                        </div>
                    </li>
                </ul>
            </React.Fragment>
            :
            null
        }
        
        <ul className='listInline gap-10 justify-content-between'>
            {stepCount === 1
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

export default StepFirst;