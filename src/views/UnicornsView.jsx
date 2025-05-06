import React, { useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Link, useNavigate } from 'react-router-dom';
import { UnicornContext } from '../contexts/UnicornContext';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

const UnicornsView = () => {
  const { unicorns, deleteUnicorn } = useContext(UnicornContext);
  const navigate = useNavigate();

  const editUnicorn = (unicorn) => {
    navigate('/unicornios/editar/' + unicorn._id);
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este unicornio?')) {
      deleteUnicorn(id);
    }
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Listado de Unicornios', 105, 20, null, null, 'center');

    const tableColumn = ['Nombre', 'Edad', 'Color', 'Poder'];
    const tableRows = unicorns.map((u) => [u.name, u.age, u.color, u.power]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 30,
      theme: 'striped',
      headStyles: { fillColor: [63, 81, 181], halign: 'center' },
      styles: { halign: 'center', font: 'helvetica', fontSize: 11 },
      alternateRowStyles: { fillColor: [240, 240, 255] },
      margin: { top: 20 }
    });

    doc.save('unicorns.pdf');
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex gap-2 justify-center">
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-info"
          onClick={() => editUnicorn(rowData)}
          tooltip="Editar"
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => handleDelete(rowData._id)}
          tooltip="Eliminar"
        />
      </div>
    );
  };

  return (
    <div className="p-5">
      <Card title="Gestión de Unicornios" className="shadow-4 border-round-lg">
        <div className="flex justify-between mb-4">
          <Link to="/unicornios/crear">
            <Button label="Agregar Unicornio" icon="pi pi-plus" className="p-button-success" />
          </Link>
          <Button
            label="Exportar PDF"
            icon="pi pi-file-pdf"
            className="p-button-danger p-button-outlined"
            onClick={exportPDF}
          />
        </div>

        <DataTable
          value={unicorns}
          paginator
          rows={5}
          stripedRows
          showGridlines
          className="p-datatable-sm border-round-lg"
          rowHover
        >
          <Column field="name" header="Nombre" sortable style={{ textAlign: 'center' }} />
          <Column field="age" header="Edad" sortable style={{ textAlign: 'center' }} />
          <Column field="color" header="Color" sortable style={{ textAlign: 'center' }} />
          <Column field="power" header="Poder" sortable style={{ textAlign: 'center' }} />
          <Column body={actionBodyTemplate} header="Acciones" style={{ textAlign: 'center', width: '10rem' }} />
        </DataTable>
      </Card>
    </div>
  );
};

export default UnicornsView;
