require('vendor/bootstrap.scss');
require('UserItem/Item.scss');

class UserItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      members: []
    }
    this.delUser = this.delUser.bind(this);
  }

  delUser(){
    $.ajax({
      url: 'user/destroy/' + this.props.id,
      type: 'delete',
      success: (result) => {
        this.props.getUsers();
        console.log(result);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  render() {
    return (
      <div className="">
        <label className="">ID: {this.props.id} </label>
        <span className=""> name: {this.props.name}</span>
        <button className="close" onClick={this.delUser}>&times;</button>
      </div>
    );
  }
}

module.exports = UserItem;
