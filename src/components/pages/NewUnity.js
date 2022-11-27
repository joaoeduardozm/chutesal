import ProjectForm from '../project/ProjectForm'
import styles from './NewUnity.module.css'

function NewUnity() {
    return (
        <div className={styles.newproject_container}>
            <h1>Cadastrar Unidade</h1>
            <p>Cadastre sua unidade para adiciona-las ao seu campeonato</p>
            <ProjectForm btnText="Cadastrar Unidade"/>
        </div>
    )
}

export default NewUnity