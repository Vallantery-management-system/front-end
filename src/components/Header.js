import React from 'react'



export const Header = (props) => {
   
    return (
        <div style={{
            width: '100%',
            height: '100px',
            backgroundColor: '#000',
            ...(props.style ? props.style : {}),
        }}>
            Header
            {props.title}
        </div>
    )
}


