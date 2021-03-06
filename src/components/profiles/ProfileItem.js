import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
    profile: {
        user:{_id, name, avatar},
        status,
        company,
        location,
        skills
    } 
}) => {
    return(
         <div className="profile bg-light">
        <img src={avatar} alt="" className="round-img"/>
        <div>
          <h2>{name}</h2>
          <p>{status} {company && <spin> at {company} </spin>}</p>
          <p className="my-2">{location && <spin>{location}</spin>}</p>  
        <Link to={'/profile/${_id}'} className="btn btn-primary" >view profile</Link>
        </div>
        <ul>
            {skills.slice(0,4).map((skill,index) => (
                <li key={index} className='text-primary'>
               <i className=''fas fa-check/>{skill}
                </li>
            ))}
        </ul>
        </div>
    );
};
 
ProfileItem.propTypes ={
    profile: PropTypes.object.isRequired
};
export default ProfileItem;