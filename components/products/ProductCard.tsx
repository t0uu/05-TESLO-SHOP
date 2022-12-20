import { FC, useMemo, useState } from 'react';
import NextLink from 'next/link'
import { Link,Box,Grid, Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import { IProduct } from '../../interfaces/products';

interface Props {
    product: IProduct
}

export const ProductCard:FC<Props> = ({product}) => {

    const [isHovered, setIsHovered] = useState(false);

   const productImage  = useMemo(() => {
    return isHovered 
    ? 
    `products/${product.images[1]}`
    :
    `products/${product.images[0]}`
   }
   ,[isHovered])

  return (
    <Grid 
    item 
    xs={6} 
    sm={4}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
    <Card>
      <CardActionArea>
        <NextLink href='/product/slug' passHref prefetch={false} legacyBehavior>
          <Link>
        <CardMedia 
        component='img'
        className='fadeIn'
        image={productImage}
        alt={product.title}
        />
        </Link>
        </NextLink>
      </CardActionArea>
    </Card>
    <Box sx={{mt: 1}} className='fadeIn'>
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$${product.price}`}</Typography>
    </Box>
  </Grid>
  )
}
