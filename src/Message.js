import React from 'react'

const Message = (props) => {
  return (
      <div>{props.service}
          <p>{props.message}</p>
      </div>
     
  )
}

export default Message