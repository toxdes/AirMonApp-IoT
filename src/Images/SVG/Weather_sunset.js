
import React from 'react';
import {
  Svg,
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

export default function Weather_sunset(props) {
  return (
    <Svg height="64px" id="Layer_1" width="64px" version="1.1" viewBox="0 0 64 64" x="0px" y="0px" xmlSpace="preserve">
    	<Line fill="none" stroke="#000000" strokeWidth="2" x1="0" x2="64" y1="47" y2="47"/>
    	<Line fill="none" stroke="#000000" strokeWidth="2" x1="10" x2="0" y1="37" y2="37"/>
    	<Line fill="none" stroke="#000000" strokeWidth="2" x1="64" x2="54" y1="37" y2="37"/>
    	<Line fill="none" stroke="#000000" strokeWidth="2" x1="32" x2="32" y1="15" y2="4"/>
    	<Line fill="none" stroke="#000000" strokeWidth="2" x1="14" x2="6" y1="23" y2="15"/>
    	<Line fill="none" stroke="#000000" strokeWidth="2" x1="50" x2="58" y1="23" y2="15"/>
    	<Path d="M48.159,47C49.96,44.096,51,40.669,51,37&#xA;&#x9;c0-10.493-8.506-19-19-19s-19,8.507-19,19c0,3.668,1.04,7.094,2.841,9.998" fill="#000000" stroke="#000000" strokeWidth="2"/>
    </Svg>
  );
}
