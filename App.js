/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { ListView, StyleSheet, Text, View, Image } from "react-native";
import { data } from "./Lib/res/data/demoData";
import Row from "./Lib/layouts/Row";
import Header from "./Lib/layouts/Header"
import Footer from "./Lib/layouts/Footer"
import SectionHeader from "./Lib/layouts/SectionHeader"
import {formatData} from "./Lib/utils/formatData"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#8E8E8E"
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);

    const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
    const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];


    //const ds = new ListView.DataSource({
    //  rowHasChanged: (r1, r2) => r1 !== r2
    //});

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
      getSectionData,
      getRowData,
    });

    const { dataBlob, sectionIds, rowIds } = formatData(data);
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds),
    };

    //this.state = {
    //  dataSource: ds.cloneWithRows(data)
    //};
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={d => <Row {...d} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
        renderHeader={() => <Header />}
        renderFooter={() => <Footer />}
        renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
      />
    );
  }
}
