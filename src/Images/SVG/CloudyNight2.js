
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

export default function CloudyNight2(props) {
  return (
    <Svg height="64" width="64" version="1.1" viewBox="0 0 64 64">
    	<Defs/>
    	<G id="cloudy-night-2">
    		<G transform="translate(20,10)">
    			<G transform="translate(16,4), scale(0.8)">
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
    			<G className="am-weather-cloud-2">
    				<Path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" strokeWidth="1.2" transform="translate(-20,-11)"/>
    			</G>
    		</G>
    	</G>
    </Svg>
  );
}
