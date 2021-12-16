import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button'
import { filterArrObjects, getSimilarWords } from '../../utils';


import { columns, carsData as data } from '../../fixtures/cars'
import { ICarsData } from '../../fixtures/types';
import { IMuseData } from './types';

const Table: React.FC<any> = () => {
  const [carsData, setCarsData] = useState<ICarsData[]>(data)
  const [museData, setMuseData] = useState<IMuseData>({})
  const [showMuseData, setShowMuseData] = useState<boolean>(false)

  useEffect(() => {
    setMuseData({})
    handleGetWords(carsData)
  }, [carsData])

  const handleGetWords = (cars: ICarsData[]) => {let totalWords = ''
    cars.map(async (car: ICarsData, idx: number) => {
      const words = await getSimilarWords(car.model)
      totalWords += words.join(', ')
      setMuseData({...museData, [idx]: totalWords })
    })
    
  }

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
    <>
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
    <Button
      onClick={() => setShowMuseData((prev) => !prev)}
      variant='contained'
    >
      Show muse data
    </Button>
    {showMuseData && Object.values(museData).map((v, i) => {
      return <div>{v}</div>;
    })}
    </>
  );
};

export default Table;