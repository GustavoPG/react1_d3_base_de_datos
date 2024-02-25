import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = ({ addPartner, showAlert }) => {
  const [inputs, setInputs] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  });

  // const inputsHandler = (e) => {
  //   const { id, value } = e.target;
  //   setInputs({ ...inputs, [id]: value.trim() });
  // };

  function inputsHandler(e) {
    if (e.target.id === 'nombre') {
      setInputs({ ...inputs, nombre: e.target.value });
    }

    if (e.target.id === 'correo') {
      setInputs({ ...inputs, correo: e.target.value });
    }

    if (e.target.id === 'edad') {
      setInputs({ ...inputs, edad: e.target.value });
    }
    if (e.target.id === 'cargo') {
      setInputs({ ...inputs, cargo: e.target.value });
    }
    if (e.target.id === 'telefono') {
      setInputs({ ...inputs, telefono: e.target.value });
    }
  }

  const validateForm = (e) => {
    e.preventDefault();
    if (!inputs.nombre || !inputs.correo || !inputs.edad || !inputs.cargo || !inputs.telefono) {
      showAlert({
        alertText: '¡Complete todos los campos!',
        alertType: 'danger',
        alertState: true
      });
      return;
    }

    if (!validarEmail(inputs.correo)) {
      showAlert({
        alertText: '¡Ingrese correo válido!',
        alertType: 'danger',
        alertState: true
      });
      return;
    }

    addPartner(inputs)

    // Mensaje Registro exitoso
    showAlert({
      alertText: '¡Ingresado exitosamente!',
      alertType: 'success',
      alertState: true
    });

    // Limpiar los campos
    setInputs({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: ''
    });



  };

  const validarEmail = (email) => {
    // Expresión regular para validar un correo electrónico
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }



  return (
    <>
      <Form onSubmit={validateForm}>
        <Form.Group className="mb-3">
          <Form.Control 
          type="text" 
          placeholder="Ingrese Nombre" 
          value={inputs.nombre} 
          id='nombre' 
          maxLength={30}
          onChange={inputsHandler} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control 
          type="email" 
          placeholder="Ingrese Correo" 
          value={inputs.correo} 
          id='correo' 
          maxLength={30}
          onChange={inputsHandler} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control 
          type="number" 
          placeholder="Ingrese Edad" 
          value={inputs.edad} 
          min={18}
          max={99}
          id='edad' 
          onChange={inputsHandler} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control 
          type="text" 
          placeholder="Ingrese Cargo" 
          value={inputs.cargo} 
          id='cargo' 
          maxLength={40}
          onChange={inputsHandler} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control 
          type="number" 
          placeholder="Ingrese Teléfono" 
          value={inputs.telefono} 
          id='telefono' 
          maxLength={12}
          onChange={inputsHandler} />
        </Form.Group>

        <Form.Group className="mb-3">
        <Button 
        variant="primary mb-3 my-button" 
        className='btn' 
        type="submit" >
          Agregar Colaborador
        </Button>
        </Form.Group>
        
      </Form>
    </>
  );
}

export default Formulario;