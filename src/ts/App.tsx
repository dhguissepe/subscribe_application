import React, { useState, SyntheticEvent, ChangeEvent } from 'react'
import Layout from './components/Layout'
import UserForm from './components/UserForm'
import Loader from './components/Loader'

//definition of types for objects
interface subscribeFormData {
  name: string
  last_name: string
  email: string
  password: string
}

//Smart component of the app
function App(): JSX.Element {
  const [saving, setSaving] = useState<boolean>(false)
  const [savingImage, setSavingImage] = useState<boolean>(false)
  const [suscribed, setSuscribed] = useState<boolean>(false)
  const [error, setError] = useState<Error | undefined>(undefined)
  const [profileImageSrc, setProfileImageSrc] = useState<string>('https://i.ibb.co/Vx50RCv/male-placeholder-image.jpg')

  const [formData, setFormData] = useState<subscribeFormData>({
    name: '',
    last_name: '',
    email: '',
    password: ''
  })

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim()
    })
  }

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>): void => {
    setSavingImage(true)
    const errors: string[] = []
    const file: File = Object.values(event.target.files)[0]
    const allowedTypes: string[] = ['image/jpeg', 'image/png', 'image/jpg']

    if (file.size > 1000000) {
      errors.push('this file is too big. Max size is 1MB.')
    }

    if (allowedTypes.every(type => file.type !== type)) {
      errors.push('this file type is not supported. Supported types: png, jpg, jpeg.')
    }

    if (errors.length) {
      return errors.forEach((item) => alert(item))
    }

    console.log(file)
  }

  const handleSubmit = (event: SyntheticEvent): void => {
    event.preventDefault()
    setSaving(true)
    setError(undefined)

    try {
      setSaving(false)
      setSuscribed(true)
    } catch(error) {
      setSaving(false)
      setError(error)
      console.log(error)
    }
  }

  //App rendering
  return (
    <Layout>
      { saving && <Loader /> }
      { !saving && <UserForm
        error={ error }
        profileImageSrc={ profileImageSrc }
        onChange={ handleFormChange }
        onSubmit={ handleSubmit }
        onImageUpload={ handleImageUpload }
      /> }
    </Layout>
  )
}

export default App
