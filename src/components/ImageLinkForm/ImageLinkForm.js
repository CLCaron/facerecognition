import React from 'react';
import './ImageLinkForm.css';

let ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'>
                {'This brain detects faces in your pictures.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;