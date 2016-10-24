import React from 'react';
const UserComponent = (props) => {
    return (<div> <span> Anjali </span> props.key </div>);
};


class UsersListComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usersList: ["CA","NV"]
        };
    }

    render() {
        if (!this.state.usersList.length) {
            return null;
        }

        return (
            <div className="users-list">
                {
                    this.state.usersList.map((user, index) => {
                        return (
                            <UserComponent
                                key={ index }
                                name={ user.name }
                                age={ user.age } />
                        );
                    })
                }
            </div>
        );
    }
};

export default UsersListComponent;