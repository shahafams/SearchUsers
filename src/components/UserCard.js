import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'

const styles = theme => ({
    cardStyle: {
        width: '350px',
        margin: '20px',
    },
});

class UserCard extends React.Component {
    render() {
        const {classes, user} = this.props

        return (
            <Card className={classes.cardStyle}>
                <CardHeader
                    avatar={
                        <Avatar src={user.picture.medium}/>
                    }
                    title={`${user.name.first} ${user.name.last}`}/>
                <CardContent>
                    <div>{`email: ${user.email}`}</div>
                    <div>{`gender: ${user.gender}`}</div>
                    <div>{`birthday: ${user.dob.date}`}</div>
                    <div>{`address: ${user.location.street}`}</div>
                    <div>{`phone: ${user.phone}`}</div>
                    <div>{`password: ${user.login.password}`}</div>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(UserCard)