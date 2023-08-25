import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { styled } from "styled-components/native";
// import { auth } from "../firebase";

const Container = styled.View`
  flex: 1;
  background-color: #000;
  justify-content: center;
  aligh-items: center;
`;

const Splash = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Register");
      } else {
        navigation.replace("Login");
      }
    });
  });

  return (
    <>
      <StatusBar style="light" />
      <Container />
    </>
  );
};

export default Splash;
