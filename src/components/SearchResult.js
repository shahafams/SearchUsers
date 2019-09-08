import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'

const styles = theme => ({
    cardStyle: {
        width: '280px',
        margin: '20px',
    },
})

class SearchResult extends React.Component {
    render() {
        const { classes, user } = this.props

        return (
            <Card className={classes.cardStyle}>
                <CardHeader
                    avatar={
                        <Avatar src={user.picture.thumbnail}/>
                    }
                    title={`${user.name.first} ${user.name.last}`}/>
                <CardContent>
                    <div>{user.email}</div>
                    <div>{user.gender}</div>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(SearchResult)