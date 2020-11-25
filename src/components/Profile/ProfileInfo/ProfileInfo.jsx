import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src='https://i.pinimg.com/236x/23/2d/88/232d885e4ee4cc6a5b800747bac2f8e6.jpg' alt='img' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt='' />
               <div>{props.profile.fullName}</div>
                ava + description
            </div>

        </div>
    );
}

export default ProfileInfo;