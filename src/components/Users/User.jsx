import React from 'react';
import styles from './Users.module.css'

class User extends React.Component {

    followUser = () => {
        const { id, follow } = this.props;
        follow(id)
    }

    unfollowUser = () => {
        const { id, unfollow } = this.props;
        unfollow(id)
    }
    render() {
        const { id, name, surname, country, city, status, avatar, followed } = this.props
        return (
            <div className={styles.user} id={'user-' + id}>
                <div className={styles.userLeft}>
                    <p className={styles.userAvatar}>
                        <img src={avatar} alt="avatar" />
                    </p>
                    <p className={styles.userFollow}>
                        {
                            followed
                                ? <button onClick={this.unfollowUser} type="button">Unfollow</button>
                                : <button onClick={this.followUser} type="button">Follow</button>
                        }
                    </p>
                </div>
                <div className={styles.userRight}>
                    <p className={styles.userFio}>{name} {surname}</p>
                    <p className={styles.userLocation}>
                        {country} <br /> {city}
                    </p>
                    <p className={styles.userStatus}>
                        {status}
                    </p>
                </div>
            </div>
        )
    }
}

export default User;