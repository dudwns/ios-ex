import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { theme } from "./theme";
import styled, { ThemeProvider } from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  align-self: flex-start;
  margin: 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

export default function App() {
  const width = Dimensions.get("window").width;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor={theme.background} />
        <Title>TODO List</Title>
      </Container>
    </ThemeProvider>
  );
}
