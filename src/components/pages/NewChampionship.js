import ProjectForm from "../project/ProjectForm2"
import styles from "./NewChampionship.module.css"

function NewChampionship() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Campeonato</h1>
            <p>Crie e gerencie seu campeonato</p>
            <ProjectForm btnText="Criar Campeonato"/>
        </div>
    )
}

export default NewChampionship