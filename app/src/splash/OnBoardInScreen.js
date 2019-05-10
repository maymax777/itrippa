import React from 'react';
import {StyleSheet, View, Text, Dimensions, Alert, Image,TouchableOpacity} from 'react-native';
import Carousel, {  Pagination , ParallaxImage} from 'react-native-snap-carousel';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const SCREENSHOWDATA = [
    {
        title: 'Sign Up and become a member',
        subtitle: 'Simple and Easy! Just follow few steps and you’re on board!',
        illustration: require('../../assets/img/Artboard_1.png')
    },
    {
        title: 'Personalize your Experience',
        subtitle: 'Choose from hundreds of curated experiences and plans.',
        illustration: require('../../assets/img/Artboard_2.png')
    },
    {
        title: 'Book Fast, Secure and Easy!',
        subtitle: 'Book and pay for your service, fast, easy and secure!',
        illustration: require('../../assets/img/Artboard_3.png')
    },    
];
const SLIDER_1_FIRST_ITEM = 1;

export default class OnBoardInScreen extends React.Component<Props> {        
    constructor (props) {
        super(props);
        this.state = {
            activeSlide: 0,
            entries : SCREENSHOWDATA,            
        };
    }

    _renderItem ({item, index}, parallaxProps, navigate) {        
        return (
            <View style={board_styles.item}>     
                <View style={board_styles.parallax_view}>       
                    <Image source={item.illustration}           
                      style = {board_styles.item_image}
                      resizeMode={'stretch'}/>                                                                
                </View>
                <Text style={board_styles.item_title} numberOfLines={2}>{ item.title }</Text>
                <Text style={board_styles.item_subtitle} numberOfLines={2}>{ item.subtitle }</Text>                                                
            </View>
        );
    }
    get pagination () {
        const { entries, activeSlide } = this.state;        
        return (
            <Pagination
                dotsLength={entries.length}
                activeDotIndex={this.state.activeSlide}
                containerStyle={{ backgroundColor: 'white' , width:'100%'}}              
                dotColor={'#0020C8'}
                dotStyle={board_styles.paginationDot}                
                inactiveDotColor={'#E0E0E0'}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                loop={false}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={3000}                
            />
        );
    }
    renderLoginButton(){        
        return(
            <View style={this.state.activeSlide == 2?board_styles.signup_button_layout:[]}>
            {this.state.activeSlide == 2?
                <TouchableOpacity  onPress={() => this.props.navigation.navigate("Login")} >
                    <Text numberOfLines={1} style={board_styles.signup_button_label}> SingUp/Login </Text>
                </TouchableOpacity>           
                :[]
            }
            </View>
        );
                 
    }

    render () {
        return (
            <View style={board_styles.container}>                
                {this.pagination}
                <Carousel            
                    data={this.state.entries}                    
                    dotsLength={this.state.entries.length}
                    renderItem={this._renderItem}                    
                    hasParallaxImages={true}
                    sliderWidth={screenWidth}
                    itemWidth={screenWidth}
                    onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                />                            
                {this.renderLoginButton()}
            </View>
        );
    }
}
const board_styles = StyleSheet.create({
    container:{
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor:'white',
        flex :1,            
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8,
    },
    item:{                
        width : screenWidth,
        height : screenHeight,     
        justifyContent:'flex-end',
        alignItems:'center'
    },
    item_title:{
        /* Sign Up and become a member */
        position:'absolute',
        width: '82%',
        top: '1%',
        left:'5.6%',        
        right:'9.8%',

        fontFamily: 'RobotoSlab-Bold',
        fontStyle: 'normal',
        //fontWeight: '500',//bold
        fontSize: 36,
        lineHeight: 36,
        display: 'flex',
        alignItems: 'flex-end',
        letterSpacing: -0.02,

        color: '#0020C8',


    },
    item_subtitle:{
        /* Simple and Easy! Just follow few steps and you’re on board! */        
        position:'absolute',
        width: '80%',
        top: '12%',
        left:'5.6%',        
        right:'9.8%',

        fontFamily: 'Nunito-Regular',
        fontSize: 24,
        lineHeight: 28,
        display: 'flex',
        alignItems: 'flex-end',
        letterSpacing: -0.02,

        color: '#4F4F4F',


    },
    parallax_view:{        
        width:'100%',
        height:'90%',                
    },
    item_image:{
        //...StyleSheet.absoluteFill,
        //resizeMode:'stretch',       //enum('cover', 'contain', 'stretch', 'repeat', 'center') 
        width:'100%',
        height : '100%',
    },
    signup_button_layout:{
        backgroundColor:'white',        
        position:'absolute',
        bottom: screenHeight * 0.05,        
        width:'85%',
        height : '8%',       
        alignItems:'center',
        borderRadius:100,
        justifyContent:'center',
    },
    signup_button_label:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 24,/* identical to box height */
        display: 'flex',
        alignItems: 'flex-end',
        letterSpacing: -0.02,

        color: '#005CD7',
    },
});
