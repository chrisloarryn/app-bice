import React, { useContext } from 'react';
import faker from 'faker';
import { AppStateContext } from '../../../Providers/AppState';
import { Select as SelectComponent, Div, Label, Button } from './styles';
import { Options } from './../Option';

interface ISelectProps {
  id: string
}

export const Select = ({ id }: ISelectProps) => {
  const mock = {
    name: '',
    description: '',
    image: '',
    price: 0
  };
  const { insurances, setActive, active: currentActive } = useContext(
    AppStateContext
  );
  const handleChange = (e: any) => {
    setActive(mock);
    const {
      target: { value }
    } = e;
    const [find] = insurances.filter((item: any) => item.name === value);
    setActive(find);
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <h1>
        {currentActive && currentActive.name !== ''
          ? 'Seleccionado'
          : 'NO Seleccionado'}
      </h1>
      <Label htmlFor={id}>Selector de Plan:</Label>
      <Div style={{ margin: 'auto' }}>
        <SelectComponent id={id} onChange={handleChange}>
          {insurances.map((item) => (
            <Options key={faker.random.uuid()} option={item} />
          ))}
        </SelectComponent>
        <Button onClick={() => setActive(mock)}>
          Reset
        </Button>
      </Div>
    </div>
  );
};
