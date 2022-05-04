import styles from '../styles/Marcador.module.css'
const Marcador = ({ganadas=0, perdidas=0}) => {
    return(
        <div className={styles.general}>
            <h4>Marcador</h4>
            <span className={styles.win}>{ganadas}</span>
            
            <span className={styles.wrong}>{perdidas}</span>
        </div>
    )
}

export default Marcador