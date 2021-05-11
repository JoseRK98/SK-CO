import React from 'react'
import PropTypes from 'prop-types' 

const Contenido = ({value}) => {
    return(
        <div>
            <table>
                <thead className="encabezado">
                <tr>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio unitario</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tr>
                    <td>Play Station 4</td>
                    <td>1</td>
                    <td>$4,500</td>
                    <td>$4,500</td>
                </tr>
                <tr>
                    <td>FIFA 21</td>
                    <td>1</td>
                    <td>$1,000</td>
                    <td>$1,000</td>
                </tr>
                <tr>
                    <td>Control ps4</td>
                    <td>2</td>
                    <td>$1,400</td>
                    <td>$2,800</td>
                </tr>
                <thead className="total">
                <tr>
                    <th>Total</th>
                    <th></th>
                    <th></th>
                    <th>$8,300</th>
                </tr>
                </thead>
            </table>
            <span>{value}</span>
        </div>
    )
}

Contenido.defaultProps = {
    value : "0"
}

Contenido.proptotype = {
    vale : PropTypes.string.isRequired
}

export default Contenido