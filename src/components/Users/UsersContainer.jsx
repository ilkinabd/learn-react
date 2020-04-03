import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC } from '../../redux/usersReducer';

const mapStateToProps = ({ usersPage: {
    users
} }) => ({
    users
});

const mapDispatchToProps = (dispatch) => ({
    follow: (id) => dispatch(followAC(id)),
    unfollow: (id) => dispatch(unfollowAC(id)),
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;