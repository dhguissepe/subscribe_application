import React, { useState, useEffect, SyntheticEvent, ChangeEvent } from 'react'
import Layout from './components/Layout'
import UserForm from './components/UserForm'
import Loader from './components/Loader'

//definition of types for objects
interface subscribeFormData {
  username: string
  first_name: string
  last_name: string
  email: string
  password: string
  password_confirmation: string
  [key: string]: string
}

//Smart component of the app
function App(): JSX.Element {
  const [saving, setSaving] = useState<boolean>(false)
  // const [savingImage, setSavingImage] = useState<boolean>(false)
  const [suscribed, setSuscribed] = useState<boolean>(false)
  const [error, setError] = useState<Error | undefined>(undefined)
  const [CSRF, setCSRF] = useState<string>('')
  // const [profileImageSrc, setProfileImageSrc] = useState<string>('https://i.ibb.co/Vx50RCv/male-placeholder-image.jpg')

  useEffect(() => {
    const CSRFMiddlewareTokenNode: HTMLInputElement = document.querySelector('[name="csrfmiddlewaretoken"]')

    setCSRF(CSRFMiddlewareTokenNode ? CSRFMiddlewareTokenNode.value : '')
  }, [])

  const [formData, setFormData] = useState<subscribeFormData>({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim()
    })
  }

  // const handleImageUpload = (event: ChangeEvent<HTMLInputElement>): void => {
  //   setSavingImage(true)
  //   const errors: string[] = []
  //   const file: File = Object.values(event.target.files)[0]
  //   const allowedTypes: string[] = ['image/jpeg', 'image/png', 'image/jpg']

  //   if (file.size > 1000000) {
  //     errors.push('this file is too big. Max size is 1MB.')
  //   }

  //   if (allowedTypes.every(type => file.type !== type)) {
  //     errors.push('this file type is not supported. Supported types: png, jpg, jpeg.')
  //   }

  //   if (errors.length) {
  //     return errors.forEach((item) => alert(item))
  //   }

  //   console.log(file)
  // }

  const encodeFormData = (data: subscribeFormData) => {
    if (!CSRF) {
        throw new Error('CSRF token not present')
    }

    let stringifiedData = `csrfmiddlewaretoken=${CSRF}`

    Object.keys(data).forEach((item) => {
      stringifiedData += `&${item}=${data[item]}`
    })

    return encodeURIComponent(stringifiedData)
  }

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    setSaving(true)
    setError(undefined)

    try {
      const response = await fetch('/users/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/x-www-form-urlencoded'
        },
        body: encodeFormData(formData)
      })

      const data = await response.json()

      console.log(data)

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
      { (!saving && !suscribed) && <UserForm
        error={ error }
        // profileImageSrc={ profileImageSrc }
        onChange={ handleFormChange }
        onSubmit={ handleSubmit }
        // onImageUpload={ handleImageUpload }
      /> }
      { (!saving && suscribed) &&
        <div className='success-message-container'>
          <h2 className='success-message'>Has sido registrado!</h2>
        </div>
      }
    </Layout>
  )
}

export default App
