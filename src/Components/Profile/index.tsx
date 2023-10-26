import React from 'react'
import Social_Network from '../Social_Network';
interface IProfile {
   img?: string;
   name?: string;
   txt?: string
   role?: string;

  }

const Profile: React.FC<IProfile> = ({img, name, txt, role}) => {
  return (
    <div className='profile-block'>
        <div className='image-holder'>
            <img src={img} alt={img} />
            <div className="opacity tran3s"></div>
        </div>
        <div className='text=holder'>
            <h3>{name}</h3>
            <span className='text'>{txt}</span>
            <p>{role}</p>
        </div>
        <Social_Network />
    </div>
  )
}

export default Profile