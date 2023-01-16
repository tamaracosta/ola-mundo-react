import React from 'react';

import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/foto_tamara_capa.png';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, Mundo!
        </h1>

        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Tamara Costa, Desenvolvedora de Software.
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt="circulo colorido"
        />

        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do Antônio Evaldo sorrindo"
        />
      </div>
    </div>
  )
}
