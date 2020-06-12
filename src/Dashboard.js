import React,{Component} from 'react';

class Dashboard extends Component{
    render(){
        const {userByMovie, movies, users} = this.props
        return(
            <div>
                <ul>
                {Object.keys(movies).map(movie => {
                    return userByMovie[movie]
                    ?<li key={movie}>
                        <h2>{movies[movie].name}</h2>
                        <p>Liked By:</p>
                        <ul>
                        {
                            userByMovie[movie].map((user)=>{
                                return <li key={user}>{users[user].name}</li>;
                            })
                        }
                        </ul>
                    </li>
                    :<li key={movie}>
                        <h2>{movies[movie].name}</h2>
                        <p>None of the current users liked this movie</p>
                    </li>
                })}
                </ul>
            </div>
        )
    }
}
export default Dashboard;