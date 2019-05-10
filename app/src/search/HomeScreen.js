import React, {Component} from 'react';
import {TouchableOpacity, AppRegistry ,StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Picker, Card,CardItem,Body, Input, Label, Form,Item,  Title, Text, Container, Header, Content,Left,Right ,Button, Icon, Footer, FooterTab} from 'native-base';
import {SocialIcon, Divider, SearchBar} from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';

import FooterTabs from '../components/FooterTabs'
import globalstyles ,{colors}from '../components/globalstyles'

export default class HomeScreen extends Component<Props> {
	render(){
		return(
			<Container>
				<Header span style={{backgroundColor:colors.blue}} searchBar>
					<Body>

						<Text style={[globalstyles.subtitle_text, {color:colors.white}]}>  Curated smooth experiences for you</Text>
						<Text style={[globalstyles.title_text, {color:colors.white}]}> Explore</Text>					
					</Body>
				</Header>
				<Content style={{backgroundColor:'#F8F8F8'}}>
				</Content>
				<Footer>
					<FooterTab style={{backgroundColor : 'white'}}>
			            <Button vertical>              
			              <Icon style={globalstyles.icon} name="profile" type='AntDesign' />
			              <Text style={globalstyles.title}>Activities</Text>
			            </Button>
			            <Button vertical>
			              <Icon style={globalstyles.icon} name="shopping-basket" type='FontAwesome'/>
			              <Text style={globalstyles.title}>Basket</Text>
			            </Button>
			            <Button vertical>              
			              <Icon style={globalstyles.icon} name="circle" type="Entypo"/>
			              <Text style={globalstyles.title}>Explorer</Text>
			            </Button>
			            <Button vertical>
			              <Icon style={globalstyles.icon} name="favorite-border" type="MaterialIcons"/>
			              <Text style={globalstyles.title}>Favorites</Text>
			            </Button>
			            <Button vertical onPress={() => {this.props.navigation.navigate('Profile')} }>
			              <Icon style={globalstyles.icon} name="user-o" type='FontAwesome' />
			              <Text style={globalstyles.title}>Profile</Text>
			            </Button>
			        </FooterTab>	       
				</Footer>
			</Container>
		);
	}
}

