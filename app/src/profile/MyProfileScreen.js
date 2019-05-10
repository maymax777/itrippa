import React, {Component} from 'react';
import {TouchableOpacity, AppRegistry ,StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Picker, Card,CardItem,Body, Input, Label, Form,Item,  Title, Subtitle, Text, Container, Header, Content,Left,Right ,Button, Icon} from 'native-base';
import {SocialIcon, Divider, SearchBar} from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';

import globalstyles,{colors} from '../components/globalstyles'

export default class MyProfileScreen extends Component<Props> {
	render(){
		return(
			<Container>
				<Header span style={{backgroundColor:colors.green}}>
					<Body>
						
						<Text style={[globalstyles.subtitle_text, {color:colors.white}]}>  Show and Edit your profile info</Text>
						<Text style={[globalstyles.title_text, {color:colors.white}]}> My Profile</Text>					
					</Body>
				</Header>
			</Container>
		);
	}
}