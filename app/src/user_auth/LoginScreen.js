import React, {Component} from 'react';
import {TouchableOpacity, AppRegistry ,StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Picker, Card,CardItem,Body, Input, Label, Form,Item,  Title, Text, Container, Header, Content,Left,Right ,Button, Icon} from 'native-base';
import {SocialIcon, Divider} from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles ,{colors} from './CustomStyles.js';

export default class LoginScreen extends Component<Props> {
  
  render(){
    return(
        <Container style={{backgroundColor:'#F8F8F8'}}>       
        <Content>
          <Header transparent>
          </Header>

            <Grid style={{height: 700}}>  
              <Col size={8}/>                       
              <Col size={84}>
                <Row size={1.1}>
                  <Col>
                    <Text style={[styles.title_text, {color:colors.blue}]}>Login</Text>
                    <Text style={styles.subtitle_text}>Login to your dashboard and start booking!</Text>                  
                  </Col>
                </Row>                
                <Row size={3}>
                  <Col>
                    <Text style={[styles.label_text, styles.vertical_space_light]}>Email/ Username</Text>
                    <Item regular>                      
                        <Input                        
                        placeholder=' example@domain.com'
                        placeholderTextColor='#BDBDBD'
                        style={styles.placeholder_text}
                        //value={this.state.text}
                        //onChangeText={text => this.setState({ text })}
                        />      
                    </Item>

                    <Text style={[styles.label_text, styles.vertical_space_light]}>Password </Text>
                    <Item regular bordered>                     
                        <Input                        
                        placeholder=' enter your password'
                        placeholderTextColor='#BDBDBD'
                        style={styles.placeholder_text}                       
                        //value={this.state.text}
                        //onChangeText={text => this.setState({ text })}
                    />      
                    </Item>

                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('ResetPassword')}}>
                      <Text style={[styles.label_text_light, styles.vertical_space_light, {textDecorationLine: 'underline'}]} >Forgot my password </Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
                
                <Row size={3.2}>
                  <Content>
                    <Button large rounded block style={[{backgroundColor:colors.blue}, styles.vertical_space]} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={[styles.button_text, {color:colors.white}]}>Sign In</Text>
                    </Button>

                    <Button large rounded bordered block success style={styles.vertical_space} onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={[styles.button_text, {color:colors.green}]}>Register</Text>
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
