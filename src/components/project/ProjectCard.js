import styles from './ProjectCard.module.css'
import { Link } from 'react-router-dom'

import { BsPencil, BsFillTrashFill} from 'react-icons/bs'

function ProjectCard({id, name, cidade, bairro, endereço, handleRemove}) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Bairro:</span> {bairro}
            </p>
            <p>
                <span>Endereço:</span> {endereço}
            </p>
            <div className={styles.project_card_actions}>
            <Link to={`/unidade/${id}`}>
                <BsPencil /> Editar
            </Link>
            <button onClick={remove}>
                <BsFillTrashFill /> Excluir
            </button>
            </div>
        </div>
    )
    
}

export default ProjectCard