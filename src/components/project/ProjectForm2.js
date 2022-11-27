import styles from './ProjectForm.module.css'
import Input from '../form/input'
import SubmitButton from '../form/SubmitButton'
import Datas from '../form/SelectDate'
import Select from '../form/Select'

import {useEffect, useState} from 'react'

function ProjectForm2({handleSubmit, btnText, projectData}) {

    const [unidades, setUnidades] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/unidades", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
            setUnidades(data)
        })
        .catch((err) => console.log(err))

    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(unidades)
    }

    function handleChange(e) {
        setUnidades({ ...unidades, [e.target.name]: e.target.value})
        console.log(unidades)
    }

    function handleSelect(e) {
        setUnidades({ 
            ...unidades, 
            unidades: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text"
                text="Nome do Campeonato"
                name="name campeonato"
                placeholder="Insira o nome da Unidade"
                handleOnChange={handleChange}
            />
            <Select
                name="category_id"
                text="Selecione uma opçao"
                options={unidades}
                handleOnChange={handleSelect}
                value={unidades.select ? unidades.select.id : ''}
            />
            <Datas
                type="text"
                text="Período de Inscriçao"
            />

            <Datas
                type="text"
                text="Período do Campeonato"
            />

            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm2