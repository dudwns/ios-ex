import React from "react";
import { Text } from "react-native";
import Container from "../Components/Container";

function Detail({ navigation }) {
  return (
    <Container>
      <Text>Detail</Text>
      <Button title="목록으로" onPress={() => navigation.goBack()} />
    </Container>
  );
}

export default Detail;
