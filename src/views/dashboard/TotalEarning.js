// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'
import Tooltip from '@mui/material/Tooltip'

// ** Icons Imports
import MenuUp from 'mdi-material-ui/MenuUp'
import MenuDown from 'mdi-material-ui/MenuDown'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'

// import WarningIcon from '@mui/icons-material/Warning';

const data = [
  {
    progress: 75,
    imgHeight: 20,
    title: 'Provision de mañana',
    color: 'primary',
    amount: '$400.039 M',
    subtitle: 'Dinero a dispersar',
    imgSrc: '/images/cards/logo-zipcar.png'
  },
  {
    progress: 50,
    color: 'info',
    imgHeight: 27,
    title: 'Capital de Trabajo',
    amount: '$340.049 M ',
    subtitle: 'Sketch, Figma & XD',
    imgSrc: '/images/cards/logo-bitbank.png'
  }

  // {
  //   progress: 20,
  //   imgHeight: 20,
  //   title: 'Aviato',
  //   color: 'secondary',
  //   amount: '$1,245.80',
  //   subtitle: 'HTML & Angular',
  //   imgSrc: '/images/cards/logo-aviato.png'
  // }
]

const TotalEarning = () => {
  return (
    <Card sx={{ height: '406px', backgroundColor: 'rgba(156, 156, 156, 0.1)', border: '1px solid #9155FD' }}>
      {/* <Card sx={{ height: '406px', backgroundColor: '#9c9c9c' }}> */}
      <CardHeader
        title='Caja dia de Mañana 💰'
        titleTypographyProps={{ sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' } }}
        action={
          <Tooltip
            title='Revisa que tu capital de trabajo sea mayor a tu provision de mañana'
            componentsProps={{
              tooltip: {
                sx: {
                  fontSize: '1rem' // Adjust the font size as needed
                }
              }
            }}
          >
            <IconButton
              size='small'
              aria-label='settings'
              className='card-more-options'
              sx={{ color: 'text.secondary' }}
            >
              <AlertCircleOutline />
            </IconButton>
          </Tooltip>
        }
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(2.25)} !important` }}>
        <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
          <Typography variant='h1' sx={{ fontWeight: 600, fontSize: '2.125rem !important' }}>
            $59.9 M
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'error.main' }}>
            <MenuDown sx={{ fontSize: '1.875rem', verticalAlign: 'middle', color: '#975858' }} />
            <Typography variant='body2' sx={{ fontWeight: 600, color: '#975858' }}>
              14.9%
            </Typography>
          </Box>
        </Box>
        <Typography component='p' variant='caption' sx={{ mb: 10 }}>
          Pronostico de Demanda de Capital
        </Typography>

        {data.map((item, index) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                ...(index !== data.length - 1 ? { mb: 8.5 } : {})
              }}
            >
              <Avatar
                variant='rounded'
                sx={{
                  mr: 3,
                  width: 40,
                  height: 40,
                  backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.04)`
                }}
              >
                <img src={item.imgSrc} alt={item.title} height={item.imgHeight} />
              </Avatar>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                  <Typography variant='caption'>{item.subtitle}</Typography>
                </Box>

                <Box sx={{ minWidth: 85, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
                    {item.amount}
                  </Typography>
                  <LinearProgress color={item.color} value={item.progress} variant='determinate' />
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default TotalEarning
