// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

const rows = [
  {
    age: 27,
    status: 'activo',
    date: '09/27/2018',
    name: 'Valeria Grimaldo',
    salary: '$19586.23',
    email: 'valeria@cargaya.co',
    designation: 'Gerente de Producción'
  },
  {
    age: 31,
    date: '09/23/2016',
    salary: '$23896.35',
    status: 'activo',
    name: 'Sebastian Guerrero',
    email: 'sebastian@cargaya.co',
    designation: 'Lider de Tecnologia'
  },
  {
    age: 59,
    date: '10/15/2017',
    name: 'David Roldan',
    status: 'activo',
    salary: '$18991.67',
    email: 'david@cargaya.com',
    designation: 'Gerente General'
  }

  // {
  //   age: 30,
  //   date: '06/12/2018',
  //   status: 'resigned',
  //   salary: '$19252.12',
  //   name: 'Ralph Leonard',
  //   email: 'dfalloona@ifeng.com',
  //   designation: 'Sales Representative'
  // },
  // {
  //   age: 66,
  //   status: 'activo',
  //   date: '03/24/2018',
  //   salary: '$13076.28',
  //   name: 'Annie Martin',
  //   designation: 'Operator',
  //   email: 'sganderton2@tuttocitta.it'
  // },
  // {
  //   age: 33,
  //   date: '08/25/2017',
  //   salary: '$10909.52',
  //   name: 'Adeline Day',
  //   status: 'professional',
  //   email: 'hnisius4@gnu.org',
  //   designation: 'Senior Cost Accountant'
  // },
  // {
  //   age: 61,
  //   status: 'activo',
  //   date: '06/01/2017',
  //   salary: '$17803.80',
  //   name: 'Lora Jackson',
  //   designation: 'Geologist',
  //   email: 'ghoneywood5@narod.ru'
  // },
  // {
  //   age: 22,
  //   date: '12/03/2017',
  //   salary: '$12336.17',
  //   name: 'Rodney Sharp',
  //   status: 'professional',
  //   designation: 'Cost Accountant',
  //   email: 'dcrossman3@google.co.jp'
  // }
]

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  activo: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Fecha</TableCell>
              {/* <TableCell>Salario</TableCell> */}
              <TableCell>Edad</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.date}</TableCell>
                {/* <TableCell>{row.salary}</TableCell> */}
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
