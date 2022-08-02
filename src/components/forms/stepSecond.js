import React from 'react';
import FileBase64 from 'react-file-base64';

const StepSecond = ({popupHandle, stepCount, nextStep, backStep, handleInputChange, kommentar, fileChange, photosFilesChange, attachmentFilesChange}) => {
  return (
    <div className='form'>
        <div className='form-group fullInput'>
            <label className='steps-radio-title mb-0'>Grundrisse</label>
            {/* <input type='file' name='Grundrisse' accept='image/jpeg,image/gif,image/png,image/jpg,application/pdf' className='form-control' multiple onChange={(e)=>fileChange(e)}/> */}
            <FileBase64 multiple={ true } onDone={fileChange} />
        </div>
        <div className='form-group fullInput'>
            <label className='steps-radio-title mb-0'>Fotos</label>
            {/* <input type='file' name='Fotos' accept="image/jpeg,image/gif,image/png,image/jpg" className='form-control' multiple/>
             */}
            <FileBase64 multiple={ true } onDone={photosFilesChange} />
        </div>
        <div className='form-group fullInput'>
            <label className='steps-radio-title mb-0'>Anhänge</label>
            {/* <input type='file' name='Anhänge' className='form-control' multiple/> */}
            <FileBase64 multiple={ true } onDone={attachmentFilesChange} />
        </div>
        <div className='form-group'>
            <label htmlFor='kommentar' className='steps-radio-title'>Kommentar</label>
            <textarea id='kommentar' cols="30" rows="4" className="form-control comment" name='kommentar' value={kommentar} onChange={(e)=> handleInputChange(e)}></textarea>
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

export default StepSecond;