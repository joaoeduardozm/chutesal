import styles from './ProjectForm.module.css'
import Input from '../form/input'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input 
                type="text"
                text="Nome da Unidade"
                name="name"
                placeholder="Insira o nome da Unidade"
            />
            <Input 
                type="text"
                text="Cidade"
                name="cidade"
                placeholder="Insira o nome da cidade"
            />
            <Input 
                type="text"
                text="bairro"
                name="bairro"
                placeholder="Insira o nome do bairro"
            />
            <Input 
                type="text"
                text="Endereço"
                name="endereço"
                placeholder="Insira o endereço"
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm