import React from 'react';

import { Row, Col } from './../../Molecules';
import { File as FileComponent } from './styles';

export const File = ({ children }: any) => {
  return (
    <FileComponent>
      <Row>
        <Col>{children}</Col>
      </Row>
    </FileComponent>
  );
};
