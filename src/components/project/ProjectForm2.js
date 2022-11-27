import styles from './ProjectForm.module.css'
import Input from '../form/input'
import SubmitButton from '../form/SubmitButton'
import Datas from '../form/SelectDate'

function ProjectForm2({btnText}) {
    return (
        <form className={styles.form}>
            <Input 
                type="text"
                text="Nome do Campeonato"
                name="name campeonato"
                placeholder="Insira o nome da Unidade"
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