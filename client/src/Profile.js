import NavBar from "./NavBar";
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Profile({ user, setUser, likes, setLikes }) {

    let history = useHistory()

    useEffect(() => {
        fetch('/likes')
            .then(r => r.json())
            .then(setLikes)
    }, [])

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE'
        })
            .then((r) => {
                if (r.ok) {
                    setUser(null)
                    history.push('/')
                }
            })
    }

    const handleEditProfile = () => {
        history.push('/editprofile')
    }

    const userLikes = likes.filter(like => like.user_id === user.id)
    console.log(userLikes)

    return (
        <div className="section-card section-contained">
            <div className="profile-box">
                <img className='avatar-img' src={user.img} />
                <h1>{user.username}</h1>
                <p className="profile-bio-p">Bio:  {user.bio}</p>
                <button className='form-button button margin-right-10px' onClick={handleEditProfile} >Edit Profile ✏️</button>
                <button className="form-button button" onClick={handleLogout}>Logout 🥕</button>
            </div>
            <h4 className="profile-p">Liked: </h4>
            <p>
                {userLikes?.map(like => (
                    <p>{like.recipe?.title}</p>
                ))}
            </p>
        </div>
    )
}

export default Profile;