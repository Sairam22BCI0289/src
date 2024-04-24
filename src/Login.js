import {Component} from 'react';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            userName:"",
            passWord:"",
            info : [
                    {u:"abcd",p:"1234"},
                    {u:"pqrs",p:"5678"},
                    {u:"efgh",p:"2468"}
            ],
            valid:0,
        }
    }
    checkPassword = () => {
        for (let i in this.info) {
            if (this.userName === i.u) {
                if (this.passWord === i.p) {
                    this.setState({valid:1});
                }
            }
        }
    }
    render() {
        const {userName,passWord,valid} = this.state;
        return (
            <main>
                <h3>Welcome to the home of CSK, the most successful IPL franchise</h3>
                <h6>Please login to view our webiste</h6>
                <form id="login">
                    <input type="text" id="username" name="user" placeholder="Enter username" value={userName} />
                    <input type="password" id="pass" name="pswd" placeholder="Enter password" value={passWord} />
                    <input type="submit" id="sub" value="Login" onSubmit={this.checkPassword} />
                </form>
            </main>
        );
    }
}

export default Login;