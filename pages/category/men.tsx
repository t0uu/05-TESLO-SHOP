import { ShopLayout } from '../../components/layouts';
import {Typography} from '@mui/material'
import { initialData } from '../../database/products';
import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';
import { FullScreenLoading } from '../../components/ui';

export default function MenPage() {

  const {isError,products,isLoading} = useProducts('/products?gender=men');
  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
  <ShopLayout title={'Teslo-Shop - Men'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
    <Typography variant='h1' component='h1'>Tienda</Typography>
    <Typography variant='h2' sx={{mb: 1}}>Todos los productos</Typography>
   
    {isLoading ?
     <FullScreenLoading/>
    : <ProductList products={products}/>
    }
  
  </ShopLayout>
  )
}