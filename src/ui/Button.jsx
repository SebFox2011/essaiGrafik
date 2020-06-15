import React from 'react'

export function Button  ({loading,...buttonProps})  {


    if (loading)
    {
        buttonProps.children = <>
            <span className="spinner-grow spinner-grow-sm" 
            role="status" aria-hidden="true"/> &nbsp;
            chargement ...
        </>
        buttonProps.disabled = true
    }

    return <button className ='btn btn-primary' {...buttonProps}></button>

}