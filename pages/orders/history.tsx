import { ShopLayout } from '../../components/layouts'
import { Typography, Grid, Chip, Link } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid/models';
import NextLink from 'next/link';


const columns: GridColDef[] = [
    {field: 'id', headerName:'ID',width: 100},
    {field:'fullname',headerName: 'Nombre Completo',width:300},
    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra información si está pagada la orden o no',
        width:200,
        renderCell:(params: GridRenderCellParams) => {
            return (
                params.row.paid 
                ? 
                <Chip color='success' label='Pagada' variant='outlined'/>
                :
                <Chip color='error' label='No pagada' variant='outlined'/>
            )
        }
    },
    {
        field: 'orden',
        headerName: 'Ver Orden',
        width:200,
        sortable:false,
        renderCell:(params: GridRenderCellParams) => {
            return (
                <NextLink href={`/orders/${params.row.id}`} passHref legacyBehavior>
                    <Link underline='always'>Ver orden</Link>
                </NextLink>
            )
        }
    }
];


const rows = [
    {id:1,paid: true,fullname:'Santiago Touzet'},
    {id:2,paid: false,fullname:'Julian Alvarez'},
    {id:3,paid: true,fullname:'Emiliano Martinez'},
    {id:4,paid: false,fullname:'Leonel Messi'},
]



const HistoryPage = () => {
  return (
    <ShopLayout title='Historial de ordenes' pageDescription='Historial de ordenes del cliente'>
        <Typography variant='h1' component='h1'>Historial de ordenes</Typography>

        <Grid container>
            <Grid item xs={12} sx={{height:650,width:'100%'}}>
                <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                />
            </Grid>
        </Grid>
    
    
    </ShopLayout>
    )
}

export default HistoryPage