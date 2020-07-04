import React from 'react'
import { connect } from 'react-redux'
import App from '../components/app'
import AppActions from '../actions/index'

function mapStateToProps(state) {
  return state
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    Add_Task: (value) => {dispatch(AppActions.addTask(value))},
  }
}

export default connect(//これが子コンポーネントで使える要素（props）
  mapStateToProps,
  mapDispatchToProps
)(App)