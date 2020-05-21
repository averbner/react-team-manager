import React from 'react';
import { connect } from 'react-redux';
import cancha from "../cancha.svg";

const Titulares = ({titulares,quitarTitular}) => (
    <section>
        <h2>Headlines</h2>
        <div className="cancha">
            {
                titulares.map(j => (
                    <article className="titular" key={j.id}>
                        <div>
                            <img src={j.picture.medium} alt={j.name.first} />
                            <button onClick={() => quitarTitular(j)}>X</button>
                        </div>
                        <p>{j.name.first}</p>
                    </article>
                ))
            }
            <img src={cancha} alt="stadium"/>
        </div>
    </section>
);

const mapStateToProps = state => ({
    titulares: state.titulares
  })

  const mapsDispatchToProps = dispatch => ({
    quitarTitular(jugador) {
        dispatch({
            type: "QUITAR_TITULAR",
            jugador
        })
    }
});

export default connect(mapStateToProps,mapsDispatchToProps)(Titulares);