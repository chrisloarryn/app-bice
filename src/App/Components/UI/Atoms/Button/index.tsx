import React from 'react';

import { Button as ButtonComponent } from './styles';

interface IButtonProps {
  name?: string;
  onClick?: (value: any) => any;
}

/* <Button onClick={() => setActive(mock)}>
  Reset
</Button> */

export const Button = ({
  name = 'Button',
  onClick = () => {}
}: IButtonProps): JSX.Element => {
  // onClick={() => setActive(mock)}
  return <ButtonComponent type="submit" onClick={onClick}>{name}</ButtonComponent>;
};
