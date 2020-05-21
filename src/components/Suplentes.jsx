import React from 'react';
import { connect } from 'react-redux';

const Suplentes = ({suplentes,quitarSuplente}) => (
    <section>
        <h2>Substitutes</h2>
        <div className="cancha">
            {
                suplentes.map(j => (
                    <article className="suplente" key={j.id}>
                        <div>
                            <img src={j.picture.medium} alt={j.name.first} />
                            <button onClick={() => quitarSuplente(j)}>X</button>
                        </div>
                        <p>{j.name.first}</p>
                    </article>
                ))
            }
        </div>
    </section>
);

const mapStateToProps = state => ({
    suplentes: state.suplentes
  })

  const mapsDispatchToProps = dispatch => ({
    quitarSuplente(jugador) {
        dispatch({
            type: "QUITAR_SUPLENTE",
            jugador
        })
    }
});

export default connect(mapStateToProps,mapsDispatchToProps)(Suplentes);