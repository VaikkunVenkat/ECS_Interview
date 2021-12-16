import React from 'react';
import { shallow } from "enzyme";
import Table from '.'
import { IActionProps } from './types';
import MaterialTable from 'material-table';
import { carsData, columns, newCarRow, oldCarRow } from '../../fixtures/cars';

describe('Table component', () => {
  const wrapper = shallow(<Table />);
  const materialTableWrapper = wrapper.find(MaterialTable)
  it('renders expected columns and data props', function () {
    expect(materialTableWrapper.prop('title')).toEqual('Cars table')
    expect(materialTableWrapper.prop('columns')).toEqual(columns)
    expect(materialTableWrapper.prop('data')).toEqual(carsData)
  });
  it('handleDeleteRow', () => {
    // procedure: delete the porsche row, and expect it not to be there
    const actionsProp: IActionProps[] = materialTableWrapper.prop('actions')
    const deleteAction = actionsProp.find((action: { tooltip: string; }) => action.tooltip === 'Delete Car')
    const event = {}
    const porscheCar = carsData.find((car) => car.make === 'Porsche')
    deleteAction?.onClick(event, porscheCar)
    wrapper.update()
    const wrapperDataUpdated = wrapper.find(MaterialTable)
    expect(wrapperDataUpdated.prop('data')).toEqual([{ make: "Toyota", model: "Celica", colour: "red", price: 35000 },
    { make: "Ford", model: "Mondeo", colour: "black", price: 32000 }])
    expect(wrapperDataUpdated.prop('data')).not.toContain(porscheCar)
  })
  it('handleAddRow', async () => {
    // add a row, and expect the number of rows to have incremented.
    const wrapper = shallow(<Table />);
    expect(wrapper.find(MaterialTable).prop('data')).toHaveLength(3)
    const editableProp = wrapper.find(MaterialTable).prop('editable');
    editableProp.onRowAdd(newCarRow);
    setTimeout(() => {
      wrapper.update();
      expect(wrapper.find(MaterialTable).prop('data')).toContain(newCarRow);
      expect(wrapper.find(MaterialTable).prop('data')).toHaveLength(4)
    }, 0);
  })
  it('handleUpdate', async () => {
    // update a row, expect old row to have gone, and new row to have appeared, and number of rows unchanged
    const wrapper = shallow(<Table />);
    expect(wrapper.find(MaterialTable).prop('data')).toHaveLength(3)
    const editableProp = wrapper.find(MaterialTable).prop('editable');
    editableProp.onRowUpdate(newCarRow, oldCarRow);
    setTimeout(() => {
      wrapper.update();
      expect(wrapper.find(MaterialTable).prop('data')).toContain(newCarRow);
      expect(wrapper.find(MaterialTable).prop('data')).not.toContain(oldCarRow);
      expect(wrapper.find(MaterialTable).prop('data')).toHaveLength(3)
    }, 0);
  })
});