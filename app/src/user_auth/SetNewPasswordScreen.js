import React, {Component} from 'react';
import {TouchableOpacity, AppRegistry ,StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Picker, Card,CardItem,Body, Input, Label, Form,Item,  Title, Text, Container, Header, Content,Left,Right ,Button, Icon} from 'native-base';
import {SocialIcon, Divider} from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles ,{colors} from './CustomStyles.js';

export default class SetNewPasswordScreen extends Component<Props> {

  _goBack = () => {this.props.navigation.navigate('ResetPassword')}
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
                    <Text style={[styles.title_text, {color:colors.pink}]}>Set a new Password</Text>
                    <Text style={styles.subtitle_text}>Can't remember your password ?</Text>                  
                    <Text style={styles.subtitle_text}>Fear not. We’ll email you instructions to reset your password.</Text>                  
                  </Col>
                </Row>                
                <Row size={2}>
                  <Col>
                    <Text style={[styles.label_text, styles.vertical_space_light]}>A NEW PASSWORD</Text>
                    <Item regular>                      
                        <Input                        
                        placeholder=' ********'
                        placeholderTextColor='#BDBDBD'
                        style={styles.placeholder_text}
                        //value={this.state.text}
                        //onChangeText={text => this.setState({ text })}
                        />      
                    </Item>
                    <Text style={[styles.label_text, styles.vertical_space_light]}>COMFIRM NEW PASSWORD</Text>
                    <Item regular>                      
                        <Input                        
                        placeholder=' ********'
                        placeholderTextColor='#BDBDBD'
                        style={styles.placeholder_text}
                        //value={this.state.text}
                        //onChangeText={text => this.setState({ text })}
                        />      
                    </Item>
                    <Button large block style={[{backgroundColor:colors.pink}, styles.vertical_space]} onPress={() => {this.props.navigation.navigate('Login')}}>
      			            <Text style={[styles.button_text, {color:colors.white}]}>Set Password</Text>
      			        </Button>
                  </Col>
                </Row>                

                <Row size={2}/>
	            <Row size={1}>
	            	<Body>
	            		<TouchableOpacity onPress={() => {this.props.navigation.navigate('Login')}}>
	                      <Text style={[styles.label_text_light, styles.vertical_space_light, {textDecorationLine: 'underline'}]} > Return to Login </Text>
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
