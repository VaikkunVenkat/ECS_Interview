import React, { useState } from 'react'
import MaterialTable from 'material-table'
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import { filterArrObjects } from '../../utils';


import { columns, carsData as data } from '../../fixtures/cars'
import { ICarsData } from '../../fixtures/types';

const Table: React.FC<any> = () => {
  const [carsData, setCarsData] = useState<ICarsData[]>(data)

  const handleDeleteRow = (rowData: ICarsData): void => {
    const filteredRows: ICarsData[] = filterArrObjects(carsData, rowData, 'make')
    setCarsData(filteredRows)
  }

  const handleAddRow = (newData: ICarsData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setCarsData([...data, newData]);
        resolve(newData);
      }, 1000);
    });
  };

  const handleRowUpdate = (newData: ICarsData, oldData?: ICarsData): Promise<ICarsData> => {
    return (
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const filteredData: ICarsData[] = filterArrObjects(carsData, oldData, 'make')
          setCarsData([...filteredData, newData]);
          resolve(newData);
        }, 1000)
      })
    );    
  }

  return (
    <MaterialTable
      title="Cars table"
      options={{
        filtering: true,
        sorting: true,
      }}
      editable={{
        onRowAdd: handleAddRow,
        onRowUpdate: handleRowUpdate,
      }}
      columns={columns}
      data={carsData}
      actions={[
        {
          icon: DeleteOutline,
          tooltip: "Delete Car",
          onClick: (event, rowData: ICarsData | any) => handleDeleteRow(rowData),
        },
      ]}
    />
  );
};

export default Table;