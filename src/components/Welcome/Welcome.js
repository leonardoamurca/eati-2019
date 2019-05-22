import React, { Component } from 'react';
import classes from './Welcome.module.css';

class Welcome extends Component {
  render () {
    return (
      <div className={classes.Welcome}>
        <p>
        Bem-vindas todas e todos ao IV Encontro Anual de 
        Tecnologia da Informação e I Encontro Anual de 
        Engenharia do IFMG Sabará!
        </p>
        <p>
        Neste ano, nossa programação está repleta de atividades, 
        uma mais interessante que a outra! Na sexta-feira pela manhã, 
        teremos a tradicional palestra de abertura do EATI, e terminamos 
        o dia com a mesa redonda do EAE. Na tarde de sexta e na manhã de 
        sábado, teremos diversos minicursos, workshops, oficinas e outras 
        atividades para a galera botar a mão na massa :). E, no sábado à 
        tarde, fechamos o evento com o super concurso de talentos Sabará 
        Got Talent! Venha fazer parte dessa festa! Faça já sua inscrição :).
        </p>
        <p>
        Confira a programação e se inscreva nas atividades dos eventos. 
        Atenção: algumas atividades possuem limites de vaga, por isso, 
        não deixe para depois. Inscreva-se já!
        </p>
      </div>
    );
  }
}

export default Welcome;