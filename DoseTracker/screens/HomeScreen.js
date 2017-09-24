import React from 'react';
import { 
  Header, 
  Left, 
  Right,
  Icon, 
  Body, 
  Title, 
  Content, 
  Container, 
  Button, 
  Text } from 'native-base';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>DoseTracker</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Button>
            <Text>Record Dose</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
