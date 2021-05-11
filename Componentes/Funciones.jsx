import React from 'react'
import PropTypes from 'prop-types'
import Button from './Botones/Botones'

const funciones = ["Carrito","Agregar al carrito","Eliminar del carrito","Finalizar compra","Cancelar compra","Registrar producto","Eliminar producto","Inventario"]

const renderButtons = onClickNumber => {
    const renderButton = funcion => (
        <Button key={funcion} text={funcion.toString()} clickHandler={onClickNumber}></Button>
    )
    return funciones.map(renderButton)
}

const Funciones = ({onClickNumber}) => (
    <section className="numbers">
        {renderButtons(onClickNumber)}
    </section>
)

Funciones.propTypes = {
    onClickNumber : PropTypes.func.isRequired
}

export default Funciones