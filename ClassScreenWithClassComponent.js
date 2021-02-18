// import * as React from 'react';
import React, { Component } from 'react';
import { Button, View, Text, ScrollView, StyleSheet } from 'react-native';
import { render } from 'react-dom';
import { ClassComponentFourth } from './ClassComponentFourth'


export class ClassScreenWithClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataNames:[],
        }
        this.state.dataNames = this.props.dataNames
    }

    onPressGoBack() {
        navigation.goBack()
      }

    render(){
		return (
			<ScrollView>
                <View style={Styles.viewMain}>
                    <Text>ClassScreen With ClassComponent</Text>
                    <Text>{this.state.dataNames}</Text>
                    {/* <Text>{route.params.dataNames[1]}</Text> */}
                    
                    <Button 
                    title="Go back" 
                        // onPress={() => 
                        // navigation.goBack()
                        // } 
                        onPress={this.onPressGoBack}
                    />

                    <ClassComponentFourth dataObj={['Hari', '2/05/2020', '10:10 AM']}></ClassComponentFourth>
                    <ClassComponentFourth dataObj={['Hari', '2/05/2020', '10:10 AM']}></ClassComponentFourth>
                    <ClassComponentFourth dataObj={['Sahajand', '7/10/1870', '5:00 PM']}></ClassComponentFourth>
                    <ClassComponentFourth dataObj={['Shreeji', '17/02/2000', '7:30 AM']}></ClassComponentFourth>
                    <ClassComponentFourth dataObj={['Hari', '2/05/2020', '10:10 AM']}></ClassComponentFourth>
                    <ClassComponentFourth dataObj={['Shreeji', '17/02/2000', '7:30 AM']}></ClassComponentFourth>
                    <ClassComponentFourth dataObj={['Sahajand', '7/10/1870', '5:00 PM']}></ClassComponentFourth>
                    <ClassComponentFourth dataObj={['Hari', '2/05/2020', '10:10 AM']}></ClassComponentFourth>
                    <ClassComponentFourth dataObj={['Shreeji', '17/02/2000', '7:30 AM']}></ClassComponentFourth>
                    <ClassComponentFourth dataObj={['Sahajand', '7/10/1870', '5:00 PM']}></ClassComponentFourth>
                    <ClassComponentFourth dataObj={['Shreeji', '17/02/2000', '7:30 AM']}></ClassComponentFourth>
                    <ClassComponentFourth dataObj={['Hari', '2/05/2020', '10:10 AM']}></ClassComponentFourth>
                    <ClassComponentFourth dataObj={['Shreeji', '17/02/2000', '7:30 AM']}></ClassComponentFourth>
                    <ClassComponentFourth dataObj={['Sahajand', '7/10/1870', '5:00 PM']}></ClassComponentFourth>
                
                </View>
            </ScrollView>
            )
        }
}










const Styles = StyleSheet.create({
    viewMain: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    }
  });