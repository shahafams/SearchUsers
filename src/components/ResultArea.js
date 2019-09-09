import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import SearchResult from './SearchResult'
import UserCard from './UserCard'

const styles = theme => ({
    location: {
        display: 'flex',
    },
    userLocation: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
    },
    usersResultLocation: {
        width: '320px',
    },
})

class ResultArea extends React.Component {
    render() {
        const { classes, users, user } = this.props

        return (
            <div className={classes.location}>
                <div className={classes.usersResultLocation}>
                    {
                        users.map((user, index) => (
                            <SearchResult key={index} user={user}/>
                        ))
                    }
                </div>
                <div className={classes.userLocation}>
                    {
                        user && (
                            <UserCard user={user}/>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ResultArea)