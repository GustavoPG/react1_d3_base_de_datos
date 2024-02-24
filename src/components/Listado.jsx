import React from 'react';
import Table from 'react-bootstrap/Table';

const Listado = ({ data, onDelete }) => {
    const handleClick = (id) => {
        onDelete(id);
    }
    return (

        <Table striped bordered hover className='text-center'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Teléfono</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {data.map((partner) => (
                    <tr key={partner.telefono}>
                        <td>{partner.id}</td>
                        <td>{partner.nombre}</td>
                        <td>{partner.correo}</td>
                        <td>{partner.edad}</td>
                        <td>{partner.cargo}</td>
                        <td>{partner.telefono}</td>
                        <td>
                            <i
                                className="lni lni-eraser my-icon"
                                onClick={() => handleClick(partner.id)}
                            ></i>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default Listado;
