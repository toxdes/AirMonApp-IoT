
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

export default function Night(props) {
  return (
    <Svg height="64" width="64" version="1.1" viewBox="0 0 64 64">
    	<Defs/>
    	<G id="night">
    		<G transform="translate(20,20)">
    			<G className="am-weather-moon-star-1">
    				<Polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none"/>
    			</G>
    			<G className="am-weather-moon-star-2">
    				<Polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" transform="translate(20,10)"/>
    			</G>
    			<G className="am-weather-moon">
    				<Path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" strokeWidth="2"/>
    			</G>
    		</G>
    	</G>
    </Svg>
  );
}
