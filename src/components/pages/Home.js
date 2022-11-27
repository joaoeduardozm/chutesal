import styles from  './Home.module.css'
import fute from '../../img/fute.png'
import { Link } from 'react-router-dom'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>ChuteSal</span></h1>
            <p>Gerencie seus campeonatos</p>
            <LinkButton to="./newchampionship" text="Criar Campeonato" />
            <LinkButton to="./newunity" text="Cadastrar Unidade" />
            <img src={fute} alt="ChuteSal" />
        </section>
    )
}

export default Home