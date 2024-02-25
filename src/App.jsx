import React, { useState, useEffect } from 'react';
import { partners } from "./partners";
import Listado from './components/Listado'
import Formulario from './components/Formulario';
import Alert from './components/Alert';
import Buscador from './components/Buscador';
import './App.css';

const App = () => {
  const [partnersList, setPartnersList] = useState([]);
  const [originalPartnersList, setOriginalPartnersList] = useState([]);
  const [search, setSearch] = useState('');
  const [alert, setAlert] = useState({ alertText: '', alertType: '', alertState: false });

  const showAlert = (newAlert) => { setAlert(newAlert) };

  useEffect(() => {
    setPartnersList(partners);
    setOriginalPartnersList(partners);
  }, []) //SOLO PRIMERA CARGA

  // AGREGAR COLABORADOR
  const handlePartner = (newPartner) => {
    let partnersUpdated = []
    //console.log(partnersList.length)
    const maxId = partnersList.reduce((max, partner) => {
      return (partner.id > max) ? partner.id : max;
    }, 0);
    const objNew = {
      id: Number(maxId) + 1, nombre: newPartner.nombre.trim(), correo: newPartner.correo.trim(), edad: newPartner.edad.trim(),
      cargo: newPartner.cargo.trim(), telefono: newPartner.telefono.trim()
    }
    partnersUpdated = ([...partnersList, objNew]);
    setPartnersList(partnersUpdated);
    setOriginalPartnersList(partnersUpdated);
  };

  // FILTRAR COLABORADOR
  useEffect(() => {
    setPartnersList(originalPartnersList);
    const toSearch = ([...originalPartnersList]);
    if (search.trim() !== '') {
      const filteredPartners = toSearch.filter(partner =>
        partner.id.toString().includes(search) ||
        partner.nombre.toLowerCase().includes(search) ||
        partner.correo.toLowerCase().includes(search) ||
        partner.edad.toString().toLowerCase().includes(search) ||
        partner.cargo.toLowerCase().includes(search) ||
        partner.telefono.toLowerCase().includes(search)
      );  
      setPartnersList(filteredPartners);
    } else {
      setPartnersList(originalPartnersList);
    }
  }, [search, originalPartnersList]);

  // ELIMINAR COLABORADOR SEGÚN ID
  const deletePartner = (id) => {
    setPartnersList(originalPartnersList);
    const toSearch = ([...originalPartnersList]);

    const filteredPartners = toSearch.filter(partner => partner.id !== id);
    setPartnersList(filteredPartners);
    setOriginalPartnersList(filteredPartners);
  }

  return (
    <>
      <div className='container col-md-12 col-sm-6 my-5 red'>
        <div className="row">
          <div className="col">
            <h2 className='text-center'>Lista de Colaboradores</h2>
          </div>
        </div>

        <div className='row'>
          <div className='col col-auto my-form'>
            <Buscador search={setSearch} />
            <Listado data={partnersList} onDelete={deletePartner} />
          </div>

          <div className='col col-auto'>
            <div className="row">
              <div className="col">
                <h2 className='text-center'>Agregar Colaborador</h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Formulario addPartner={handlePartner} showAlert={showAlert} alertText={alert.alertText} alertType={alert.alertType} alertState={alert.alertState} />
                <Alert alertText={alert.alertText} alertType={alert.alertType} alertState={alert.alertState} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
