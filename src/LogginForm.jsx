import React, { useRef, useState } from 'react'
import { Button } from './ui/Button'

function Boiling({ celsius }, children) {
    console.log('render Boiling')
    //const [isBoiling, setBoiling] = useState(null)
    if (celsius > 90) {
        return <div className='alert alert-danger mt-4'>'ca boue' </div>
    }
    else {
        return <div className='alert alert-info mt-4'>'ca boue pas' </div>
    }
}

export function Essai() {

    const tabs = [{id:1,nom:'Sébastien',prenom:'Philippe'}, 
    {id:2, nom: 'Claire', prenom:'Martin'}, 
    {id:3,nom:'Francois' , prenom: 'Lefort'}, 
    {id:4,nom:'gerard' , prenom: 'gris'}, 
    {id:5,nom:'antoinette' , prenom: 'morein'}]

    const [name,setName] = useState({
        id:0,
        nom:'nom',
        prenom:'prenom'
    })

    function litNomPrenom (id)  {
        let tab= []
        tabs.forEach(element => {         
            if (element.id === parseInt(id)){
                tab.push(element.nom)
                tab.push(element.prenom)
                return tab
            }
        })
        return tab
    }

    const handleChange = event => {
        event.persist()
        const [nom,prenom]= litNomPrenom(event.target.value)
        setName(state => {return {...state,id:event.target.value,nom:nom,prenom:prenom} })
    }

    const handleChangeName = event => {
        event.persist()
        const name = event.target.value
        setName(state => {return {...state,nom:''} })
        setName(state => {return {...state,nom:name}})
    }

    return <div className="container">
        <div className="row align-items-end">
            <div className="col-sm">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmfor="inputGroupSelect01">Options</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={handleChange}>
                        <option>Choose ...</option>
                        {tabs.map((tab, index) => <option key={index} value={tab.id}>{tab.id}</option>)}
                    </select>
                </div>
            </div>
            <div className="col-sm">
                <div className='form-group'>
                    <label htmlFor='nom'>Nom</label>
                    <input type='text' name='username' className='form-control' onChange={handleChangeName} value={name.nom} />
                </div>
            </div>
            <div className="col-sm">
                <div className='form-group'>
                    <label htmlFor='prenom'>Prenom</label>
                    <input type='text' name='username' className='form-control' readOnly value={name.prenom}/>
                </div>
            </div>
        </div>
    </div>


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
        <Boiling celsius={parseFloat(temperature)} />
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
