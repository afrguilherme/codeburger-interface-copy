import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import { Button, Error } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink
} from './styles'

export function Login() {
  const history = useHistory()
  const { putUserData } = useUser()

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um e-mail válido!')
      .required('O e-mail é um campo obrigatório!'),
    password: yup
      .string()
      .required('A senha é um campo obrigatório!')
      .min(6, 'A senha deve ter no mínimo 6 digitos!')
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
      const response = await api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      })
      putUserData(response.data)

      setTimeout(() => {
        if (response.data.admin) {
          history.push('/pedidos')
        } else {
          history.push('/')
        }
      }, 1000)

      if (response.status === 200) {
        toast.success('Seja bem vindo(a)!')
      }
    } catch (error) {
      toast.error('Dados incorretos!')
    }
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-code-burger" />

        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            placeholder="example@email.com"
            type="email"
            {...register('email')}
            $error={errors.email?.message}
          />
          <Error>{errors.email?.message}</Error>

          <Label>Senha</Label>
          <Input
            placeholder="**************"
            type="password"
            {...register('password')}
            $error={errors.email?.message}
          />
          <Error>{errors.password?.message}</Error>

          <Button type="submit" style={{ marginTop: 50 }}>
            Entrar
          </Button>
        </form>
        <SignInLink>
          Não possui conta?{' '}
          <Link style={{ color: 'white' }} to="/Cadastro">
            Registrar-se.
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
