'use strict'
import React, { PureComponent } from 'react'
import { StyleSheet, View, Text, Platform, Image, TouchableOpacity, Animated, StatusBar } from 'react-native'
import { SquarePagerView, TrianglePagerView, CirclePagerView } from '../components/PagerItemView'
import { IndicatorViewPager, PagerTitleIndicator } from 'rn-viewpager'

export default class DashboardScreen extends PureComponent {
    render () {
        return (
            <Animated.View style={{flex: 1, backgroundColor: '#3498db'}} >
                <StatusBar
                    backgroundColor="#3498db"
                    barStyle="default"
                />
                <View >
                    {Platform.OS === 'ios' && <View style={styles.statusBar} />}
                    <View style={styles.toolbarContainer} >
                        <TouchableOpacity onPress={() => this.props.navigation.goBack() } >
                            <Image style={styles.backImg} source={require('../assets/images/back_arrow.png')} />
                        </TouchableOpacity>
                        <Text style={styles.titleTxt} >TITLE</Text>
                    </View>
                </View>
                <IndicatorViewPager
                    style={{flex: 1, flexDirection: 'column-reverse'}}
                    indicator={this._renderTitleIndicator()}
                >
                    {SquarePagerView()}
                    {CirclePagerView()}
                    {TrianglePagerView()}
                </IndicatorViewPager>
            </Animated.View>
        )
    }

    _renderTitleIndicator () {
        return (
            <PagerTitleIndicator
                style={styles.indicatorContainer}
                itemTextStyle={styles.indicatorText}
                selectedItemTextStyle={styles.indicatorSelectedText}
                selectedBorderStyle={styles.selectedBorderStyle}
                titles={['REPOS', 'ISSUES', 'PROFILE']}
            />
        )
    }
}

const styles = StyleSheet.create({
    indicatorContainer: {
        backgroundColor: 0x00000020,
        height: 48
    },
    indicatorText: {
        fontSize: 14,
        color: 0xFFFFFF99
    },
    indicatorSelectedText: {
        fontSize: 14,
        color: 0xFFFFFFFF
    },
    selectedBorderStyle: {
        height: 3,
        backgroundColor: 'white'
    },
    statusBar: {
        height: 24,
        backgroundColor: 0x00000044
    },
    toolbarContainer: {
        height: 56,
        backgroundColor: 0x00000020,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    backImg: {
        width: 16,
        height: 17
    },
    titleTxt: {
        marginLeft: 36,
        color: 'white',
        fontSize: 20
    }
})