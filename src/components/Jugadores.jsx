import React, { useEffect, createRef } from "react"
import { connect } from "react-redux";

const Jugadores = ({jugadores, agregarTitular, agregarSuplente, getTeam}) => {

  const gridJugadores = createRef()

  useEffect(() => {
    setScrollContainer()
    document.addEventListener('click', setScrollContainer)
    // eslint-disable-next-line
  }, []) 
  
  const setScrollContainer = (desktop = true) => {
    let container = gridJugadores.current
    if (container) {
      const generatedGrid = () => {
        let items = container.getElementsByClassName('jugador')
        // let itemsLength = items.length
        let itemsLength = 18;
        let bp = window.matchMedia("(min-width: 640px)").matches ? window.matchMedia("(min-width: 1024px)").matches ? 4 : 2 : 1

        const getWidth = () => {
          let n = bp + (itemsLength > bp ? 0.3 : 0)
          return (itemsLength / n) * 100
        }
        return `
                display: grid;
                grid-template-columns: repeat(${itemsLength}, 225px);
                grid-gap: 1rem;
                width : ${getWidth()}%;
              `
      }
      let styles = !desktop && window.matchMedia("(min-width: 1024px)").matches ? `display: grid; grid-row-gap: 1rem;` : generatedGrid()
      container.setAttribute('style', styles)
    }
  }

  return (
      <section>
      
      <h2>Players</h2>
      <button onClick={() => getTeam()} className="get-team">GET TEAM</button>
      <div className="contenedor-jugadores">
        <div ref={gridJugadores} onClick={() => setScrollContainer.bind(this)}>
          {
            jugadores.map(j => (
              <article className="jugador" key={j.login.uuid}>
                <img src={j.picture.medium} alt={j.name.first} />
                <h3>{j.name.first}</h3>
                <div>
                  <button onClick={() => agregarTitular(j)}>Initial</button>
                  <button onClick={() => agregarSuplente(j)}>Subst</button>
                </div>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  )
}


const mapStateToProps = state => ({
  jugadores: state.jugadores
})

const mapDispatchToProps = dispatch => ({
  agregarTitular(jugador) {
    dispatch({
      type: "AGREGAR_TITULAR",
      jugador
    })
  },
  agregarSuplente(jugador) {
    dispatch({
      type: "AGREGAR_SUPLENTE",
      jugador
    })
  },

  getTeam() {
    fetch("https://randomuser.me/api/?nat=us,gb&results=18")
        .then(res => res.json())
        .then(res => {
          dispatch({
            type: "GET_TEAM",
            res : res.results
          })
      })
  }
  });
    
export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)