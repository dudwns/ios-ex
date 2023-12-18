import * as React from "react";
import { Button, SafeAreaView, Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import styled from "styled-components/native";
import _ from "lodash";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${Constants.statusBarHeight}px;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Ball = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${(props) => {
    if (props.value < 11) {
      return "yellow";
    } else if (props.value < 21) {
      return "blue";
    } else if (props.value < 31) {
      return "red";
    } else if (props.value < 41) {
      return "green";
    } else if (props.value <= 45) {
      return "purple";
    }
  }};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  margin-bottom: 10px;
`;

const Label = styled.Text``;

let numbers = [];

function getNumbers() {
  let newNumbers = _.shuffle(numbers);
  newNumbers.length = 6;
  return newNumbers;
}

// 1부터 45 숫자를 생성
_.times(45, (n) => numbers.push(n + 1));

function SingleNumber(props) {
  return (
    <Ball key={props.number} value={props.number}>
      <Label>{props.number}</Label>
    </Ball>
  );
}

export default function LottoGenerator() {
  const [displayNumbers, setNumbers] = React.useState(getNumbers());

  return (
    // <SafeAreaView style = { styles.container }>
    //   <View style = { styles.row }>
    //     <View style = { styles.ball }>
    //       <Text style = { styles.text }>{ displayNumbers[0] }</Text>
    //     </View>
    //     <View style = { styles.ball }>
    //       <Text style = { styles.text }>{ displayNumbers[1] }</Text>
    //     </View>
    //     <View style = { styles.ball }>
    //       <Text style = { styles.text }>{ displayNumbers[2] }</Text>
    //     </View>
    //     <View style = { styles.ball }>
    //       <Text style = { styles.text }>{ displayNumbers[3] }</Text>
    //     </View>
    //     <View style = { styles.ball }>
    //       <Text style = { styles.text }>{ displayNumbers[4] }</Text>
    //     </View>
    //     <View style = { styles.ball }>
    //       <Text style = { styles.text }>{ displayNumbers[5] }</Text>
    //     </View>
    //   </View>
    //   <Button title="다시하기"
    //     onPress= { () => setNumbers(_.shuffle( numbers ))}
    //   />
    // </SafeAreaView>
    <Container>
      <Row>
        {displayNumbers.map((item) => {
          {
            return <SingleNumber number={item} />;
          }
        })}
      </Row>
      <Button
        title="새로받기"
        onPress={() => {
          setNumbers(getNumbers());
        }}
      />
    </Container>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: Constants.statusBarHeight ,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   row: {
//     flexDirection: 'row',
//   },
//   ball: {
//     width: 50,
//     height: 50 ,
//     backgroundColor: '#e5e5e5',
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 24 ,
//   },
//   text: {
//     fontSize: 20,
//     color: '#0000FF',
//     fontWeight: 'bold',
//   },
// });
