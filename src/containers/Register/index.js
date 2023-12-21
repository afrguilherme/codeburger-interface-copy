import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import Logo from '../../assets/logo.svg'
import RegisterImg from '../../assets/register-image.svg'
import { Button, Error } from '../../components'
import api from '../../services/api'
import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SignInLink
} from './styles'

export function Register() {
  const history = useHistory()

  const schema = yup.object().shape({
    name: yup.string().required('O seu nome é obrigatório!'),
    email: yup
      .string()
      .email('Digite um e-mail válido!')
      .required('O e-mail é um campo obrigatório!'),
    password: yup
      .string()
      .required('A senha é um campo obrigatório!')
      .min(6, 'A senha deve ter no mínimo 6 digitos!'),
    confirmPassword: yup
      .string()
      .required('A senha é um campo obrigatório!')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais!')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastrado com sucesso!')
        setTimeout(() => {
          history.push('/entrar')
        }, 1000)
      } else if (status === 409) {
        toast.error('E-mail já cadastrado!')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente mais tarde.')
    }
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="register-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-code-burger" />

        <h1>Cadastre-se</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label $error={errors.name?.message}>Nome</Label>
          <Input
            placeholder="Escreva aqui"
            type="text"
            {...register('name')}
            $error={errors.name?.message}
          />
          <Error>{errors.name?.message}</Error>

          <Label $error={errors.email?.message}>Email</Label>
          <Input
            placeholder="exemplo@email.com"
            type="email"
            {...register('email')}
            $error={errors.email?.message}
          />
          <Error>{errors.email?.message}</Error>

          <Label $error={errors.email?.message}>Senha</Label>
          <Input
            placeholder="**************"
            type="password"
            {...register('password')}
            $error={errors.password?.message}
          />
          <Error>{errors.password?.message}</Error>

          <Label $error={errors.confirmPassword?.message}>
            Confirmar senha
          </Label>
          <Input
            placeholder="**************"
            type="password"
            {...register('confirmPassword')}
            $error={errors.confirmPassword?.message}
          />
          <Error>{errors.confirmPassword?.message}</Error>

          <Button type="submit" style={{ marginTop: 10 }}>
            Cadastrar
          </Button>
        </form>
        <SignInLink>
          Já possui conta?{' '}
          <Link to="/Entrar" style={{ color: 'white' }}>
            Acessar.
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
