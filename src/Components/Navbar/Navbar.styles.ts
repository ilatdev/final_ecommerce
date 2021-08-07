import { makeStyles } from '@material-ui/core/styles'

// IDs
const TypographyRoot = '& .MuiTypography-root'
const Signup = '& #signup'

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    minHeight: 90,
    border: 'none'
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    [TypographyRoot]: {
      padding: '7px',
      fontWeight: '600',
      '&:hover': {
        backgroundColor: '#d3d3d33d',
        borderRadius: '25px'
      }
    }
  },
  brand: {
    display: 'inherit',
    alignItems: 'center'
  },
  search: {
    display: 'none',
    minWidth: 450,
    backgroundColor: '#d3d3d33d',
    padding: 8,
    borderRadius: 25,
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
  navigation: {
    minWidth: 320,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [Signup]: {
      textTransform: 'none',
      fontSize: 16,
      borderRadius: '25px',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.grey[200],
      fontWeight: '600'
    }
  },
  sectionMobile: {}
}))

export default useStyles
