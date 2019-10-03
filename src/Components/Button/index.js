import React from 'react';
import PropTypes from 'prop-types';

import { 
  Container,
  RoundContainer,
  Text,
  RoundedButton
} from './styles';

export const SmallButton = ({name, func}) => (
    <div>
      <button onClick={func}>
        <p>{name}</p>
        <p>Small</p>
      </button>
    </div>
  );


export const MediumButton = ({name, func}) => (
    <div>
      <button onClick={func}>
        <p>{name}</p>
        <p>Medium</p>
      </button>
    </div>
  );

export const LargeButton = ({name, func}) => (
    <div>
      <button onClick={func}>
        <p>{name}</p>
        <p>large</p>
      </button>
    </div>
  );

export const RoundButton = ({name, func}) => (
  <Container onClick={func}>
    <RoundContainer>
      <RoundedButton >
        <Text>{name}</Text>
      </RoundedButton>
    </RoundContainer>

  </Container>
  );



SmallButton.propTypes = {
  name: PropTypes.string.isRequired
};
MediumButton.propTypes = {
  name: PropTypes.string.isRequired
};
LargeButton.propTypes = {
  name: PropTypes.string.isRequired
};