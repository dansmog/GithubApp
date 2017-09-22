"use strict";
import React, { PureComponent } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  Animated,
  StatusBar,
  ScrollView,
  FlatList
} from "react-native";
import {
  SquarePagerView,
  TrianglePagerView,
  CirclePagerView
} from "../components/PagerItemView";
import { IndicatorViewPager, PagerTitleIndicator } from "rn-viewpager";

export default class DashboardScreen extends PureComponent {
  state = {
      data: [
          {
              id: 1,
              name: 'Daniel Anthony Juwon',
              job: 'Software Developer',
              description: 'Just some few things i like to say, but i cant say them, because i\'m using react native to code mobile app '
          },
          {
              id: 2,
              name: 'Babalola Damilola John',
              job: 'Software Developer & Machine Learning enthusiast',
              description: 'Just some few things i like to say, but i cant say them, because i\'m using react native to code mobile app '
          },
          {
              id: 3,
              name: 'Gbengba Anifoweshe',
              job: 'Javascript Developer',
              description: 'Just some few things i like to say, but i cant say them, because i\'m using react native to code mobile app '
          },
          {
              id: 4,
              name: 'Badewa Kayode',
              job: 'Backend Developer',
              description: 'Just some few things i like to say, but i cant say them, because i\'m using react native to code mobile app '
          }
      ]
  }
  render() {
    return (
      <Animated.View style={{ flex: 1, backgroundColor: "#3498db" }}>
        <StatusBar backgroundColor="#3498db" barStyle="default" />
        <View>
          {Platform.OS === "ios" && <View style={styles.statusBar} />}
          <View style={styles.toolbarContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                style={styles.backImg}
                source={require("../assets/images/back_arrow.png")}
              />
            </TouchableOpacity>
            <Text style={styles.titleTxt}>TITLE</Text>
          </View>
        </View>
        <IndicatorViewPager
          style={{ flex: 1, flexDirection: "column-reverse" }}
          indicator={this._renderTitleIndicator()}
        >
          <View style={styles.card}>
            <ScrollView>
            {
              this.state.data.map( (item) => {
                return (
                  <View key={item.name} style={styles.cardDetails }>
                    <Text style={styles.cardTitle }>{item.name}</Text>
                    <Text style={styles.cardJobTitle}>{item.job}</Text>
                    <Text style={styles.cardDescription}>{item.description}</Text>
                  </View>
                )
              })
            }
            </ScrollView>
            {/*<FlatList
              key={this.state.data.id}
              data={this.state.data}
              renderItem={({ item }) => {
                <View>
                  <Text>
                    {item.name}
                  </Text>
                  <Text>{item.job}</Text>
                </View>;
              }}
            />*/}

          </View>
          {CirclePagerView()}
          {TrianglePagerView()}
        </IndicatorViewPager>
      </Animated.View>
    );
  }

  _renderTitleIndicator() {
    return (
      <PagerTitleIndicator
        style={styles.indicatorContainer}
        itemTextStyle={styles.indicatorText}
        selectedItemTextStyle={styles.indicatorSelectedText}
        selectedBorderStyle={styles.selectedBorderStyle}
        titles={["REPOS", "ISSUES", "PROFILE"]}
      />
    );
  }
}

const styles = StyleSheet.create({
  indicatorContainer: {
    backgroundColor: 0x00000020,
    height: 48
  },
  indicatorText: {
    fontSize: 14,
    color: 0xffffff99
  },
  indicatorSelectedText: {
    fontSize: 14,
    color: 0xffffffff
  },
  selectedBorderStyle: {
    height: 3,
    backgroundColor: "white"
  },
  statusBar: {
    height: 24,
    backgroundColor: 0x00000044
  },
  toolbarContainer: {
    height: 56,
    backgroundColor: 0x00000020,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16
  },
  backImg: {
    width: 16,
    height: 17
  },
  titleTxt: {
    marginLeft: 36,
    color: "white",
    fontSize: 20
  }, 
  card: {
    backgroundColor: '#f3f3f3',
    padding: 15
  },
  cardDetails: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#f2f2f2",
    padding: 15,
    marginTop: 10,
    borderRadius: 5,
    shadowColor: 'rgba(255,255,255, 0.5)'
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'black',
    lineHeight: 25,
  },
  cardDescription: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 20
  }
});
