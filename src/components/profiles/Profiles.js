import React,{Fragment, useEffect} from 'react';
//import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import {getProfiles, getCurrentProfile} from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading} } ) => {
      useEffect( () => {
        getProfiles();
    },[getCurrentProfile]);
    return <Fragment> { loading? <Spinner /> : <Fragment>
      <h1 className="large text-primary">Developers</h1>
      <p className="lead">
      <i className="fab fa-connectdevelop"></i>Brows and connect with Developers
      </p>
      <div className="profiles">
         {profiles.length > 0 ? (
            profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile}/>
            ))
         ) : <h4>no profile found..</h4>} 
       </div>
     </Fragment>
    }</Fragment>
};

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.Profile
});

export default connect(mapStateToProps,{getProfiles})(Profiles);