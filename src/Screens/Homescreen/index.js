import React from 'react';
import styled from 'styled-components/native';
import { Loading, Root, ScrollRoot, INTERVAL, Status } from '../../Components/Common';
import { ImageBackground, TouchableNativeFeedback } from 'react-native';
//import { AnimatedCircularProgress } from 'react-native-circular-progress';
import moment from 'moment';
import Icon from 'react-native-vector-icons/dist/Entypo';

//for firebase
import firebase from 'firebase';
import '../../Config/db';

//firebase related objects
let database = firebase.database();
let ref = database.ref('/FinalWeatherData');

//todo - header -- nav, visual temp -- image, animation if possible, background --fucking scrollview
const backImage = require('../../Images/background.jpg');
import SunAndCloud from '../../Images/SunAndCloud';
import { log } from 'core-js';

const Background = props => <ImageBackground {...props} />;
const CloudImage = props => <SunAndCloud style={{ flex: 1 }} {...props} />;

import axios from 'axios';
import PTRView from 'react-native-pull-to-refresh';


//dummy header component
const Header = styled.Text`Header`;

//Text Components
const TempText = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: 72px;
  color: #ffffff;
`;

const LocText = styled.Text`
  font-family: 'OpenSans-Regular';
  font-size: 18px;
  font-weight: normal;
  color: #eeeeee;
`;

const DateText = styled.Text`
  font-family: 'OpenSans-Italic';
  font-size: 16px;
  color: #dddddd;
`;

//this component shows cloud Image and temperature with bigger font

class VisualTemp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
    };
  }

  componentDidMount() {
    let text = moment(this.props.lastUpdated || new Date()).fromNow();
    this.setState({ text: text });
    setInterval(() => {
      text = moment(this.props.lastUpdated).fromNow();
      this.setState({ text: text });
    }, INTERVAL);
  }
  render() {
    const { temperature, loc, date, lastUpdated } = this.props;
    return (
      <Root
        style={{
          justifyContent: 'flex-start',
          overflow: 'hidden',
        }}
      >
        <CloudImage width={250} height={250} />
        <Root>
          <TempText>{temperature} C</TempText>
          <LocText>{loc}</LocText>
          <DateText>{date}</DateText>
          <DateText style={{ fontSize: 14 }}>
            Last Updated: {this.state.text}
          </DateText>
        </Root>
      </Root>
    );
  }
}

//Items of Single Item
const OuterContainer = styled.View`
  width: 50px;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 15px;
  margin: 5px;
  background: rgba(255, 255, 255, 0.1);
`;

const TextUnderCircle = styled.Text`
  font-size: 24px;
  font-family: 'OpenSans-Bold';
  padding: 5px;
  color: white;
`;

const NameText = styled.Text`
  font-family: 'OpenSans-Regular';
  font-size: 14px;
  color: #e3e3e3;
`;

//Single Item of the grid
const SingleItem = ({ data, navigation }) => {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('orange')}
      onPress={() => {
        navigation.navigate('DetailsScreen', { name: data.name, status: data.status })
        //alert('Navigate to ' + data.name);
      }}
    >
      <OuterContainer
        style={{
          backgroundColor:
            data.status == Status.NORMAL
              ? 'rgba(255,255,255,0.2)'
              : 'rgba(255,0,0,0.4)',
        }}
      >
        <Icon
          name={data.status == Status.NORMAL ? 'emoji-happy' : 'emoji-sad'}
          color={data.status == Status.NORMAL ? 'yellow' : '#ff2400'}
          size={60}
        />
        <TextUnderCircle> {data.value} </TextUnderCircle>
        <NameText>{data.name.toUpperCase()}</NameText>
      </OuterContainer>
    </TouchableNativeFeedback>
  );
};
// Grid of buttons showing each value, todo: if danger, show red, otherwise green,
// touchable, onClick, opens each sensors page.
const GridofCensors = ({ sensorData, navigation }) => {
  if (!sensorData) {
    alert("Didn't load any data");
    return <Root />;
  }
  return Object.keys(sensorData).map(key => {
    return (
      <Root
        style={{
          flexDirection: 'row',
          //width: 120,
          margin: 10,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <SingleItem data={sensorData[key]} navigation={navigation} />
      </Root>
    );
  });
};

const fakeData = {
  temperature: {
    name: 'temperature',
    value: '37 C',
    status: Status.NORMAL,
  },
  humidity: {
    name: 'humidity',
    value: '40',
    status: Status.DANGER,
  },
};

const tempData  = {
  LDR: {
    name: 'LDR',
    status: 'NORMAL',
    value: 326
  },
  humidity: {
    name: 'humidity',
    status: 'NORMAL',
    value: 42
  },
  rain: {
    name: 'rain',
    status: 'NORMAL',
    value: 1
  },
  smoke: {
    name: 'smoke',
    status: 'NORMAL',
    value: 199
  },
  temperature: {
    name: 'temperature',
    status: 'NORMAL',
    value: 29
  },
  temprature: {
    name: 'temperature',
    status: 'NORMAL',
    value: 29
  }
};

class Homescreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      temp: '37 C',
      loc: 'Karad, Maharashtra, India.',
      date: 'Saturday, May 19',
      sensorData: fakeData,
      lastUpdated: null,
    };
    this._onRefresh = this._onRefresh.bind(this);
  }

  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    
  }
  componentDidMount() {

    this.setState({ loading: true });
    ref.set(tempData);
    ref.once('value').then((data, err) => {
      if (err) {
        alert(err);
      }
      let newData = data.val();
      let lastUpdated = new Date();
      this.setState({ sensorData: newData, lastUpdated: lastUpdated });
    });
   // this.setState({ loading: false });

   // let newSensorData = fakeData;
   // this.setState({loading:true});
    ref.on('value', (data, err) => {
      newSensorData = data.val();
      let lastUpdated = new Date();
      this.setState({ sensorData: newSensorData, lastUpdated: lastUpdated });
    });
    this.setState({loading:false});
  }

  _onRefresh(){

  }
  render() {
    if (this.state.loading) {
      return (
        <Root
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}
        >
          <Loading size={'large'} color="red" />
        </Root>
      );
    } else {
      return (
        <Background
          style={{ flex: 1, width: '100%', height: '100%' }}
          blurRadius={0.9}
          resizeMode="cover"
          source={backImage}
        >
        <PTRView onRefresh = {this._onRefresh}>
          <ScrollRoot
            style={{
              backgroundColor: 'rgba(0,0,0, 0.4)',
            }}
            contentContainerStyle={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <Header>Jesus</Header>
            <VisualTemp
              temperature={this.state.sensorData.temperature.value}
              loc={this.state.loc}
              date={this.state.date}
              lastUpdated={this.state.lastUpdated}
            />
            <GridofCensors
              sensorData={this.state.sensorData}
              navigation={this.props.navigation}
            />
          </ScrollRoot>
          </PTRView>
        </Background>
      );
    }
  }
}

export default Homescreen;
/**
 * contentContainerStyle={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingVertical: 20,
            }}
 */
