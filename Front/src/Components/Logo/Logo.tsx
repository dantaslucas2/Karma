import React, { Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import './Logo.css';
import logotipoImage from '../../Assets/images/logo.png';
import { transform } from 'typescript';

class Logo extends Component<IPropLogo> {

    render(){


      const logoInfo = this.props

      const styles = StyleSheet.create({
        logotipo: {
          width: logoInfo.width,
          height: logoInfo.heigth,
          aspectRatio: 1.2, 
          resizeMode: 'contain'        
        },
        rowLogotipo:{
          flex: 1,
          width:"100vw",
          alignItems: "center"
        }
      });
      
      return (
        <View style={styles.rowLogotipo}>
          <Image
            style={styles.logotipo}
            source={{uri:logotipoImage}}
          />
        </View>

      );
    }
}

export default Logo;