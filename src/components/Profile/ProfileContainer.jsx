import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer';
import { Redirect, withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        };
        this.props.getUserProfile(userId);
    }
    render() {
        // if (!this.props.isAuth) return <Redirect to='/login' />
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    };
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.userData,
        isAuth: state.auth.isAuth
    };
};

let WithRouteUrlContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithRouteUrlContainerComponent);