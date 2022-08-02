import React from 'react'

const StepFirst = ({popupHandle, floor, units, gewerbe, grundstück, stepCount, nextStep, backStep, handleInputChange, unitsValue, constructionYear, surface, room, floorValue}) => {
  return (
    <div className='form'>
        <h1>Beschreiben Sie Ihre Immobilie</h1>
        { units || gewerbe ||( grundstück === false)?
            <div className='form-floating'>
                <input type='number' id='unitsValue' name='unitsValue' placeholder='Einheiten' className='form-control' onChange={(e) => handleInputChange(e)} value={unitsValue} />
                <label htmlFor='unitsValue'>Einheiten</label>
            </div>
            :
            null
        }
        {grundstück ?
            <div className='form-floating'>
                <input type='number' id='surface' placeholder='Fläche' name='surface' className='form-control' onChange= {(e)=> handleInputChange(e)} value={surface}/>
                <label htmlFor='surface'>Fläche</label>
            </div>
            :
            null
        }
        {grundstück ? 
            null
            :
            <div className='form-floating'>
                <input id='constructionYear' type='number' placeholder='Baujahr' name='constructionYear' className='form-control' onChange= {(e)=> handleInputChange(e)} value={constructionYear}/>
                <label htmlFor='constructionYear'>Baujahr</label>
            </div>
        }
        {floor || units || gewerbe ?
            <div className='form-floating'>
                <input id='floorValue' type='number' placeholder='Stockwerke' name='floorValue' className='form-control' onChange= {(e)=> handleInputChange(e)} value={floorValue} />
                <label htmlFor='floorValue'>Stockwerke</label>
            </div>
            :
            null
        }
        { units || gewerbe || grundstück
            ? null
            : <div className='form-floating'>
                <input id='room' type='number' placeholder='Zimmer' name='room' className='form-control' onChange={(e)=> handleInputChange(e)} value={room} />
                <label htmlFor='room'>Zimmer</label>
            </div>
            }
        { units ?
            <React.Fragment>
                <div className='steps-radio-title'>Teilungserklärung</div>
                <ul className='listInline gap-20 mb-3'>
                    <li>
                        <div className='customRadio'>
                            <input type='radio' id='Teilungserklärung_ja' value='ja' name='Teilungserklärung' defaultChecked={true} onChange={(e)=> handleInputChange(e)}/>
                            <label htmlFor='Teilungserklärung_ja'>Ja</label>
                        </div>
                    </li>
                    <li>
                        <div className='customRadio'>
                            <input type='radio' id='Teilungserklärung_nein' name='Teilungserklärung' value="Nein" onChange={(e)=> handleInputChange(e)}/>
                            <label htmlFor='Teilungserklärung_nein'>Nein</label>
                        </div>
                    </li>
                </ul>
            </React.Fragment>
            :
            null
        }
        <div className='steps-radio-title'>Erbpacht</div>
        <ul className='listInline gap-20 mb-3'>
            <li>
                <div className='customRadio'>
                    <input type='radio' id='ja' name='Erbpacht' defaultChecked={true} value="ja" onChange={(e)=> handleInputChange(e)}/>
                    <label htmlFor='ja'>Ja</label>
                </div>
            </li>
            <li>
                <div className='customRadio'>
                    <input type='radio' id='nein' name='Erbpacht' value="Nein" onChange={(e)=> handleInputChange(e)}/>
                    <label htmlFor='nein'>Nein</label>
                </div>
            </li>
        </ul>
        { grundstück ?
            <React.Fragment>
                <div className='steps-radio-title'>Bebauung möglich?</div>
                <ul className='listInline gap-20 mb-3'>
                    <li>
                        <div className='customRadio'>
                            <input type='radio' id='Bebauung_ja' name='Bebauung' defaultChecked={true} value="ja" onChange={(e)=> handleInputChange(e)}/>
                            <label htmlFor='Bebauung_ja'>Ja</label>
                        </div>
                    </li>
                    <li>
                        <div className='customRadio'>
                            <input type='radio' id='Bebauung_nein' name='Bebauung' value="Nein" onChange={(e)=> handleInputChange(e)}/>
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
                <li><button className="btn btn-cancel py-3 px-5 border-0" onClick={popupHandle}>SCHLIESSEN</button></li>
                :
                <li><button className="btn btn-cancel py-3 px-5 border-0" onClick={backStep}>Zurück</button></li>
            }
            <li><a href="/" className="btn btn-submit py-3 px-5 border-0" onClick={nextStep}>Weiter</a></li>
        </ul>
        
    </div>
  )
}

export default StepFirst;