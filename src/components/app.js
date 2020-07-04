import React, { Component } from 'react';
import { css } from 'emotion';
import styled from '@emotion/styled';
import TaskList from './TaskList';
import AppInput from './AppInput';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isValidate: false,
    };
  };

  hundleChange({ value }) {
    this.setState({ value: value });
  };

  initTaskInput() {
    this.setState({ value: '' });
  };

  hundleBtnClick(e) {
    e.preventDefault();
    if (!this.state.value) {
      this.setState({ isValidate: true });
      return;
    };

    this.setState({ isValidate: false });
    this.props.Add_Task(this.state.value);
    this.initTaskInput();
  };

  render() {
    const H1 = styled.h1({
      margin: '0',
    });

    const container = css({
      padding: '10px',
      width: '600px',
      margin: '0 auto',
      border: 'solid 1px #333',
    });

    const inner = css({
      display: 'flex',
      '& > div': {
        width: '49%',
      },
      '& > div:first-child': {
        marginRight: '2%',
        borderRight: 'solid 1px #333',
      },
    });

    const taskContainer = css({
    });

    return (
      <div className={container}>
        <H1>TODOアプリ</H1>
        <div className={inner}>
          <div className={taskContainer}>
            <h2>タスク一覧</h2>
            <TaskList tasks={this.props.tasks} />
          </div>
          <form onSubmit={(e) => {this.hundleBtnClick(e)}}>
            <div>
              <AppInput
                name="addTask"
                value={this.state.value}
                placeholder="タスクを追加"
                onChange={e => this.hundleChange(e)}
              />
              <button>追加</button>
              {this.renderStatusMessage()}
            </div>
          </form>
        </div>
      </div>
    );
  };

  renderStatusMessage() {
    if (!this.state.isValidate) return;

    return (
      <p>未入力です</p>
    );
  };
};
