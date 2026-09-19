import React, {useState} from 'react'

function Hello(){
  const [isVisible, setIsVisible] = useState(() =>{
    setTimeout(() =>{
      setIsVisible(false)
    }, 2000)
    return true
  })

  return(
    isVisible ? (
      <div style={{backgroundColor: '#ffff05' , padding: '20px' , width: '120px' , fontSize: '24px'}}>
        hello
      </div>
    ) : null
  )
}

export default Hello
