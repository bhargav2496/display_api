import React, { Component } from 'react';

class Users extends Component {
  constructor(props) {
    super(props);


    this.state = {
      items1: null,
      items2: null,
      items3: null,
      fname1: null,
      fname2: null,
      fname3: null,
      lname1: null,
      lname2: null,
      lname3: null,
    };
  }


  componentDidMount() {

    fetch('https://reqres.in/api/users/1')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items1: json.data.email,
          fname1: json.data.first_name,
          lname1: json.data.last_name
        })
      }).catch((err) => {
        console.log(err);
      });

    fetch('https://reqres.in/api/users/3')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items2: json.data.email,
          fname2: json.data.first_name,
          lname2: json.data.last_name
        })
      }).catch((err) => {
        console.log(err);
      });

    fetch('https://reqres.in/api/users/10')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items3: json.data.email,
          fname3: json.data.first_name,
          lname3: json.data.last_name,
        })
      }).catch((err) => {
        console.log(err);
      });
  }


  render() {

    return (
      <table className="table33">
        <tr className="table44">
          <th>User</th>
          <th>Email</th>
        </tr>
        <tr className="table44">
          <td>{this.state.fname1 + "" + this.state.lname1}</td>
          <td><a href="this.state.items1">{this.state.items1}</a></td>
        </tr>
        <tr className="table44">
          <td>{this.state.fname2 + "" + this.state.lname2}</td>
          <td><a href="this.state.items2">{this.state.items2}</a></td>
        </tr>
        <tr className="table44">
          <td>{this.state.fname3 + "" + this.state.lname3}</td>
          <td><a href="this.state.items3">{this.state.items2}</a></td>
        </tr>

      </table>

    );
  }
}
export default Users;