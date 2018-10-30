// REACT
import React from 'react';
// COMPONENTS
import { Row, Pane, Col, Grid } from '../../../src/layout';
import { Text } from '../../../src/typography';

const IndexPage = () => (
  <div>
    <Grid fluid>
      <Row>
        <Col xs={12} md={6}>
          <Text>MD3 XS6</Text>
        </Col>
        <Col xs={12} md={6}>
          <Text>MD3 XS6</Text>
        </Col>
      </Row>
    </Grid>
    <Pane clearfix>
      <Pane
        elevation={0}
        float="left"
        backgroundColor="white"
        width={200}
        height={120}
        margin={24}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text>Elevation 0</Text>
        <Text size={300}>Flat Panes</Text>
      </Pane>
      <Pane
        elevation={1}
        float="left"
        width={200}
        height={120}
        margin={24}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text>Elevation 1</Text>
        <Text size={300}>Floating Panes</Text>
      </Pane>
    </Pane>
  </div>
);

export default IndexPage;
