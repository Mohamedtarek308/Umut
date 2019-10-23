import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteExducation } from '../../actions/profile'; 

const Education = ({education, deleteExducation}) => {
const educations = educations.map(edu=>(
    <tr key={edu._id}>
        <td>{edu.school}</td>
        <td className='hide-sm'>{edu.degree}</td>
        <td>
           <Moment format='YYY/MM/DD'>{}edu.format</Moment> -{''}
           {edu.to == null ?(
               'now'
            ) : (
                <Moment format='YYY/MM/DD'>{}edu.format</Moment>
            )}
        </td>
        <td>
            <bottom onClick={() => deleteExducation(edu.id) } className='btn btn-danger'>Delete</bottom>
        </td>
    </tr>
));    
    return(
         <Fragment>
             <h2 className="my-2">Education Credentials</h2>
             <table className='table'>
              <thead>
               <tr>
                   <th>school</th>
                   <th className='hide-sm'>Title</th>
                   <th className='hide-sm'>Years</th>
                   <th />
               </tr>
              </thead>
              <tobody>{educations}</tobody>
             </table>    
         </Fragment>
 );
};


Education.propTypes={
    educations: PropTypes.array.isRequired,
    deleteExducation: PropTypes.func.isRequired
};

export default connect(null, {deleteExducation})(Education);