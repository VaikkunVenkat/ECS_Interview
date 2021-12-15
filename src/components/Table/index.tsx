import React, { useState } from 'react'
import MaterialTable from 'material-table'
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import AddBox from '@material-ui/icons/AddBox';


import { columns, carsData as data } from '../../fixtures/cars'
import { ICarsData } from '../../fixtures/types';

const Table: React.FC<any> = () => {
  const [carsData, setCarsData] = useState<ICarsData[]>(data)

  const handleDeleteRow = (rowData: ICarsData): void => {
    const filteredRows: ICarsData[] = carsData.filter((car) => car.make !== rowData.make)
    setCarsData(filteredRows)
  }

  return (
    <MaterialTable
      title="Cars table"
      columns={columns}
      data={carsData}
      actions={[
        {
          icon: DeleteOutline,
          tooltip: "Delete Car",
          onClick: (event, rowData: ICarsData | any) => handleDeleteRow(rowData),
        },
        {
          icon: AddBox,
          tooltip: "Add Car",
          isFreeAction: true,
          onClick: (event) => alert("You want to add a new row"),
        },
      ]}
    />
  );
};

export default Table;