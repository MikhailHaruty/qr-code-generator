import React, { useState } from 'react'

const Controller = () => {
  const [inputValue, setInputValue] = useState('')
  const [QR, setQR] = useState('')

  function createQR(event: React.FormEvent) {
    event.preventDefault()

    if (!inputValue) {
      alert('Your content is empty. Input something.')
      return
    }

    setQR(`http://api.qrserver.com/v1/create-qr-code/?data=${inputValue}&size=[200]x[200]`)
  }

  return (
    <form className='controller'>
      <input
        className='controller-input'
        type='text'
        placeholder='Write the content (link or text)'
        onChange={e => setInputValue(e.target.value)}
      />
      <button className="controller-button" onClick={(e) => createQR(e)}>
        Create
      </button>
      {QR && (
        <div className='qr-container'>
          <h2 className="qr-title">
            Here is your QR!
          </h2>
          {inputValue.includes('http')
            ?
              <a className='qr-link' href={inputValue}>
                <img className='qr-image' src={QR} alt="QR code" />
              </a>
            :
              <img className='qr-image' src={QR} alt="QR code" />
          }
        </div>
      )}
    </form>
  )
}

export default Controller