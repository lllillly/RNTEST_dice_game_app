import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

const CURRENT_WIDTH = Dimensions.get(`window`).width;

const App = () => {
  const [tab, setTab] = useState(0);

  const _startButtonClickHandler = (value) => {
    setTab(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upArea}>
        {tab === 0 && (
          <TouchableOpacity
            style={styles.startBtn}
            onPressOut={() => _startButtonClickHandler(1)}
          >
            <Text style={styles.startBtnText}>주사위 굴리기</Text>
          </TouchableOpacity>
        )}
        {tab === 1 && (
          <View style={styles.diceArea}>
            <View style={styles.diceTopArea}>
              <View style={styles.diceTopdetailArea}>
                <Text style={styles.writingText}>Image1</Text>
              </View>
              <View style={styles.diceTopdetailArea}>
                <Text style={styles.writingText}>Image2</Text>
              </View>
            </View>
            <View style={styles.diceBottomArea}>
              <View style={styles.diceBottomdetailArea}>
                <Text style={styles.writingText}>Result1</Text>
              </View>
              <View style={styles.diceBottomdetailArea}>
                <Text style={styles.writingText}>Result2</Text>
              </View>
            </View>
          </View>
        )}
      </View>
      <View style={styles.underArea}>
        {tab === 1 && (
          <TouchableOpacity
            style={styles.startBtn}
            onPressOut={() => _startButtonClickHandler(0)}
          >
            <Text style={styles.startBtnText}>홈으로</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upArea: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#82ccdd",
  },
  underArea: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3c6382",
  },
  startBtn: {
    width: CURRENT_WIDTH / 2,
    height: 50,
    backgroundColor: "#487eb0",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  startBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
  diceArea: {
    flex: 1,
  },
  diceTopArea: {
    width: CURRENT_WIDTH,
    flex: 6,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
  diceBottomArea: {
    width: CURRENT_WIDTH,
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  diceTopdetailArea: {
    flex: 1,
    width: CURRENT_WIDTH / 2,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  diceBottomdetailArea: {
    flex: 1,
    width: CURRENT_WIDTH / 2,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  writingText: {
    color: "#273c75",
    fontSize: 25,
    fontWeight: "800",
  },
});

export default App;
