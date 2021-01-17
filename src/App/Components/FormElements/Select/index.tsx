import React from 'react';
import { Select as SelectComponent, Label } from './styles';
import { Col } from './../../UI/Molecules/Col';
import { Options } from '../Option';

interface IOptionProperties {
  value?: string;
  name?: string;
  image?: string;
  price?: number;
}
interface ISelectProps {
  id?: string;
  iterators?: IOptionProperties[];
  handleChange?: (value: any) => any;
  name: string
}

export const Select = ({ id, iterators = [], handleChange = () => {}, name }: ISelectProps) => (
  <Col>
    <Label htmlFor={id}>Selector de Plan:</Label>
    <SelectComponent id={id} onChange={handleChange} name={name}>
      {iterators.map((item: IOptionProperties, index: number) => (
        <Options key={`${(index + 1).toString()}`} option={item} />
      ))}
    </SelectComponent>
  </Col>
);

// const mock = {
//   name: '',
//   description: '',
//   image: '',
//   price: 0
// };
// const { insurances, setActive, active: currentActive } = useContext(
//   AppStateContext
// );
// const handleChange = (e: any) => {
//   setActive(mock);
//   const {
//     target: { value }
//   } = e;
//   const [find] = insurances.filter((item: any) => item.name === value);
//   setActive(find);
// };
