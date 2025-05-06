import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const HomeView = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-content-center align-items-center h-screen p-4 bg-indigo-50">
      <Card className="text-center shadow-4 p-6 w-full md:w-6">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">
          🦄 ¡Bienvenido a la aplicación Unicorn CRUD!
        </h1>
        <p className="text-xl text-gray-600 mb-5">
          Administra tus unicornios mágicos con estilo y facilidad ✨
        </p>
        <Button
          label="Administrar unicornios"
          icon="pi pi-arrow-right"
          className="p-button-lg p-button-primary"
          onClick={() => navigate('/unicornios')}
        />
      </Card>
    </div>
  );
};

export default HomeView;
