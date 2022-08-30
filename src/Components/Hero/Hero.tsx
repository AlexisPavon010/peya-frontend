import styles from './hero.module.scss'

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__container}>
        <h1 className={styles.hero__title}>¡Pedí lo que quieras!</h1>
        <h2 className={styles.hero__subtitle}>Restaurantes, mercados, farmacias, kioscos y mucho más.</h2>
        <div className={styles.hero__input}>
          <div className={styles.hero__input_container}>
            <svg className={styles.hero__input_icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2b1a46" viewBox="0 0 16 16"><path d="M7.622.5c2.45.104 4.29 1.179 5.428 3.25.518.944.723 1.989.627 3.105-.09 1.045-.465 2.004-1.109 2.905l-.182.245L8.3 15.3c-.373.484-.926.512-1.324.092l-.082-.096-4.22-5.477a5.501 5.501 0 0 1-1.138-2.8c-.187-1.773.356-3.34 1.599-4.636C4.113 1.363 5.34.756 6.788.555L6.985.53l.251-.015L7.622.5zm-.036 1-.452.023-.129.012-.359.056c-1.105.205-2.033.696-2.79 1.484-1.04 1.085-1.481 2.36-1.326 3.839.078.74.336 1.429.768 2.061l.17.235 4.13 5.361 3.998-5.18c.642-.826 1.004-1.684 1.085-2.622.08-.924-.087-1.771-.507-2.537-.922-1.68-2.353-2.564-4.322-2.716l-.266-.017zM7.57 3.7l.17.004c1.402.087 2.504 1.223 2.504 2.621a2.636 2.636 0 0 1-2.667 2.681c-1.478 0-2.668-1.181-2.67-2.634a2.681 2.681 0 0 1 2.495-2.668L7.57 3.7zm-.002 1-.142.005a1.68 1.68 0 0 0-1.518 1.667c0 .898.742 1.634 1.67 1.634a1.64 1.64 0 0 0 1.666-1.672c0-.859-.665-1.557-1.53-1.629L7.568 4.7z"></path></svg>
            <input className={styles.hero__input} type="text" placeholder='Ingresar dirección o punto de referencia' />
          </div>
        </div>
      </div>
    </div>
  )
}
