/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  View
} from 'react-native';

class MagicLifeCounter extends Component {
  constructor(props) {
    super(props);
    this.press1add = this.press1add.bind(this)
    this.press2add = this.press2add.bind(this)
    this.press1min = this.press1min.bind(this)
    this.press2min = this.press2min.bind(this)
    this.press1add10 = this.press1add10.bind(this)
    this.press2add10 = this.press2add10.bind(this)
    this.press1min10 = this.press1min10.bind(this)
    this.press2min10 = this.press2min10.bind(this)
    this.press1addPoison = this.press1addPoison.bind(this)
    this.press2addPoison = this.press2addPoison.bind(this)
    this.random = this.random.bind(this)
    this.restart = this.restart.bind(this)
    this.timer = this.timer.bind(this)
    this.timerCheck = this.timerCheck.bind(this)
    this.restartTime = this.restartTime.bind(this)
    this.poisonToggle = this.poisonToggle.bind(this)
    this.state = {
      p1: 20,
      p2: 20,
      poison1: '',
      poison2: '',
      randomNum: '',
      time: '',
      timeOff: true,
      timeColor: 'red'
    };
  }
  press1add() {
    this.setState({ p1: this.state.p1 + 1 })
  }
  press2add() {
    this.setState({ p2: this.state.p2 + 1 })
  }
  press1min() {
    this.setState({ p1: this.state.p1 - 1 })
  }
  press2min() {
    this.setState({ p2: this.state.p2 - 1 })
  }
  press1add10() {
    this.setState({ p1: this.state.p1 + 10 })
  }
  press2add10() {
    this.setState({ p2: this.state.p2 + 10 })
  }
  press1min10() {
    this.setState({ p1: this.state.p1 - 10 })
  }
  press2min10() {
    this.setState({ p2: this.state.p2 - 10 })
  }
  press1addPoison() {
    this.setState({ poison1: this.state.poison1 + 1 })
  }
  press2addPoison() {
    this.setState({ poison2: this.state.poison2 + 1 })
  }
  poisonToggle() {
    if (this.state.poison1 === '') {
        this.setState({
          poison1: 0,
          poison2: 0
       })
     }
     else {
       this.setState({
         poison1: '',
         poison2: ''
       })
     }
  }
  random() {
    this.setState({ randomNum: (Math.floor(Math.random() * 20) + 1) })
  }
  restart() {
    this.setState({
      p1: 20,
      p2: 20,
      poison1: 0,
      poison2: 0,
      randomNum: '',
      time: '',
      timeOff: true,
      timeColor: 'red',
      poison1: '',
      poison2: ''
    })
  }
  restartTime() {
    clearInterval(this.interval)
    delete this.interval
    this.setState({
      time: 0,
      timeOff: true,
      timeColor: 'red'
    })
  }
  timerCheck() {
    if (this.state.timeOff === true) {
      if (this.interval === undefined) {
        this.interval = setInterval(this.timer, 1000)
      }
      this.setState({
        timeOff: this.state.timeOff = false,
        timeColor: 'lime'
      })
    }
    else {
      this.setState({
        timeOff: this.state.timeOff = true,
        timeColor: 'red'
      })
    }
  }
  timer() {
    if (this.state.timeOff === true) {
      this.setState({ time: this.state.time })
    }
    else if (this.state.time === '') {
      this.setState({ time: 1 })
    }
    else {
      this.setState({ time: this.state.time + 1 })
    }
  }

  render() {
    var timeColor = {color: this.state.timeColor}
    return (
      <Image source={require('./img/background.jpg')} style={styles.container} >
        <View style={styles.player2Container}>
            <View style={styles.playerMinContainer}>
                <TouchableWithoutFeedback onPress={this.press2min} onLongPress={this.press1min10}>
                    <Text style={[styles.sign,styles.minus]}>-</Text>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.playerLifeContainer}>
                <Text style={styles.lifeTotal}>{this.state.p2}</Text>
            </View>
            <View style={styles.playerPlusContainer}>
                <TouchableWithoutFeedback onPress={this.press2add} onLongPress={this.press2add10}>
                    <Text style={[styles.sign,styles.plus]}>+</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>

        <View style={styles.centerContainer}>
            <View style={styles.poisonPlayer2Container}>
                <TouchableWithoutFeedback onPress={this.press2addPoison}>
                    <Text style={styles.poisonCount}>{this.state.poison2}</Text>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.diceContainer}>
                <Text style={styles.centerText}>{this.state.randomNum}</Text>
            </View>
            <View style={styles.timeContainer}>
                <Text style={[styles.centerText, timeColor]}>{this.state.time}</Text>
            </View>
            <View style={styles.poisonPlayer1Container}>
                <TouchableWithoutFeedback onPress={this.press1addPoison}>
                    <Text style={styles.poisonCount}>{this.state.poison1}</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>

        <View style={styles.player1Container}>
            <View style={styles.bottomTextContainer}>
                <View style={styles.playerMinContainer}>
                    <TouchableWithoutFeedback onPress={this.press1min} onLongPress={this.press1min10}>
                      <Text style={[styles.sign,styles.minus]}>-</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.playerLifeContainer}>
                    <Text style={styles.lifeTotal}>{this.state.p1}</Text>
                </View>
                <View style={styles.playerPlusContainer}>
                    <TouchableWithoutFeedback onPress={this.press1add} onLongPress={this.press1add10}>
                      <Text style={[styles.sign,styles.plus]}>+</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={styles.iconsContainer}>
                <View style={styles.iconsSubContainer}>
                    <TouchableWithoutFeedback onPress={this.restart}>
                        <Image source={require('./img/reset.png')} style={styles.icon}></Image>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.iconsSubContainer}>
                    <TouchableWithoutFeedback onPress={this.random}>
                        <Image source={require('./img/icosahedron.png')} style={styles.icon}></Image>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.iconsSubContainer}>
                    <TouchableWithoutFeedback onPress={this.timerCheck} onLongPress={this.restartTime}>
                        <Image source={require('./img/clock.png')} style={styles.icon}></Image>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.iconsSubContainer}>
                    <TouchableWithoutFeedback onPress={this.poisonToggle}>
                        <Image source={require('./img/poison.png')} style={styles.iconPoison}></Image>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)',
    resizeMode: 'stretch'
  },
  player1Container: {
    flex: 4,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  bottomTextContainer: {
    flexDirection: 'row'
  },
  centerContainer: {
    flex: 2.5,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  player2Container: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '180deg'}]
  },
  playerLifeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerMinContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  playerPlusContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  diceContainer: {
    flex: 1
  },
  timeContainer: {
    flex: 1
  },
  poisonPlayer1Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  poisonPlayer2Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '180deg'}]
  },
  centerText: {
    fontSize: 60,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Heiti TC',
    shadowOffset:{
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 1.0
  },
  poisonCount: {
    fontSize: 60,
    textAlign: 'center',
    color: 'rgb(189, 99, 245)',
    textDecorationLine: "underline",
    shadowOffset:{
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 1.0
  },
  sign: {
    margin: 10,
    shadowOffset:{
      width: 1.5,
      height: 1.5,
    },
    shadowColor: 'black',
    shadowOpacity: 1.0
  },
  plus: {
    fontSize: 80,
    color: 'lime'
  },
  minus: {
    fontSize: 90,
    color: 'red'
  },
  lifeTotal: {
    fontSize: 80,
    paddingTop: 10,
    color: 'white',
    shadowOffset:{
      width: 1.5,
      height: 1.5,
    },
    shadowColor: 'black',
    shadowOpacity: 1.0
  },
  iconsContainer: {
    height: 80,
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.50)',
    alignItems: 'center',
    borderRightWidth: 6,
    borderLeftWidth: 6,
    borderBottomWidth: 6
  },
  iconsSubContainer: {
    flex: 1,
    alignItems: 'center'
  },
  diceImg: {
    width: 50,
    height: 50
  },
  skullImg: {
    width: 40,
    height: 40
  },
  icon: {
    width: 50,
    height: 50
  },
  iconPoison: {
    width: 40,
    height: 60
  }
});

AppRegistry.registerComponent('MagicLifeCounter', () => MagicLifeCounter);
