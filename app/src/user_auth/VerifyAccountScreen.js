import React, {Component} from 'react';
import {TouchableOpacity, AppRegistry ,StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Picker, Card,CardItem,Body, Input, Label, Form,Item,  Title, Text, Container, Header, Content,Left,Right ,Button, Icon} from 'native-base';
import {SocialIcon, Divider} from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles ,{colors} from './CustomStyles.js';

export default class VerifyAccountScreen extends Component<Props> {

  _goBack = () => {this.props.navigation.navigate('Register')}
  render(){
    return(
        <Container style={{backgroundColor:'#F8F8F8'}}>       
        
			<Header transparent>
			  <Left>
			      <Button transparent onPress={this._goBack}>
			        <Icon name="arrow-back" style={{color:'#BDBDBD'}}/>
			      </Button>
			  </Left>
			  <Content/>
			  <Right/>
			</Header>

            <Grid >  
              <Col size={8}/>                       
              <Col size={84} >
                <Row size={2}>
                  <Col>
                    <Text style={[styles.title_text, {color:colors.green}]}>Verify your account</Text>
                    <Text style={styles.subtitle_text}>Please Enter the 6 digit code sent to your mailbox, or simply click on the link in the email.</Text>                                      
                  </Col>
                </Row>                
                <Row size={2}>
                  <Col>
                    <Text style={[styles.label_text, styles.vertical_space_light]}>6 digit code</Text>
                    <Item regular>                      
                        <Input                        
                        placeholder=' ********'
                        placeholderTextColor='#BDBDBD'
                        style={styles.placeholder_text}
                        //value={this.state.text}
                        //onChangeText={text => this.setState({ text })}
                        />      
                    </Item>
                    
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('VerifyEmail')}}>
                      <Text style={[styles.label_text_light, styles.vertical_space_light, {textDecorationLine: 'underline'}]} >Haven’t received the code? </Text>
                    </TouchableOpacity>
                    <Button large block style={[{backgroundColor:colors.green}, styles.vertical_space]} onPress={() => {this.props.navigation.navigate('Login')}}>
      			            <Text style={[styles.button_text, {color:colors.white}]}>Complete Registration</Text>
      			        </Button>
                  </Col>
                </Row>                

                <Row size={2}/>
	            <Row size={1}>
	            	<Body>
	            		<TouchableOpacity onPress={() => {this.props.navigation.navigate('')}}>
	                      <Text style={[styles.label_text_light, styles.vertical_space_light, {textDecorationLine: 'underline'}]} > Privacy Policy </Text>
	                    </TouchableOpacity>
	            	</Body>
	            </Row>
              </Col>
              <Col size={8}/>                       
            </Grid>
        
        </Container>
    );
  }
}
