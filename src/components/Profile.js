import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile=()=>{
    return (
        <div className="container profile">
            <User src= "https://consequenceofsound.net/wp-content/uploads/2019/08/Leo-DiCaprio.jpg?quality=80&w=807"
                alt="man"
                name="Dicaprio"/>
            <Palette/>
        </div>
    )
}
export default Profile;
