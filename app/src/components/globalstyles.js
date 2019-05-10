import React, {Component} from 'react';
import { AppRegistry ,StyleSheet} from 'react-native';

export const colors = {
    blue: '#0009DB',
    green: '#00AF4A',
    pink: '#A925DA',    
    white: '#FFF',
    
};
export default StyleSheet.create({
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

	title_text:{
	  	fontFamily: 'RobotoSlab-Bold',
		fontStyle: 'normal',		
		fontSize: 48,
		lineHeight: 48,
	},
	  
	subtitle_text:{
	  	fontFamily: 'Roboto',
		fontStyle: 'normal',		
		fontSize: 18,
		lineHeight: 21,
		display: 'flex',
		alignItems: 'flex-end',	
	},
});