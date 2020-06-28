// eslint-disable-next-line
import React, { useState } from 'react'

export function Essai() {
    const tabs = [{ id: 1, nom: 'Sébastien', prenom: 'Philippe' },
    { id: 2, nom: 'Claire', prenom: 'Martin', adresse: 'adresse1' },
    { id: 3, nom: 'Francois', prenom: 'Lefort', adresse: 'adresse2' },
    { id: 4, nom: 'gerard', prenom: 'gris', adresse: 'adresse3' },
    { id: 5, nom: 'antoinette', prenom: 'morein', adresse: 'adresse4' }]

    const [idTab, setIdTab] = useState(0)

    const handleIdTab = (id) => {
        setIdTab(id)
        console.log(id)
    }

    return <div className="container">
        <Nom tab={tabs} onIdChange={handleIdTab} />
        <Adresse adress={tabs[idTab].adresse}/>
    </div>
}

function Nom(props) {
    const tabs = props.tab

    const [name, setName] = useState({
        id: 0,
        nom: 'nom',
        prenom: 'prenom'
    })

    function litNomPrenom(id) {
        let tab = []
        tabs.forEach(element => {
            if (element.id === parseInt(id)) {
                tab.push(element.nom)
                tab.push(element.prenom)
                return tab
            }
        })
        return tab
    }

    const handleChange = event => {
        event.persist()
        const id =event.target.value
        props.onIdChange(id) 
        const [nom, prenom] = litNomPrenom(id)
        setName(state => { return { ...state, id: id, nom: nom, prenom: prenom } })
        
    }

    const handleChangeName = event => {
        event.persist()
        const name = event.target.value
        setName(state => { return { ...state, nom: '' } })
        setName(state => { return { ...state, nom: name } })
    }
    return <div className="row align-items-end">
        <div className="col-sm">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmfor="inputGroupSelect01">Options</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01" onChange={handleChange}>
                <option>Choose ...</option>
                    {tabs && tabs.map((tab, index) => <option key={index} value={tab.id}>{tab.id}</option>)}
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
                <input type='text' name='username' className='form-control' readOnly value={name.prenom} />
            </div>
        </div>
    </div>

}

function Adresse(props) {
    const {adress} = props

    return <div className='row'>
        <div className="col-sm">
            <div className='form-group'>
                <label htmlFor='adresse'>Adresse</label>
                <input type='text' name='adress' className='form-control' readOnly value={adress || 'adresse'}></input>
            </div>
        </div>
    </div>
}