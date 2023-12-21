import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import StoreIcon from '@mui/icons-material/Store'
import ViewInArIcon from '@mui/icons-material/ViewInAr'

import paths from '../../constants/path'

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: ShoppingBagIcon
  },
  {
    id: 2,
    label: 'Produtos',
    link: paths.Products,
    icon: StoreIcon
  },
  {
    id: 3,
    label: 'Novo Produto',
    link: paths.NewProduct,
    icon: ViewInArIcon
  }
]

export default listLinks
