import { Slider } from '../Slider'
import styles from './main.module.scss'

export const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.main__container}>
                <div className={styles.main__slider}>
                    <h2 className={styles.main__text}>Los mejores restaurantes</h2>
                    <Slider />
                </div>
                <div className={styles.main__list}>
                    <h2 className={styles.main__list_title}>Delivery que satisface los sentidos</h2>
                    <p className={styles.main__list_description}>¿Con Hambre y Nada te Copa? Acá tu Comida Sabrosa, Hoy Puede Tener otro Gusto. PedidosYa, Te Llena el Corazón</p>
                    <div className={styles.main__list_item}>
                        <img className={styles.main__list_svg} src="/assets/location.svg" alt="" />
                        <div className={styles.main__list_cities}>
                            <p className={styles.main__list_cities_text}>Top Ciudades</p>
                            <div className={styles.main__list_cities_row}>
                                <p className={styles.main__list_cities_item}>La Plata,</p>
                                <p className={styles.main__list_cities_item}>Rosario,</p>
                                <p className={styles.main__list_cities_item}>San Isidro,</p>
                                <p className={styles.main__list_cities_item}>Cordoba,</p>
                                <p className={styles.main__list_cities_item}>Buenos Aires,</p>
                                <p className={styles.main__list_cities_item}>Vicente López,</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.main__list_item}>
                        <img className={styles.main__list_svg} src="/assets/bagstar.svg" alt="" />
                        <div className={styles.main__list_cities}>
                            <p className={styles.main__list_cities_text}>Top Ciudades</p>
                            <div className={styles.main__list_cities_row}>
                                <p className={styles.main__list_cities_item}>La Plata,</p>
                                <p className={styles.main__list_cities_item}>Rosario,</p>
                                <p className={styles.main__list_cities_item}>San Isidro,</p>
                                <p className={styles.main__list_cities_item}>Cordoba,</p>
                                <p className={styles.main__list_cities_item}>Buenos Aires,</p>
                                <p className={styles.main__list_cities_item}>Vicente López,</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.main__list_item}>
                        <img className={styles.main__list_svg} src="/assets/bag.svg" alt="" />
                        <div className={styles.main__list_cities}>
                            <p className={styles.main__list_cities_text}>Top Ciudades</p>
                            <div className={styles.main__list_cities_row}>
                                <p className={styles.main__list_cities_item}>La Plata,</p>
                                <p className={styles.main__list_cities_item}>Rosario,</p>
                                <p className={styles.main__list_cities_item}>San Isidro,</p>
                                <p className={styles.main__list_cities_item}>Cordoba,</p>
                                <p className={styles.main__list_cities_item}>Buenos Aires,</p>
                                <p className={styles.main__list_cities_item}>Vicente López,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
