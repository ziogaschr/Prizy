import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Spinner } from 'native-base'

class FullscreenSpinner extends Component {

  render () {
    return (
      <Container>
        <Spinner style={styles.spinnerStyle}/>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    alignSelf: 'center'
  }
})

export default FullscreenSpinner