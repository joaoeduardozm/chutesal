import styles from './ProjectForm.module.css'
import Input from '../form/input'
import SubmitButton from '../form/SubmitButton'

import {useEffect, useState} from 'react'


function ProjectForm({handleSubmit, btnText, projectData}) {

    const [unidades, setUnidades] = useState(projectData || {})

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
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(unidades)
    }

    function handleChange(e) {
        setUnidades({ ...unidades, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text"
                text="Nome da Unidade"
                name="name"
                placeholder="Insira o nome da Unidade"
                handleOnChange={handleChange}
                value={unidades.name }
            />
            <Input 
                type="text"
                text="Cidade"
                name="cidade"
                placeholder="Insira o nome da cidade"
                handleOnChange={handleChange}
                value={unidades.cidade }
            />
            <Input 
                type="text"
                text="bairro"
                name="bairro"
                placeholder="Insira o nome do bairro"
                handleOnChange={handleChange}
                value={unidades.bairro }
            />
            <Input 
                type="text"
                text="Endereço"
                name="endereço"
                placeholder="Insira o endereço"
                handleOnChange={handleChange}
                value={unidades.endereço ? unidades.endereço : ''}
            />
            <SubmitButton 
                text={btnText}/>
        </form>
    )
}


export default ProjectForm