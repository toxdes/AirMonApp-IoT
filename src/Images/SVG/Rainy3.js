
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

export default function Rainy3(props) {
  return (
    <Svg height="64" width="64" version="1.1" viewBox="0 0 64 64">
    	<Defs/>
    	<G id="rainy-3">
    		<G transform="translate(20,10)">
    			<G transform="translate(0,16)">
    				<G className="am-weather-sun">
    					<G>
    						<Line stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
    					</G>
    					<G transform="rotate(45)">
    						<Line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
    					</G>
    					<G transform="rotate(90)">
    						<Line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
    					</G>
    					<G transform="rotate(135)">
    						<Line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
    					</G>
    					<G transform="rotate(180)">
    						<Line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
    					</G>
    					<G transform="rotate(225)">
    						<Line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
    					</G>
    					<G transform="rotate(270)">
    						<Line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
    					</G>
    					<G transform="rotate(315)">
    						<Line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
    					</G>
    				</G>
    				<Circle x="0" y="0" fill="orange" r="5" stroke="orange" strokeWidth="2"/>
    			</G>
    			<G>
    				<Path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeWidth="1.2" transform="translate(-20,-11)"/>
    			</G>
    		</G>
    		<G transform="translate(34,46), rotate(10)">
    			<Line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8"/>
    			<Line className="am-weather-rain-2" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8"/>
    		</G>
    	</G>
    </Svg>
  );
}
