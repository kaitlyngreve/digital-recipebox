import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function EditProfile({ user, handleEditUser }) {
    const [username, setUsername] = useState(user.username)
    const [bio, setBio] = useState(user.bio)
    const [profileImg, setProfileImg] = useState(user.img)

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                bio: bio,
                img: profileImg,
                password: user.password_digest
            })
        })
            .then(r => r.json())
            .then(data => handleEditUser(data))
        history.push('/profile')
    }


    return (
        <div className='section-card section-contained'>
            <form onSubmit={handleSubmit}>
                <h1 className="form-header">🥕 Edit Profile 🥕</h1>
                <label className="form-label">Username:
                    <input
                        className="form-inputs"
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}>
                    </input>
                </label>
                <label className="form-label">
                    Bio:
                    <textarea
                        rows='3'
                        cols='30'
                        className="form-inputs"
                        type="text"
                        value={bio}
                        onChange={e => setBio(e.target.value)}>
                    </textarea>
                </label>
                <label className="form-label">
                    Profile Photo:
                    <input
                        className="form-inputs"
                        type="text"
                        value={profileImg}
                        onChange={e => setProfileImg(e.target.value)}>
                    </input>
                </label>
                <button className='button'>Save</button>
            </form>
        </div>
    )
}

export default EditProfile;