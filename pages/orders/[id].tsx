import NextLink from 'next/link';
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from "@mui/material"
import { CartList, OrderSummary } from "../../components/cart"
import { ShopLayout } from "../../components/layouts"
import { CreditCardOffOutlined, CreditCardOutlined } from '@mui/icons-material';

const OrderPage = () => {
  return (
    <ShopLayout title='Resumen de orden 12357' pageDescription="Resumen de la orden">
    <Typography variant="h1" component="h1" >
        Orden: ABC123
    </Typography>
    {/* <Chip sx={{my:2}}
          label="Pendiente de Pago"
          variant='outlined'
          color='error'
          icon={<CreditCardOffOutlined/>}/> */}

<Chip sx={{my:2}}
          label="Orden ya fue pagada"
          variant='outlined'
          color='success'
          icon={<CreditCardOutlined/>}/>
    <Grid container>
        <Grid item xs={12} sm={7}>
            <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
            <Card className="summary-card">
                <CardContent>
                    <Typography variant='h2'>Resumen (3 productos)</Typography>
                    <Divider sx={{my:1}}/>
                    <Box display='flex' justifyContent='space-between'>
                    <Typography variant='subtitle1'>Dirección de entrega</Typography>
                        <NextLink href='/checkout/address' passHref legacyBehavior>
                            <Link underline='always'>
                            Editar
                            </Link>
                        </NextLink>
                    </Box>
                    <Typography>Santiago Touzet</Typography>
                    <Typography>1234 algun lugar</Typography>
                    <Typography>Ciudad Imaginaria, 2254</Typography>
                    <Typography>New York</Typography>
                    <Typography>+1 232411</Typography>
                    <Divider sx={{my:1}}/>
                    <Box display='flex' justifyContent='end'>
                        <NextLink href='/cart' passHref legacyBehavior>
                            <Link underline='always'>
                            Editar
                            </Link>
                        </NextLink>
                    </Box>
                    <OrderSummary/>
                    <Box sx={{mt:3}}>
                        {/* Todo */}
                        <h1>Pagar</h1>
                        <Chip sx={{my:2}}
          label="Orden ya fue pagada"
          variant='outlined'
          color='success'
          icon={<CreditCardOutlined/>}/>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
</ShopLayout>
  )
}

export default OrderPage