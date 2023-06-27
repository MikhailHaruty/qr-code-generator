import React from 'react'
import Controller from './Controller/Controller'

const Content = () => {
  return (
    <main>
      <section className='content'>
        <div className='container'>
          <span className="content-title">
            QR Code Generator
          </span>
          <h1 className="content-descr">
            An instant creation of a QR code with any content.
          </h1>
          <Controller />
        </div>
      </section>      
    </main>
  )
}

export default Content