import React, { useRef, useState } from 'react'
import { Button } from './ui/Button'

function Boiling({ celsius }, children) {
    console.log('render Boiling')
    //const [isBoiling, setBoiling] = useState(null)
    if (celsius>90) {
        return <div className='alert alert-danger mt-4'>'ca boue' </div>
    }
    else{
        return <div className='alert alert-info mt-4'>'ca boue pas' </div>
    }


    
}

export class Essai extends React.Component  {
    constructor(props){
        super(props)
        this.state = {
            essai: 1,
            //fonction: console.log('essai')
        }
    }

    render () {
        const {fonction} = this.state
        return <div>
            {fonction}
            </div>
        
    }
}

export function Calculator() {
    const [temperature, setTemperature] = useState('')

    const handleOnChange = (e) => {
        e.preventDefault()
        setTemperature(e.target.value)
        
    }

    return <div className='form-goup container'>
        <label htmlFor="celsius">Température en Celsius</label>
        <input type="text" name="celsius" id="celsius" className='form-control'
            value={temperature} onChange={handleOnChange}
        />
        <Boiling celsius={parseFloat( temperature)} />
    </div>
}
export function LogginForm() {
    const [isLoading, setLoading] = useState(false)
    const onHandleSubmit = async function (e) {
        e.preventDefault()
        setLoading(true)
        const data = new FormData(e.target)
        const body = JSON.stringify(Object.fromEntries(data))
        const response = await fetch('http://localhost:3001/', {
            body,
            method: 'post',
            headers: {
                Accept: 'application/json'
            }
        })
        if (response.ok) {
            setLoading(false)
            console.log('reponse ok')
        }
        else {
            console.log('erreur')
        }
    }

    const form = useRef(null)

    return <form className='container' ref={form} onSubmit={onHandleSubmit}>

        <div className='form-group'>
            <label htmlFor='username'>username</label>
            <input type='text' name='username' className='form-control' />
        </div>
        <div className='form-group'>
            <label htmlFor='password'>password</label>
            <input type='password' name='password' autoComplete="on"
                className='form-control' />
        </div>
        <Button type='submit' loading={isLoading}>Se connecter</Button>

    </form>

}
