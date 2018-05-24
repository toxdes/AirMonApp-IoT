import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
export const Loading = props => <ActivityIndicator {...props} />;

export const Root = styled.View`
  flex: 1;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ScrollRoot = styled.ScrollView``;

export const T = styled.Text`
  font-family: OpenSans-Regular;
`;

//update interval of last-updated
export const INTERVAL = 40000;

//status of each value, if it's safe or not
export const Status = {
  NORMAL: 'NORMAL',
  DANGER: 'DANGER',
};