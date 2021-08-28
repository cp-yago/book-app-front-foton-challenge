import React from 'react'
import { useForm } from 'react-hook-form'

import api from '../../../services/api'

import { Container } from './styles'
import DefaultButton from '../../../components/DefaultButton'
import { useCallback } from 'react'

const Form = () => {
  const { handleSubmit, register, formState: { errors }, reset } = useForm();

  const onSubmit = useCallback(async (data) => {
    const response = await api.post("/books", data)
    const message = !response 
      ? "Error on book register, try again later" 
      : "Book created!"

    alert(message)
    reset({})
  }, [reset])

  return (
    <>
      <Container onSubmit={handleSubmit(onSubmit)}>

        <span className="inputLabel">Name</span>
        <input {...register("name", { required: "This is a required field" })} />
        {errors.name && (<span className="errorMessage">{errors.name.message}</span>)}

        <span className="inputLabel">Author</span>
        <input {...register("author", { required: "This is a required field" })} />
        {errors.author && (<span className="errorMessage">{errors.author.message}</span>)}

        <span className="inputLabel">Description</span>
        <input {...register("description", { required: "This is a required field" })} className="textArea"/>
        {errors.description && (<span className="errorMessage">{errors.description.message}</span>)}

        <DefaultButton>Add new book</DefaultButton>

      </Container>
    </>
  )
}

export default Form