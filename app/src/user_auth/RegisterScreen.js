import React, {Component} from 'react';
import { AppRegistry ,StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Picker, Card,CardItem,Body, Input, Label, Form,Item,  Title, Text, Container, Header, Content,Left,Right ,Button, Icon} from 'native-base';
import {SocialIcon, Divider} from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles ,{colors} from './CustomStyles.js';

export default class RegisterScreen extends Component<Props> {

	_goBack = () => {this.props.navigation.navigate('Login')}
	render(){
		return(
	      <Container style={{backgroundColor:'#F8F8F8'}}>		    
		    <Content>
		    	<Header transparent>
			      	<Left>
			            <Button transparent onPress={this._goBack}>
			              <Icon name="arrow-back" style={{color:'#BDBDBD'}} />
			            </Button>
			        </Left>
			        <Content/>
			        <Right/>
			    </Header>

		        <Grid style={{height: 940}}> 	
		        	<Col size={8}/>	          		        
		        	<Col size={84}>
			        	<Row size={100}>
			        		<Col>
		        				<Text style={[styles.title_text, {color:colors.green}]}>Register</Text>
				        		<Text style={styles.subtitle_text}>Sign-Up and create your profile to start planning an amazing trip!</Text>			        		
				        	</Col>
			        	</Row>			        	
			        	<Row size={360}>
			        		<Col>
			        			<Text style={[styles.label_text, styles.vertical_space_light]}>Full Name </Text>
				        		<Item regular>				        			
					            	<Input				            		
								        placeholder=' Jane Smith'
								        placeholderTextColor='#BDBDBD'
								        style={styles.placeholder_text}
								        //value={this.state.text}
								        //onChangeText={text => this.setState({ text })}
								    />      
								</Item>

								<Text style={[styles.label_text, styles.vertical_space_light]}>Email </Text>
				        		<Item regular bordered>				        			
					            	<Input				            		
								        placeholder=' example@domain.com'
								        placeholderTextColor='#BDBDBD'
								        style={styles.placeholder_text}								        
								        //value={this.state.text}
								        //onChangeText={text => this.setState({ text })}
								    />      
								</Item>

								<Text style={[styles.label_text, styles.vertical_space_light]}>Account Type </Text>
								<Form style={{borderWidth:1,borderColor:'#BDBDBD'}}>
					        		<Picker
						              note
						              mode="dropdown"							              
						              placeholderStyle={styles.placeholder_text}
						              //selectedValue={this.state.selected}
						              //onValueChange={this.onValueChange.bind(this)}						              
						            >
						              <Picker.Item style={styles.label_text} label=" Resident 1 " value="key0" />
						              <Picker.Item style={styles.label_text} label=" Resident 2 " value="key1" />
						              <Picker.Item style={styles.label_text} label=" Resident 3 " value="key2" />
						              <Picker.Item style={styles.label_text} label=" Resident 4 " value="key3" />
						              <Picker.Item style={styles.label_text} label=" Resident 5 " value="key4" />
						            </Picker>
						        </Form>

								<Text style={[styles.label_text, styles.vertical_space_light]}>Choose a password </Text>
				        		<Item regular>				        			
					            	<Input		
					            		secureTextEntry={true}		  
					            		password={true}          		
								        type='password'
								        placeholder=' ********'
								        placeholderTextColor='#BDBDBD'								        
								        style={styles.placeholder_text}
								        //value={this.state.text}
								        //onChangeText={text => this.setState({ text })}
								    />      
								</Item>
				        	</Col>
			        	</Row>
			        	
			        	<Row size={30}/>
			        	<Row size={250}>
			        		<Content>
			        			<Button large rounded block 
			        				style={[{backgroundColor:colors.green}, styles.vertical_space]}
			        				onPress={() => {this.props.navigation.navigate('VerifyAccount')}}>
						            <Text style={[styles.button_text, {color:'#FFF'}]}>Sign Up</Text>
						        </Button>

						        <Button large rounded bordered block style={styles.vertical_space} 
						        	onPress={() => {this.props.navigation.navigate('Login')}}>
						            <Text style={[styles.button_text, {color:colors.blue}]}>Login</Text>
						        </Button>

						        <Divider style={{ backgroundColor: '#E0E0E0', height:1,}} />

						        <Text style={[styles.label_text_light, styles.vertical_space]}> Or alternatively, sign in with : </Text>

						        <Row>
						        	<Left>
							        	<SocialIcon									  									  
										  type='google'
										  iconColor={'#C62C2C'}
										  iconSize={28}
										/>
									</Left>
									<Body>
										<SocialIcon									  
										  light
										  type='facebook'
										  iconSize={28}
										/>
									</Body>
									<Right>
										<SocialIcon									  
										  light
										  type='twitter'
										  iconSize={28}
										/>
									</Right>
						        </Row>						        
			        		</Content>
			        	</Row>
			        </Col>
		        	<Col size={8}/>	          		        
		        </Grid>
		    </Content>		        		        
	      </Container>
		);
	}
}
