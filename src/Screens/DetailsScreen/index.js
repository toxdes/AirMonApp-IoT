import React from 'react';
import styled from 'styled-components';
import {Loading, T,ScrollRoot, Root, Status } from '../../Components/Common';
import {HeaderBackButton} from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/Feather';
import api from '../../Config/api';
import axios from 'axios';
import PTRView from 'react-native-pull-to-refresh';
import {AreaChart, Grid} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import moment from 'moment';
import CustomAlert from '../../Config/alerts';

const MessageText = styled.Text`
  font-family: 'OpenSans-Regular';
  font-size:22px;
  text-align:center;
`;

const MessageContainer = styled.View`
margin:25px;
padding:20px;
border-width:2px;
`;

const Graph = ({data, navigation}) =>{
  if(!data){
    return(
      <T>No graph to show, cause no data to plot.</T>
    );
  }
  let ourData = data.map((each) =>{
    return each.value;
  });
  return(
    <AreaChart
    style={{ height: 200 }}
    data={ ourData.slice(5) }
    contentInset={{ top: 30, bottom: 30 }}
    curve={ shape.curveNatural }
    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
>
    <Grid/>
</AreaChart>
  );
}

const DataTableText = styled.Text`
font-family:'OpenSans-Regular';
font-size:18px;
text-align:center;
padding:5px;
border:1px solid;
`;

const DataTable = ({data}) =>{
  if(!data){
    return(<T>Nothing to show!</T>);
  }
  return(
    
      data.map((each, i) =>{
    return(<DataTableText style={{backgroundColor:(i%2==0)?'rgba(134, 65, 244, 0.1)':'white'}}>{moment(each.timestamp).format("hh:mm:ss a") + '                      ' + each.value }</DataTableText>);
  })
    
  )
}
class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      data:null
    }
    this._onRefresh = this._onRefresh.bind(this);
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name').toString().capitalize() + ' Details' ,
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}>
      <Icon name="arrow-left" size="35" color="#fff"/>
      </HeaderBackButton>,
      headerStyle: {
        backgroundColor: (navigation.getParam('status') == Status.NORMAL) ? '#37a000' : 'tomato'
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor:'white',
      headerBackTitleStyle:{
        color:'white',
      }
    }
  };

  async componentDidMount(){
    let name = this.props.navigation.getParam('name').toLowerCase();
    this.setState({loading:true});
    let data = await axios.get(api(name));
    this.setState({data:data.data.results,loading:false});
  }

async _onRefresh(){
  let name = this.props.navigation.getParam('name').toLowerCase();
  this.setState({loading:true});
  let data = await axios.get(api(name));
  this.setState({data:data.data.results, loading:false});
}
  render() {
    let ourData = [];
    if(this.state.loading){
      return(
        <Root>
          <Loading size="large" color="red"/>
        </Root>
      )
    }else{
      let {data} = this.state;
      let {navigation} = this.props;
      let status = navigation.getParam('status');
      let name = navigation.getParam('name');

      return (
        <PTRView onRefresh={this._onRefresh}>
        <ScrollRoot contentContainerStyle={{padding:10}}>
            <MessageContainer style={{borderColor:(status == Status.NORMAL) ? '#37a000' : 'tomato', backgroundColor:(status == Status.NORMAL) ? 'rgba(0,200,0,0.1)' : 'rgba(200,0,0,0.1)'}}>
            <MessageText style={{color:(status == Status.NORMAL) ? '#37a000' : 'tomato'}}>
            {CustomAlert(name.toLowerCase(), status)}
            </MessageText>
            </MessageContainer>
            <Graph data={data}navigation={navigation}/>
            <MessageText style={{textAlign:'center', color:'gray', fontFamily:'OpenSans-Bold', fontSize:28}}>Recent Values of {name.capitalize()}</MessageText>
            <Root style={{marginTop:20}}/>
            <DataTableText style={{color:'white', fontFamily:'OpenSans-Bold', paddingVertical:60, height:40, backgroundColor:'rgba(134, 65, 244, 0.9)'}}>TIME  {'                          '}  VALUE</DataTableText>
            <DataTable data = {data} navigation={navigation}/>
        </ScrollRoot>
        </PTRView>
      );
    }
  }
}

export default DetailsScreen;
/*{async (data) =>{
  return await data.map((each) =>{
    return(<MessageText>{each.timestamp}</MessageText>);
  }); 
}}*/