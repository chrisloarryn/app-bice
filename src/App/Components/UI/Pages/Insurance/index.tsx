// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Select } from './../../../FormElements/Select';
import { Title, Button } from '../../Atoms';
import { File } from '../../Organisms';
import { Fragment, useContext, useEffect } from 'react';
import { Container } from '../../Templates';
import { AppStateContext } from '../../../../Providers/AppState';
import { useForm } from '../../../../Hooks/useForm';
import { Form } from './styles';

export const Insurance = ({ name = '' }: { name?: string }) => {
  const INSURANCE_NAME = 'insurance';
  const { insurances, setActive, active: currentActive } = useContext(
    AppStateContext
  );
  const [formValues, handleInputChange] = useForm({ [INSURANCE_NAME]: '' });
  const handleClick = (e: any) => {
    e.preventDefault();
    // setActive(mock);
    const {
      target: { value }
    } = e;
    console.log(value);

    // setActive(find);
  };

  useEffect(() => {
    const filtered =
      insurances &&
      insurances.length &&
      insurances.length > 0 &&
      insurances.filter(
        (item: any) => item.name === formValues[INSURANCE_NAME]
      );
    const find = filtered && filtered.length && filtered[0];
    setActive(!!find && find);
    // eslint-disable-next-line
  }, [formValues, setActive]);
  return (
    <Fragment>
      <File>
        <Title size='h2'>
          {currentActive && currentActive.name !== ''
            ? currentActive.name
            : 'NO title'}
        </Title>
      </File>
      <File>
        <Title size='h1'>
          {currentActive && currentActive.name !== ''
            ? 'Seleccionado'
            : 'NO Seleccionado'}
        </Title>
      </File>

      <File>
        <Container align='center'>
          <Form onSubmit={handleClick}>
            <Select
              iterators={insurances}
              handleChange={handleInputChange}
              name={INSURANCE_NAME}
            />

            <Button name='Elegir' />
          </Form>
        </Container>
      </File>
    </Fragment>
  );
};
