import { useState } from 'react'
import Mensaje from './Mensaje'
import cerrarBtn from '../img/cerrar.svg'

function Modal({ setModal, animarModal, setAnimarModal, guardarGasto }) {

  const [mensaje, setMensaje] = useState('')

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')

  const handleOcultarModal = () => {
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if ([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios')

      setTimeout(() => {
        setMensaje('')
      }, 3000)
      return
    } /* else if (cantidad < 0) {
      setMensaje('La cantidad debe ser mayor a 0')

      setTimeout(() => {
        setMensaje('')
      }, 3000)
      return
    } */
    guardarGasto({ nombre, cantidad, categoria })
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={cerrarBtn}
          alt="cerrar modal"
          onClick={handleOcultarModal}
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario  ${animarModal ? 'animar' : 'cerrar'}`}
      >
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
        <div className='campo'>
          <label htmlFor="nombre">Nombre</label>

          <input
            type="text"
            name="name"
            id="name"
            placeholder='Añade el nombre del gasto'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className='campo'>
          <label htmlFor="cantidad">Cantidad</label>

          <input
            type="number"
            name="cantidad"
            id="cantidad"
            placeholder='Añade la cantidad del gasto'
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className='campo'>
          <label htmlFor="categoria">Categoría</label>

          <select
            name="categoria"
            id="categoria"
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input
          type="submit"
          value='Añadir gasto'
        />
      </form>
    </div>
  )
}

export default Modal