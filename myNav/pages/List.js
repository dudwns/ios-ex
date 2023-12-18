import React from "react";
import { Text } from "react-native";
import Container from "../Components/Container";
import Contents from "../Components/Contents";
import Button from "../Components/Button";

function List({ navigation }) {
  return (
    <Container>
      <Contents>
        <Text>목록 표시</Text>
      </Contents>
      <Button onPress={() => navigation.navigate("Form")}>새 일기 작성</Button>
    </Container>
  );
}

export default List;
