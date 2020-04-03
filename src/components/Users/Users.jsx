import React from 'react';
// import User from './User'
import styles from './Users.module.css'
import User from './User';

const Users = ({ users, follow, unfollow }) => {

    const userElements = users.map((user) => (
        <User {...user}
            follow={follow}
            unfollow={unfollow}
            key={user.id} />))

    return (
        <div className={styles.users}>
            {userElements}
        </div>
    )
}

export default Users;