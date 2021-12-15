import React from 'react'
import MaterialTable from 'material-table'

import { columns, carsData } from '../../fixtures/cars'

const Table: React.FC<any> = () => {
  return (
    <MaterialTable
      title="Cars table"
      columns={columns}
      data={carsData}
    />
  );
};

export default Table;