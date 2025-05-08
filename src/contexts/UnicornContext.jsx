import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const UnicornContext = createContext(null);

const API_BASE_URL = 'https://crudcrud.com/api/00823b00cf0b4e5090785bda3edb80c7/unicorns';

export const UnicornProvider = ({ children }) => {
  const [unicorns, setUnicorns] = useState([]);

  const getUnicorns = useCallback(async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      setUnicorns(response.data);
    } catch (error) {
      console.error('Error fetching unicorns:', error);
    }
  }, []);

  const createUnicorn = async (unicorn) => {
    try {
      const response = await axios.post(API_BASE_URL, unicorn);
      setUnicorns(prevUnicorns => [...prevUnicorns, response.data]);
      return response.data;
    } catch (error) {
      console.error('Error creating unicorn:', error);
    }
  };

  const editUnicorn = async (unicorn) => {
    try {
      const { _id, ...unicornData } = unicorn;

      if (!_id) {
        console.error('Unicorn ID is missing');
        return;
      }

      console.log('Editing unicorn:', unicorn);
      console.log('Editing unicorn with ID:', _id);
      console.log('Data to update:', unicornData);

      const response = await axios.put(`${API_BASE_URL}/${_id}`, unicornData);

      // Combinar manualmente los datos si la respuesta no incluye todos los campos
      const updatedUnicorn = { _id, ...unicornData, ...response.data };

      setUnicorns(prevUnicorns =>
        prevUnicorns.map(u => (u._id === _id ? updatedUnicorn : u))
      );
    } catch (error) {
      console.error('Error editing unicorn:', error);
    }
  };

  const deleteUnicorn = async (id) => {
    try {
      await axios.delete(API_BASE_URL + '/' + id);
      setUnicorns(prevUnicorns => prevUnicorns.filter(u => u._id !== id));
    } catch (error) {
      console.error('Error deleting unicorn:', error);
    }
  };

  const handleSubmit = (values, actions) => {
    if (unicornToEdit) {
      // Verificar que unicornToEdit tenga un _id válido
      if (!unicornToEdit._id) {
        console.error('Unicorn to edit does not have a valid ID');
        return;
      }

      // Combinar el _id con los valores del formulario
      editUnicorn({ _id: unicornToEdit._id, ...values });
    } else {
      createUnicorn(values);
    }
    navigate('/unicornios');
  };

  useEffect(() => {
    getUnicorns();
  }, [getUnicorns]);

  const value = {
    unicorns,
    setUnicorns,
    getUnicorns,
    createUnicorn,
    editUnicorn,
    deleteUnicorn,
    handleSubmit,
  };

  return (
    <UnicornContext.Provider value={value}>
      {children}
    </UnicornContext.Provider>
  );
};

export default UnicornProvider;
