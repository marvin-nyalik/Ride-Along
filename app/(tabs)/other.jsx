import React, { Component } from "react";
import { Text, View, Pressable } from "react-native";
import { Link } from "expo-router";

export class other extends Component {
  render() {
    return (
      <View className="flex-1 justify-center items-center">
        <Text> textIn Other Component </Text>
        <Link href="/explore" asChild>
          <Pressable>
            <Text>Explore</Text>
          </Pressable>
        </Link>
        <Link href='/settings' className="mt-4">settings</Link>
      </View>
    );
  }
}

export default other;
