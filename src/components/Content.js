import { StyleSheet, Text, View } from 'react-native'

const Content = props => (
  <View style={styles.content}>
    <View>
      {props.temp ? <Text style={styles.info}>{Math.round(props.temp)}&#8451;</Text> : null}
    </View>
    <View>{props.weather ? <Text style={styles.info}>{props.weather}</Text> : null}</View>
    <View>{props.city ? <Text style={styles.cityName}>{props.city}</Text> : null}</View>
  </View>
)

export default Content

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent'
  },
  info: {
    fontSize: 50,
    color: 'black',
    paddingLeft: 20,
    paddingTop: 50
  },
  cityName: {
    fontSize: 35,
    paddingLeft: 20,
    paddingTop: 40,
    paddingBottom: 25
  }
})
