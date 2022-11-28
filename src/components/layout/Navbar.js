import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logo.png'


function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
            <Link to="/">
                <img src={logo} alt="ChuteSal" />
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/newchampionship">Novo Campeonato</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/newunity">Nova Unidade</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/championships">Campeonatos</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/unidades">Unidades</Link>
                </li>
                
            </ul>
            </Container>
        </nav>
    )
}

export default Navbar