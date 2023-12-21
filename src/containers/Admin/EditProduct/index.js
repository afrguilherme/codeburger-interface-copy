import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { Error } from '../../../components/Error'
import api from '../../../services/api'
import {
  Container,
  Input,
  ButtonStyles,
  LabelUpload,
  ContainerInput
} from './styles.js'

function EditProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const {
    push,
    location: {
      state: { product }
    }
  } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto!'),
    price: Yup.string().required('Digite o preço do produto!'),
    category: Yup.object().required('Selecione a categoria do produto!'),
    offer: Yup.bool()
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    const productFormData = new FormData()

    productFormData.append('name', data.name)
    productFormData.append('price', data.price)
    productFormData.append('category_id', data.category.id)
    productFormData.append('file', data.file[0])
    productFormData.append('offer', data.offer)

    try {
      await api.put(`/products/${product.id}`, productFormData)

      toast.success('Produto editado com sucesso!')

      setTimeout(() => {
        push('/listar-produtos')
      }, 2000)
    } catch (error) {
      toast.error(`Falha ao editar o produto: "${error.message}"`)
    }
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Nome"
          type="text"
          {...register('name')}
          defaultValue={product.name}
        />
        <Error>{errors.name?.message}</Error>

        <Input
          placeholder="Preço"
          type="number"
          {...register('price')}
          defaultValue={product.price}
        />
        <Error>{errors.price?.message}</Error>

        <LabelUpload>
          <CloudUploadIcon></CloudUploadIcon>
          {fileName || 'Carregue a imagem do produto'}
          <input
            type="file"
            accept="image/png image/jpeg"
            {...register('file')}
            onChange={value => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpload>
        <Error>{errors.file?.message}</Error>

        <Controller
          name="category"
          control={control}
          defaultValue={product.category}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                placeholder="Categoria"
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                defaultValue={product.category}
              />
            )
          }}
        ></Controller>
        <Error>{errors.category?.message}</Error>

        <ContainerInput>
          <input
            type="checkbox"
            {...register('offer')}
            defaultChecked={product.offer}
          />

          <p>Produto em oferta?</p>
        </ContainerInput>

        <ButtonStyles>Editar produto</ButtonStyles>
      </form>
    </Container>
  )
}

export default EditProduct
