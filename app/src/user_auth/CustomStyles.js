import React, {Component} from 'react';
import { AppRegistry ,StyleSheet} from 'react-native';

export const colors = {
    blue: '#0009DB',
    green: '#00AF4A',
    pink: '#A925DA',    
    white: '#FFF',
    
};


export default StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,        
  },

  title_text:{
  	color:'#00AF4A',
  	fontFamily: 'RobotoSlab-Bold',
	fontStyle: 'normal',
	//fontWeight: 'bold',
	fontSize: 48,
	lineHeight: 48,
  },

  subtitle_text:{
  	fontFamily: 'Roboto',
	fontStyle: 'normal',
	//fontWeight: 'normal',
	fontSize: 18,
	lineHeight: 21,
	display: 'flex',
	alignItems: 'flex-end',

	color: '#828282',
  },
  label_text:{
  	fontFamily: 'Roboto-Bold',
	fontStyle: 'normal',
	//fontWeight: '500',
	fontSize: 20,
	lineHeight: 23,/* identical to box height */
	textTransform: 'uppercase',
	letterSpacing :1,

	color: '#4F4F4F',
  },
  placeholder_text:{
  	fontFamily: 'Roboto',
	fontStyle: 'normal',
	//fontWeight: 'normal',
	fontSize: 21,
	lineHeight: 25,/* identical to box height */
	letterSpacing: 1,

	color: 'black',
	backgroundColor: '#FFFFFF',

  },
  label_text_light:{
  	fontFamily: 'Roboto-Regular',
	fontStyle: 'normal',
	//fontWeight: 'normal',
	fontSize: 18,
	lineHeight: 21,
	color: '#828282',	
  },
  button_text:{
  	paddingVertical:10,
  	fontFamily: 'Roboto-Bold',
	fontStyle: 'normal',
	//fontWeight: 'bold',
	fontSize: 20,
	lineHeight: 23,	
  },
  vertical_space:{
  	paddingVertical:10,
  	marginVertical:10,
  },
  vertical_space_light:{
  	paddingVertical:5,
  	marginVertical:5,
  },

});