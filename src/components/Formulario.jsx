import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="email" placeholder="Ingrese Nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCorreo">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="text" placeholder="Ingrese Correo" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEdad">
        <Form.Label>Edad</Form.Label>
        <Form.Control type="text" placeholder="Ingrese Edad" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCargo">
        <Form.Label>Cargo</Form.Label>
        <Form.Control type="text" placeholder="Ingrese Cargo" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicTelefono">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="text" placeholder="Ingrese Teléfono" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Agregar Colaborador
      </Button>
    </Form>
  );
}

export default Formulario;