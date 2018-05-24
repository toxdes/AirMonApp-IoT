
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

export default function Day(props) {
  return (
    <Svg height="64" width="64" version="1.1" viewBox="0 0 64 64">
    	<Defs/>
    	<G id="day">
    		<G transform="translate(32,32)">
    			<G className="am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out">
    				<G>
    					<Line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
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
    	</G>
    </Svg>
  );
}
