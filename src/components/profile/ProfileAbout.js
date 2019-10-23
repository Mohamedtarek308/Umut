import React,{Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  Spinner  from '../layout/Spinner';
//import ProfileTop from './ProfileTop';
//import { getProfileById} from '../../actions/profile';

const ProfileAbout = ({
    profile: {
        bio,
        skills,
        user:{name}
    }
}) =>   <div class="profile-about bg-light p-2">
          {bio && (
              <Fragment>
               <h2 class="text-primary">{name.trim().split('')[0]}s Bio</h2>
          <p>{bio}</p>
          <div class="line"></div>
              </Fragment>
          )}
          
          <h2 class="text-primary">Skill Set</h2>
          <div class="skills">
            {skills.map((skill, index) =>(
                 <div key={index} class='p-1'>
                     <i className='fas fa-check' />{skill}
                 </div>
            ))}
          </div>
        </div>

 ProfileAbout.propTypes = {
     profile: PropTypes.object.isRequired
};

export default ProfileAbout;
