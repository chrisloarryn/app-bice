import React, { useContext } from 'react';
import { AppStateContext } from '../../../Providers/AppState';
import { NoData } from '../Atoms/NoData/styles';
import { Paragraph } from '../Atoms/Paragraph'
import { Img } from './../Atoms/Img'
import { Title } from './../Atoms/Title'
import { Card, CardContent, Container } from './styles';

export const ActiveInsure = (): JSX.Element => {
  const { active: activeInsure } = useContext(AppStateContext);
  if (!activeInsure.name) return <NoData>No hay un plan seleccionado</NoData>;
  return (
    <Container>
      <Title size="h2">Card</Title>

      <Card>
        <Img src={activeInsure.image} alt='Avatar' style={{ width: '100%' }} />
        <CardContent>
          <h4>
            <b>{activeInsure.name}</b>
          </h4>
          <Paragraph description={activeInsure.description} />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p style={{ color: 'tomato' }}>Precio:</p>
            <p style={{ color: 'tomato', marginLeft: '5px' }}>
              {activeInsure.price}
            </p>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};
