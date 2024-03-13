import React from 'react'
import './ShowWord.css'

const ShowWord = ({words}) => {
  return (
    <div className='container'>
        {words.map((word, id) => 
        <>
          <div key={id} className='responses'>
            <li className='response'>{word.definition}</li>
          </div>
        </>
      )}
      </div>
  )
}

export default ShowWord
