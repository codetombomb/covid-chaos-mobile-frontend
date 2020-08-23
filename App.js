import React, { Component } from "react";
import { StyleSheet, StatusBar, Text, Dimensions, View, Image } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";

import Player from './Player'
import BackGroundCovid from './assets/backgrounds/coronavirus-background.jpg'


const { height, width } = Dimensions.get("window")


export default class App extends Component {
  render() {
    return (
      <GameEngine>
        <StatusBar hidden={true} />
        <View style={styles.container}>
          <Image style={styles.backgroundImage} source={BackGroundCovid} />
        </View>
        <Player />
      </GameEngine>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  text: {
    padding: 20,
    fontSize: 20
  },
  backgroundImage: {
    width: width,
    height: height
  }
});
