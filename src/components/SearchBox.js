import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Search from '@material-ui/icons/Search'
import Creatable from 'react-select'
const styles = theme => ({
    filedLocation: {
        display: 'flex',
        marginLeft: '50px',
    },
    inputSize: {
      width: '200px',
    },
})

class SearchBox extends React.Component {
    state = {
        name: '',
        selectedUser: null,
    }

    handleSelectedChange = () => event => {
        const { users, filterSearch } = this.props
        if (event) {
            const user = users.filter(user => user.login.uuid === event.value)
            this.setState({ name: event.label, selectedUser: user[0] })
        } else {
            this.setState({ name: '', selectedUser: null })
            filterSearch('')
        }
    }

    handleInputChange = (event) => {
        const { filterSearch } = this.props
        filterSearch(event)
    }

    handleClick = () => event => {
        const { openUserCard } = this.props
        const { selectedUser } = this.state
        if (selectedUser) {
            openUserCard(selectedUser)
        }
    }

    options = () => {
        const { users } = this.props
        if (users) {
            return users.map(user => ({ value: user.login.uuid, label: user.name.first }))
        }
        return null
    }

    render() {
        const { classes } = this.props
        const optionsFunc = this.options()
        return (
            <div className={classes.filedLocation}>
                <Creatable
                    id="standard-name"
                    label="search user"
                    className={classes.inputSize}
                    isClearable
                    options={optionsFunc}
                    onChange={this.handleSelectedChange()}
                    onInputChange={(...args) => {
                        if(args[1].action === 'input-change'){
                            this.handleInputChange(args[0])
                        }
                    }}
                />
                <IconButton onClick={this.handleClick()}><Search/></IconButton>
            </div>
        )
    }
}

export default withStyles(styles)(SearchBox)