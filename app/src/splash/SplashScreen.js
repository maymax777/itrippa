import React from 'react';
import { View, StyleSheet , Text} from 'react-native';
import Logo from '../../assets/svg/splash_screen.svg.js'

const SCREEN_DELAY = 100;

export default class SplashScreen extends React.Component<Props> {    
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
            setTimeout(() => { resolve('OnBoardIn') } , SCREEN_DELAY)
        )
    }

    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
          this.props.navigation.navigate('OnBoardIn');
        }
    }

    render() {
        return (
            <View style={styles.container}>
            <Text>Hello</Text>
                <Logo/>                                
            </View>
        );
      }
}
const styles = StyleSheet.create({
    container:{
        ...StyleSheet.absoluteFill,
        alignItems: 'center', 
        justifyContent: 'center',
    },
});