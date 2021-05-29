import React, { Component } from 'react';
import Table from '../Components/Table';

class UsersListPage extends Component {
  getUserId = e => {
    console.log(e.target);
    console.log(e.currentTarget);
  };
  render() {
    return (
      <div>
        <Table getUserId={this.getUserId} />
      </div>
    );
  }
}

export default UsersListPage;
