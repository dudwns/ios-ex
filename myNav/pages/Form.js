import React from "react";
import { Text } from "react-native";
import Container from "../Components/Container";
import Contents from "../Components/Contents";
import Button from "../Components/Button";

function Form({ navigation }) {
  return (
    <Container>
      <Contents>
        <Text>Form</Text>
      </Contents>
      <Button onPress={() => navigation.goBack()}>저장</Button>
    </Container>
  );
}

export default Form;
