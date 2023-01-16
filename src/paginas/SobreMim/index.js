import React from 'react';

import PostModelo from 'componentes/PostModelo';
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/sobre_tamara_foto.jfif';
import styles from './SobreMim.module.css';

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, meu nome é Tamara!
      </h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Antônio Evaldo sorrindo"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Oi, tudo bem? Estou feliz de te ver por aqui.
      </p>
      <p className={styles.paragrafo}>
        Minha história com programação começou em 2020.
      </p>
      <p className={styles.paragrafo}>
        Quando eu vi meu primeiro &lt;h1&gt;Hello World&lt;/h1&gt; na tela fiquei encantada.
        E então iniciei os estudos junto ao famoso professor Guanabara.      
        
      </p>
      <p className={styles.paragrafo}>
        Organizava o tempo de estudos enquanto trabalhava em uma escola. Tinha um cargo estável, mas
        eu queria mais.

      </p>
      <p className={styles.paragrafo}>
        Desde então, tem sido aprenas aprendizados atrás de aprendizados. Fiz bootcamp em Front-End na Laboratoria,
        consegui meu primeiro emprego para trabalhar com Angular. Tive grandes aprendizados e sou eternamente grata a todos
        que trilharam comigo em minha caminhada. Agora estou imersiva em React.
      </p>
    </PostModelo>
  )
}
