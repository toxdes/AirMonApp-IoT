
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

export default function Weather(props) {
  return (
    <Svg height="64" width="64" version="1.1" viewBox="0 0 64 64">
    	<Defs/>
    	<G id="thunder">
    		<G transform="translate(20,10)">
    			<G className="am-weather-cloud-1">
    				<Path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" strokeWidth="1.2" transform="translate(-10,-6), scale(0.6)"/>
    			</G>
    			<G>
    				<Path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeWidth="1.2" transform="translate(-20,-11)"/>
    			</G>
    			<G transform="translate(-9,28), scale(1.2)">
    				<Polygon className="am-weather-stroke" fill="orange" points="14.3,-2.9 20.5,-2.9 16.4,4.3 20.3,4.3 11.5,14.6 14.9,6.9 11.1,6.9" stroke="white" strokeWidth="1"/>
    			</G>
    		</G>
    	</G>
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
    	<G id="cloudy-day-1">
    		<G transform="translate(20,10)">
    			<G transform="translate(0,16)">
    				<G className="am-weather-sun">
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
    			<G className="am-weather-cloud-2">
    				<Path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#C6DEFF" stroke="white" strokeWidth="1.2" transform="translate(-20,-11)"/>
    			</G>
    		</G>
    	</G>
    	<G id="cloudy-night-1">
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
    				<Path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#C6DEFF" stroke="white" strokeWidth="1.2" transform="translate(-20,-11)"/>
    			</G>
    		</G>
    	</G>
    	<G id="cloudy-day-2">
    		<G transform="translate(20,10)">
    			<G transform="translate(0,16)">
    				<G className="am-weather-sun">
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
    			<G className="am-weather-cloud-2">
    				<Path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" strokeWidth="1.2" transform="translate(-20,-11)"/>
    			</G>
    		</G>
    	</G>
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
    	<G id="cloudy-day-3">
    		<G transform="translate(20,10)">
    			<G transform="translate(0,16)">
    				<G className="am-weather-sun">
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
    			<G className="am-weather-cloud-2">
    				<Path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeWidth="1.2" transform="translate(-20,-11)"/>
    			</G>
    		</G>
    	</G>
    	<G id="cloudy-night-3">
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
    				<Path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeWidth="1.2" transform="translate(-20,-11)"/>
    			</G>
    		</G>
    	</G>
    	<G id="cloudy">
    		<G transform="translate(20,10)">
    			<G className="am-weather-cloud-1">
    				<Path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" strokeWidth="1.2" transform="translate(-10,-8), scale(0.6)"/>
    			</G>
    			<G className="am-weather-cloud-2">
    				<Path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeWidth="1.2" transform="translate(-20,-11)"/>
    			</G>
    		</G>
    	</G>
    	<G id="rainy-1">
    		<G transform="translate(20,10)">
    			<G transform="translate(0,16), scale(1.2)">
    				<G className="am-weather-sun">
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
    			<G>
    				<Path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeWidth="1.5" transform="translate(-15,-5), scale(0.85)"/>
    			</G>
    		</G>
    		<G transform="translate(34,46), rotate(10)">
    			<Line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8"/>
    			<Line className="am-weather-rain-2" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8"/>
    		</G>
    	</G>
    	<G id="rainy-2">
    		<G transform="translate(20,10)">
    			<G transform="translate(0,16)">
    				<G className="am-weather-sun">
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
    			<G>
    				<Path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeWidth="1.2" transform="translate(-20,-11)"/>
    			</G>
    		</G>
    		<G transform="translate(37,45), rotate(10)">
    			<Line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8"/>
    		</G>
    	</G>
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
    	<G id="rainy-4">
    		<G transform="translate(20,10)">
    			<G>
    				<Path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeWidth="1.2" transform="translate(-20,-11)"/>
    			</G>
    		</G>
    		<G transform="translate(37,45), rotate(10)">
    			<Line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8"/>
    		</G>
    	</G>
    	<G id="rainy-5">
    		<G transform="translate(20,10)">
    			<G>
    				<Path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeWidth="1.2" transform="translate(-20,-11)"/>
    			</G>
    		</G>
    		<G transform="translate(34,46), rotate(10)">
    			<Line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8"/>
    			<Line className="am-weather-rain-2" fill="none" stroke="#91C0F8" strokeDasharray="4,7" strokeLinecap="round" strokeWidth="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8"/>
    		</G>
    	</G>
    	<G id="rainy-6">
    		<G transform="translate(20,10)">
    			<G>
    				<Path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeWidth="1.2" transform="translate(-20,-11)"/>
    			</G>
    		</G>
    		<G transform="translate(31,46), rotate(10)">
    			<Line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,4" strokeLinecap="round" strokeWidth="2" transform="translate(-4,1)" x1="0" x2="0" y1="0" y2="8"/>
    			<Line className="am-weather-rain-2" fill="none" stroke="#91C0F8" strokeDasharray="4,4" strokeLinecap="round" strokeWidth="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8"/>
    			<Line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="4,4" strokeLinecap="round" strokeWidth="2" transform="translate(4,0)" x1="0" x2="0" y1="0" y2="8"/>
    		</G>
    	</G>
    	<G id="rainy-7">
    		<G transform="translate(20,10)">
    			<G>
    				<Path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeWidth="1.2" transform="translate(-20,-11)"/>
    			</G>
    		</G>
    		<G transform="translate(31,46), rotate(10)">
    			<Line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="0.1,7" strokeLinecap="round" strokeWidth="3" transform="translate(-5,1)" x1="0" x2="0" y1="0" y2="8"/>
    			<Line className="am-weather-rain-2" fill="none" stroke="#91C0F8" strokeDasharray="0.1,7" strokeLinecap="round" strokeWidth="3" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8"/>
    			<Line className="am-weather-rain-1" fill="none" stroke="#91C0F8" strokeDasharray="0.1,7" strokeLinecap="round" strokeWidth="3" transform="translate(5,0)" x1="0" x2="0" y1="0" y2="8"/>
    		</G>
    	</G>
    	<G id="snowy-1">
    		<G transform="translate(20,10)">
    			<G transform="translate(0,16), scale(1.2)">
    				<G className="am-weather-sun">
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
    			<G>
    				<Path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeWidth="1.5" transform="translate(-15,-5), scale(0.85)"/>
    			</G>
    		</G>
    		<G transform="translate(20,9)">
    			<G className="am-weather-snow-1">
    				<G transform="translate(7,28)">
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    				</G>
    			</G>
    			<G className="am-weather-snow-2">
    				<G transform="translate(16,28)">
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    				</G>
    			</G>
    		</G>
    	</G>
    	<G id="snowy-2">
    		<G transform="translate(20,10)">
    			<G transform="translate(0,16)">
    				<G className="am-weather-sun">
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
    			<G className="am-weather-cloud-2">
    				<Path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeWidth="1.2" transform="translate(-20,-11)"/>
    			</G>
    		</G>
    		<G className="am-weather-snow-1">
    			<G transform="translate(32,38)">
    				<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    				<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    				<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    				<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    			</G>
    		</G>
    	</G>
    	<G id="snowy-3">
    		<G transform="translate(20,10)">
    			<G transform="translate(0,16)">
    				<G className="am-weather-sun">
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
    			<G>
    				<Path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeWidth="1.2" transform="translate(-20,-11)"/>
    			</G>
    			<G className="am-weather-snow-1">
    				<G transform="translate(7,28)">
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    				</G>
    			</G>
    			<G className="am-weather-snow-2">
    				<G transform="translate(16,28)">
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    				</G>
    			</G>
    		</G>
    	</G>
    	<G id="snowy-4">
    		<G transform="translate(20,10)">
    			<G>
    				<Path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeWidth="1.2" transform="translate(-20,-11)"/>
    			</G>
    			<G className="am-weather-snow-1">
    				<G transform="translate(11,28)">
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    				</G>
    			</G>
    		</G>
    	</G>
    	<G id="snowy-5">
    		<G transform="translate(20,10)">
    			<G className="snowy-6-2">
    				<Path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeWidth="1.2" transform="translate(-20,-11)"/>
    			</G>
    			<G className="am-weather-snow-1">
    				<G transform="translate(7,28)">
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    				</G>
    			</G>
    			<G className="am-weather-snow-2">
    				<G transform="translate(16,28)">
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    				</G>
    			</G>
    		</G>
    	</G>
    	<G id="snowy-6">
    		<G transform="translate(20,10)">
    			<G className="am-weather-cloud-2">
    				<Path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" strokeWidth="1.2" transform="translate(-20,-11)"/>
    			</G>
    			<G className="am-weather-snow-1">
    				<G transform="translate(3,28)">
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    				</G>
    			</G>
    			<G className="am-weather-snow-2">
    				<G transform="translate(11,28)">
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    				</G>
    			</G>
    			<G className="am-weather-snow-3">
    				<G transform="translate(20,28)">
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    					<Line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5"/>
    				</G>
    			</G>
    		</G>
    	</G>
    </Svg>
  );
}
