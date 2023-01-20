import Gasto from "./Gasto"

function ListadosGastos({ gastos }) {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? 'Gastos' : 'Aún no hay gastos'}</h2>

      {gastos.map(gasto => (
        <Gasto 
        key={gasto.id}
        gasto={gasto}
        />
      ))}
    </div>
  )
}

export default ListadosGastos