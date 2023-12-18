import React, { useCallback } from "react";
import {
  Button,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import { Navigationcontainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components/native";

// const screenList = [
//   {key: 'LottoGenerator', title: '로또 번호 생성기', link:'LottoGenerator'},
//   {key: 'ClockDiggital', title: '디지털 시계', link:'ClockDigital'},
// ]

const screenList = [
  { id: 1, title: "로또 번호 생성기", link: "LottoGenerator" },
  { id: 2, title: "디지털 시계", link: "ClockDigital" },
];

function HomeP({ navigation }) {
  const renderItem = useCallback(({ item }) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate(item.link);
        }}
      >
        <LinkItem>
          <Text>{item.title}</Text>
        </LinkItem>
      </Pressable>
    );
  }, []);

  return (
    <>
      <FlatList data={screenList} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </>
  );
}

const LinkItem = styled.View`
  padding: 20px 12px;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
  background-color: #00ff00;
`;

export default HomeP;
