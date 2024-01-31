import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container } from './styles.js'

export function CartResume() {
  const [itemsPrice, setItemsPrice] = useState(0)
  const [deliveryTax] = useState(0.1)
  const [totalPrice, setTotalPrice] = useState(0)
  const [calculatedTax, setCalculatedTax] = useState()

  const { cartProducts, clearCart } = useCart()

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    const newCalculatedTax = sumAllItems * deliveryTax
    setCalculatedTax(newCalculatedTax)

    const calculatedPrice = sumAllItems + newCalculatedTax
    setItemsPrice(formatCurrency(sumAllItems))
    setTotalPrice(formatCurrency(calculatedPrice))
  }, [cartProducts, deliveryTax])

  const submitOrder = async () => {
    try {
      const order = cartProducts.map(product => {
        return { id: product.id, quantity: product.quantity }
      })
      await toast.promise(api.post('orders', { products: order }), {
        pending: 'Realizando o seu pedido...',
        success: 'Pedido realizado com sucesso!'
      })

      clearCart()
    } catch (error) {
      toast.error('Falha ao tentar realizar seu pedido, tente novamente!')
    }
  }

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{itemsPrice}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(calculatedTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{totalPrice}</p>
        </div>
      </Container>
      <Button
        style={{ marginTop: '20px', width: '100%', marginBottom: '50px' }}
        onClick={submitOrder}
      >
        Finalizar pedido
      </Button>
    </div>
  )
}
