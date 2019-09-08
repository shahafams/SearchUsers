import React from 'react';
import './App.css';
import SearchBox from './components/SearchBox'
import ResultArea from './components/ResultArea'
import Axios from 'axios'

const getData = () => {
    const res = Axios({
        method: 'GET',
        url: 'https://randomuser.me/api/?results=100&noinfoinc=name,gender,picture,email,dob,location,login',
    })
    return res
}

class App extends React.Component {
  state = {
      data: [],
      filterUsers: [],
      user: null,
  }

    async componentDidMount() {
        const data = await getData()
        this.setState({ data: data.data.results, filterUsers: data.data.results})
    }

    filterSearch = async (name) => {
        const { data } = this.state
        const filterList = data.filter(user => user.name.first.startsWith(name))
        if (filterList) {
            this.setState({ filterUsers: filterList })
        }
    }

    openUserCard = (item) => {
        this.setState({user: item})
    }

    render() {
        const { user, filterUsers} = this.state
        return (
            <div className="App">
                <SearchBox filterSearch={this.filterSearch}
                           users={filterUsers}
                           openUserCard={this.openUserCard}/>
                <ResultArea users={filterUsers} user={user}/>
            </div>
        )
    }
}


export default App;
