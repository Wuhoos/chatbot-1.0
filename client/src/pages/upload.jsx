import React from 'react'
import Navbar from '../components/navbar'

function upload() {

    const handleFileSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        fetch('ypload_file', {
            method: 'POST',
            body: formData,
        })
        .then((res) => res.json())
        .then((data)=> {
            console.log(data);
        })
        .catch((error)=> {
            console.error('Error uploading file:', error);
        })
    }

  return (
    <div>
        <Navbar/>
        <div>
            <form encType='multipart/form-data' onSubmit={handleFileSubmit}>
                <div className='mb-3'>
                    <label htmlFor='formFile' className='form-label'>
                        Upload Your File
                    </label>
                    <input name='file' className='form-control' type='file' id='formFile'/>
                </div>
                <div className='form-group'>
                    <button className='btn btn-primary' type='submit'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default upload