import React, { ChangeEvent, SyntheticEvent } from 'react'

//props types
interface UserFormProps {
  error: Error
  profileImageSrc: string
  onChange(event: ChangeEvent): void
  onSubmit(event: SyntheticEvent): void
  onImageUpload(event: ChangeEvent): void
}

function UserForm(props: UserFormProps): JSX.Element {
  return (
    <section className="user-form-container" onSubmit={ props.onSubmit }>
      <form className="user-form">
        <div className="user-form--input-container">
          <label htmlFor="username">Username</label>
          <input
            className="text-input"
            type="text"
            name="username"
            id="username"
            onChange={ props.onChange }
            required
          />
        </div>
        <div className="user-form--input-container">
          <label htmlFor="name">First Name</label>
          <input
            className="text-input"
            type="text"
            name="name"
            id="name"
            onChange={ props.onChange }
            required
          />
        </div>
        <div className="user-form--input-container">
          <label htmlFor="last_name">Last Name</label>
          <input
            className="text-input"
            type="text"
            name="last_name"
            id="last_name"
            onChange={ props.onChange }
            required
          />
        </div>
        <div className="user-form--input-container">
          <label htmlFor="email">E-mail</label>
          <input
            className="text-input"
            type="email"
            name="email"
            id="email"
            onChange={ props.onChange }
            required
          />
        </div>
        <div className="user-form--input-container">
          <label htmlFor="password">Password</label>
          <input
            className="text-input"
            type="password"
            name="password"
            id="password"
            onChange={ props.onChange }
            required
          />
        </div>
        <div className="user-form--input-container">
          <label htmlFor="confirm-password">Confirm password</label>
          <input
            className="text-input"
            type="text"
            name="confirm-password"
            id="confirm-password"
            onChange={ props.onChange }
            required
          />
        </div>
        {/* <div className="user-form--file-input-container">
          <img className="user-form--profile-image-preview" src={ props.profileImageSrc } alt=""/>
          <label className="file-input-label" htmlFor="profile_picture">Upload your Profile Picture</label>
          <input
            className="file-input"
            type="file"
            name="profile_picture"
            id="profile_picture"
            onChange={ props.onImageUpload }
          />
        </div> */}
        <button type="submit" className="user-form--button">Send</button>
        { props.error && <span className="user-form--message"> {props.error.message} </span> }
      </form>
    </section>
  )
}

export default UserForm
