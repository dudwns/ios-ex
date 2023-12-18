import React from "react";
import Container from "../Components/Container";
import Contents from "../Components/Contents";
import Button from "../Components/Button";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from "lodash";
// import { FlatList } from "react-native";

const ListItem = styled.TouchableOpacity`
  width: 100%;
  padding: 12px 0;
  border-bottom-color: #aaaaaa;
  border-bottom-width: 1px;
  flex-direction: row;
  justify-content: space-between;
`;

const Label = styled.Text`
  font-size: 20px;
`;

const DeleteButton = styled.Button`
  font-size: 20px;
`;

function List({ navigation }) {
  const [list, setList] = React.useState([]);
  const load = async () => {
    const data = await AsyncStorage.getItem("list");
    if (data !== null) {
      setList(JSON.parse(data));
    }
  };
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      load();
    });

    load();
    return unsubscribe;
  }, [navigation]);

  // _.orderBy(list, ["date"], ["desc"]) 내림차 순으로 하고싶을 때 사용

  const store = (newList) => {
    setList(newList);
    AsyncStorage.setItem("list", JSON.stringify(newList));
  };

  return (
    <Container>
      <Contents>
        {/* <FlatList
          data={_.sortBy(list, "date")}
          keyExtractor={(item) => item.date.toString()}
          renderItem={({ item }) => (
            <ListItem onPress={() => navigation.navigate("Detail", { date: item.date })}>
              <Label>{item.date}</Label>
              <DeleteButton
                title="삭제"
                onPress={() => {
                  store(_.reject(list, (element) => element.date === item.date));
                }}
              />
            </ListItem>
          )}
        /> */}
        {_.sortBy(list, "date").map((item) => {
          return (
            <ListItem
              key={item.data}
              onPress={() => navigation.navigate("Detail", { date: item.date })}
            >
              <Label>{item.date}</Label>
              <DeleteButton
                title="삭제"
                onPress={() => {
                  store(_.reject(list, (element) => element.date === item.date));
                }}
              />
            </ListItem>
          );
        })}
      </Contents>
      <Button onPress={() => navigation.navigate("Form")}>새 일기 작성</Button>
    </Container>
  );
}

export default List;
