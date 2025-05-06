import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { UnicornContext } from '../contexts/UnicornContext';
import { useNavigate, useParams } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nombre requerido'),
  age: Yup.number().required('Edad requerida').positive('Debe ser positiva'),
  color: Yup.string(),
  power: Yup.string().required('Poder requerido'),
});

const UnicornForm = () => {
  const { createUnicorn, editUnicorn, unicorns } = useContext(UnicornContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const unicornToEdit = id ? unicorns.find((unicorn) => unicorn._id === id) : null;

  const initialValues = {
    name: unicornToEdit?.name || '',
    age: unicornToEdit?.age || '',
    color: unicornToEdit?.color || '',
    power: unicornToEdit?.power || '',
  };

  const handleSubmit = (values, actions) => {
    if (unicornToEdit) {
      editUnicorn(unicornToEdit._id, values);
    } else {
      createUnicorn(values);
    }
    navigate('/unicornios');
  };

  return (
    <div className="p-5 flex justify-content-center">
      <Card title={unicornToEdit ? 'Editar Unicornio' : 'Crear Unicornio'} className="w-full md:w-6 shadow-4">
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {() => (
            <Form className="p-fluid">
              <div className="field mb-3">
                <label htmlFor="name">Nombre</label>
                <Field name="name" as={InputText} className="p-inputtext" />
                <small className="p-error">
                  <ErrorMessage name="name" />
                </small>
              </div>

              <div className="field mb-3">
                <label htmlFor="age">Edad</label>
                <Field name="age" as={InputText} type="number" className="p-inputtext" />
                <small className="p-error">
                  <ErrorMessage name="age" />
                </small>
              </div>

              <div className="field mb-3">
                <label htmlFor="color">Color</label>
                <Field name="color" as={InputText} className="p-inputtext" />
              </div>

              <div className="field mb-4">
                <label htmlFor="power">Poder</label>
                <Field name="power" as={InputText} className="p-inputtext" />
                <small className="p-error">
                  <ErrorMessage name="power" />
                </small>
              </div>

              <div className="flex justify-content-end gap-2">
                <Button
                  type="submit"
                  label={unicornToEdit ? 'Actualizar' : 'Crear'}
                  icon={unicornToEdit ? 'pi pi-refresh' : 'pi pi-check'}
                  className="p-button-success"
                />
                <Button
                  label="Cancelar"
                  icon="pi pi-times"
                  className="p-button-secondary"
                  onClick={() => navigate('/unicornios')}
                  type="button"
                />
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default UnicornForm;
