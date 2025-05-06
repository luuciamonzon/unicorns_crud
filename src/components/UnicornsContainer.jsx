import React from 'react';
import UnicornsView from '../views/UnicornsView';
import { Card } from 'primereact/card';

const UnicornsContainer = () => {
  return (
    <div className="p-4">
      <Card className="shadow-2 border-round-lg">
        <UnicornsView />
      </Card>
    </div>
  );
};

export default UnicornsContainer;
