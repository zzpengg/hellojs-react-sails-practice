require('vendor/bootstrap.scss');
require('UserAddBox/Box.scss');

class UserAddBox extends React.Component {
  constructor(props){
    super(props);
    this.createUser = this.createUser.bind(this);
  }

  createUser(){
    $.ajax({
      url: '/user/create?name=' + this.input.value ,
      type: 'get',
      success: (result) => {
        this.props.getUsers();
        console.log(result);
      },
      error: (error) => {
        console.log(error);
      }
    });
    this.input.value = '';
  }

  render() {
    return (
      <div>
        <div className='form-group'>
          <p className="form-control-static">UserAddBox</p>
          <input className="form-control" type="text" ref={(input) => this.input = input } placeholder="input your name"></input>
        </div>
        <button className='btn btn-primary' onClick={this.createUser}>submit</button>
      </div>
    );
  }
}

module.exports = UserAddBox;
