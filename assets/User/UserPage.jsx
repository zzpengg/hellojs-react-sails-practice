require('vendor/bootstrap.scss');
require('User/User.scss');

var UserList = require('UserList/UserList.jsx');
var UserAddBox = require('UserAddBox/UserAddBox.jsx');


class UserPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      members : []
    }
    this.getUsers = this.getUsers.bind(this);
  }

  componentWillMount(){
    this.getUsers();
  }

  getUsers(){
    $.ajax({
      url: '/user',
      type: 'get',
      success: (result) => {
        this.setState({members: result})
        console.log(result);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  render() {
    return (
      <div>
        <h1>User List</h1>
        <UserList getUsers={this.getUsers} members={this.state.members} />
        <UserAddBox getUsers={this.getUsers}/>
      </div>
    );
  }
}

module.exports = UserPage;
