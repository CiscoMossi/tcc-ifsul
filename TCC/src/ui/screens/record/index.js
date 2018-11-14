import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { gradientColors } from '../default'
import styles from './style'

export class RecordScreen extends React.Component {
  state = {
    recording: false,
  }

  render() {
    const iconName = this.state.recording ? 'stop' : 'microphone'
    const action = this.state.recording ? 'parar a gravação' : 'gravar'

    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>Aperte para {action}</Text>

        <TouchableWithoutFeedback onPress={() => this.setState({ recording: !this.state.recording })}>
          <LinearGradient 
            style={styles.ball}
            start={{ x: 0.75, y: 0.25 }} 
            end={{x: 0.25, y: 0.75}} 
            locations={[0, 0.25, 0.5, 0.75]}
            colors={gradientColors} 
          >
            <Icon name={iconName} size={110} color="#fff" />
          </LinearGradient>
        </TouchableWithoutFeedback>

        <Text style={styles.text}>00:00</Text>
      </View>
    )
  }
}