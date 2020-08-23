import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import PlayerSprite from './assets/sprites/player-sprite.png'

const playerWidth = Dimensions.get("window").width / 5
const playerHeight = Dimensions.get("window").height / 5


export default function Player() {
    console.log(`Player Sprite Width: ${playerWidth}, Player Sprite Height: ${playerHeight}`)
    return (
        <View>
            <Image style={styles.player_sprite} source={PlayerSprite} />
        </View>
    )
}

const styles = StyleSheet.create({
    player_sprite: {
        resizeMode: "center",
        width: playerWidth,
        height: playerHeight
    }
})