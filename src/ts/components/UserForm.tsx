import React, { ChangeEvent, SyntheticEvent } from 'react'

//props types
interface UserFormProps {
  error: Error
  onChange(event: ChangeEvent): void
  onSubmit(event: SyntheticEvent): void
}

function UserForm(props: UserFormProps): JSX.Element {
  return (
    <section className="user-form-container">
      <form className="user-form" onSubmit={ props.onSubmit }>
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
          <label htmlFor="first_name">First Name</label>
          <input
            className="text-input"
            type="text"
            name="first_name"
            id="first_name"
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
            type="password"
            name="password_confirmation"
            id="password_confirmation"
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
