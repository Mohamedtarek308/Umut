import React from 'react'
import PropTypes from 'prop-types'
import Moment    from 'react-moment';

const profileEducation =({education :{school,degree,fieldofstudy ,current ,to, from, description }
}) => <div>
<h3 className=" text-dark">{school}</h3>
<p>
    <Moment formate ='YYY/MM/DD'>{from}</Moment> -{!to ? 'Now':<Moment formate ='YYY/MM/DD'>{to}</Moment>}
</p>
<p>
    <strong> Degree: </strong> {degree}
</p>
<p>
    <strong> Field Of Study: </strong> {fieldofstudy}
</p>
<p>
    <strong> Description: </strong> {description}
</p>
        </div>;

      



profileEducation.propTypes={
education: PropTypes.array.isRequired

};
 
export default profileEducation