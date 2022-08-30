import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__links}>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>Quienes somos</li>
            <li className={styles.footer__item}>Terminos y Condiciones</li>
            <li className={styles.footer__item}>Privacidad</li>
            <li className={styles.footer__item}>Se parte de PedidosYa</li>
            <li className={styles.footer__item}>Blog</li>
          </ul>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>Top comidas</li>
            <li className={styles.footer__item}>Top cadenas</li>
            <li className={styles.footer__item}>Top ciudades</li>
          </ul>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>Quienes somos</li>
            <li className={styles.footer__item}>Terminos y Condiciones</li>
            <li className={styles.footer__item}>Privacidad</li>
            <li className={styles.footer__item}>Se parte de PedidosYa</li>
            <li className={styles.footer__item}>Blog</li>
          </ul>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>Quienes somos</li>
            <li className={styles.footer__item}>Terminos y Condiciones</li>
            <li className={styles.footer__item}>Privacidad</li>
            <li className={styles.footer__item}>Se parte de PedidosYa</li>
            <li className={styles.footer__item}>Blog</li>
          </ul>
        </div>
        <hr className={styles.footer__divider} />
        <div className={styles.footer__repentance}>
          <div className={styles.footer__repentance_text}>
            ¿Te arrepentiste de una compra?
            <a href="/customer-service" className={styles.footer__repentance_text_link}>
              Botón de arrepentimiento
            </a>
          </div>
          <div className={styles.footer__repentance_text}>
            Defensa de las y los Consumidores. Para reclamos
            <a href="/customer-service" className={styles.footer__repentance_text_link}>
              ingresá acá
            </a>
          </div>
          <div className={styles.footer__repentance_text}>
            Ley Nº 24.240 de Defensa del Consumidor.
            <a href="/customer-service" className={styles.footer__repentance_text_link}>
              Ver contratos de adhesión
            </a>
          </div>
        </div>
        <hr className={styles.footer__divider} />
        <div className={styles.footer__legal_info}>
          <div>
            <div className={styles.footer__legal_info_text}>
              PEDIDOSYA S.A. CUIT: 30-71198576-6 | Av. del Libertador 7208, piso 20, Ciudad Autónoma de Buenos Aires |
              <a href='#' className={styles.footer__legal_info_link}>contacto@pedidosya.com.ar</a>
            </div>
            <div className={styles.footer__legal_info_text}>PAGOS YA S.A. es un proveedor de servicios de pago y no está autorizado por el BCRA para operar como entidad financiera.</div>
            <span className={styles.footer__legal_info_text}>PedidosYa © 2010-2022</span>
          </div>
          <div>
            <img src="https://live.pystatic.com/webassets/AppscoreWeb/footer/1.0.18/images/DataFiscalAR.png" alt="" />
          </div>
        </div>
      </div>
    </footer >
  )
}
