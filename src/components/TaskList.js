import React from 'react';
import { css } from 'emotion';
import styled from '@emotion/styled';

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks,
    };
  };

  render() {
    return (
      <ul>
        {this.props.tasks.map((task, index) => {
          return <li key={index}>{task}</li>
        })}
      </ul>
    );
  };
};