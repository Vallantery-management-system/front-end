import React from 'react'

export const Header = (props) => {
   
    return (
        <div style={{
            width: '100%',
            height: '100px',
            backgroundColor: 'hsl(189, 74%, 66%)',
            ...(props.style ? props.style : {}),
        }}>
            Header
            {props.title}
        </div>
    )
}