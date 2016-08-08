require('vendor/bootstrap.scss');
require('UserList/List.scss');

var UserItem = require('UserItem/UserItem.jsx');

class UserList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          {
            this.props.members.map( (user) => {
              return <li className="list-group-item"><UserItem id={user.id} name={user.name} getUsers={this.props.getUsers} /></li> ;
            })
          }
        </ul>
      </div>
    );
  }
}

module.exports = UserList;
