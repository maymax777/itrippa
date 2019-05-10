import React, {Component} from 'react';
import {TouchableOpacity, AppRegistry ,StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Picker, Card,CardItem,Body, Input, Label, Form,Item,  Title, Text, Container, Header, Content,Left,Right ,Button, Icon, Badge, Fotter, FooterTab} from 'native-base';
import {SocialIcon, Divider} from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class FooterTabs extends Component<Props> {
	render(){
		return(			
          <FooterTab style={{backgroundColor : 'white'}}>
            <Button vertical>              
              <Icon style={styles.icon} name="profile" type='AntDesign' />
              <Text style={styles.title}>Activities</Text>
            </Button>
            <Button vertical>
              <Icon style={styles.icon} name="shopping-basket" type='FontAwesome'/>
              <Text style={styles.title}>Basket</Text>
            </Button>
            <Button vertical>              
              <Icon style={styles.icon} name="circle" type="Entypo"/>
              <Text style={styles.title}>Explorer</Text>
            </Button>
            <Button vertical>
              <Icon style={styles.icon} name="favorite-border" type="MaterialIcons"/>
              <Text style={styles.title}>Favorites</Text>
            </Button>
            <Button vertical onPress={() => {this.props.navigation.navigate('Profile')} }>
              <Icon style={styles.icon} name="user-o" type='FontAwesome' />
              <Text style={styles.title}>Profile</Text>
            </Button>
          </FooterTab>	       
	    );
	}
}

const styles = StyleSheet.create({
	title:{
		fontSize:9, 
		color:'#3B38CB',
		fontFamily: 'Roboto-Regular',
		fontStyle: 'normal',		
		lineHeight: 15,
	},
	icon:{
		color:'#3B38CB',
		fontSize:24,
	},
});