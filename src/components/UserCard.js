import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Mail from '@material-ui/icons/Mail'
import Map from '@material-ui/icons/Map'
import CalendarToday from '@material-ui/icons/CalendarToday'
import LocalPhone from '@material-ui/icons/LocalPhone'
import Lock from '@material-ui/icons/Lock'
import Divider from '@material-ui/core/Divider'

const styles = theme => ({
    cardStyle: {
        width: '370px',
        height: '190px',
        margin: '20px',
    },
    iconsLocation: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    hoverColor: {
        '&:hover': {
            color: '#2ba50d',
        },
    },
    contentStyle: {
        margin: '10px',
    },
})

class UserCard extends React.Component {
    state = {
        content: this.props.user.email,
        nameContent: 'email',
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({
                content: this.props.user.email,
                nameContent: 'email',
            })
        }
    }

    handelHover = (nameContent, content) => {
        this.setState({ nameContent, content })
    }

    render() {
        const { classes, user } = this.props
        const { content, nameContent } = this.state

        return (
            <Card className={classes.cardStyle}>
                <CardHeader
                    avatar={
                        <Avatar src={user.picture.large}/>
                    }
                    title={`${user.name.first} ${user.name.last}`}/>
                <Divider/>
                <CardContent className={classes.contentStyle}>
                    {
                        content &&
                        <div>{`my ${nameContent} is: ${content}`}</div>
                    }
                    <div className={classes.iconsLocation}>
                        <IconButton className={classes.hoverColor}
                                    onMouseOver={() => this.handelHover('email', user.email)}>
                            <Mail/>
                        </IconButton>
                        <IconButton className={classes.hoverColor}
                                    onMouseOver={() => this.handelHover('gender', user.gender)}>
                            <AccountCircle/>
                        </IconButton>
                        <IconButton className={classes.hoverColor}
                                    onMouseOver={() => this.handelHover('birthday', user.dob.date)}>
                            <CalendarToday/>
                        </IconButton>
                        <IconButton className={classes.hoverColor}
                                    onMouseOver={() => this.handelHover('address', user.location.street)}>
                            <Map/>
                        </IconButton>
                        <IconButton className={classes.hoverColor}
                                    onMouseOver={() => this.handelHover('phone', user.phone)}>
                            <LocalPhone/>
                        </IconButton>
                        <IconButton className={classes.hoverColor}
                                    onMouseOver={() => this.handelHover('password', user.login.password)}>
                            <Lock/>
                        </IconButton>
                    </div>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(UserCard)