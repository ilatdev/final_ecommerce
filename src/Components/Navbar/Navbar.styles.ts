import { makeStyles } from '@material-ui/core/styles'

// IDs
const TypographyRoot = '& .MuiTypography-root'
const ListItemRoot = '& .MuiListItem-root'

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    border: 'none'
  },
  toolBar: {
    minHeight: 90,
    display: 'flex',
    justifyContent: 'space-between',
    [TypographyRoot]: {
      padding: '8px',
      fontWeight: '600',
      '&:hover': {
        backgroundColor: '#d3d3d33d',
        borderRadius: '25px'
      }
    }
  },
  brand: {
    display: 'flex',
    alignItems: 'center'
  },
  search: {
    minWidth: 290,
    width: '100%',
    backgroundColor: '#d3d3d33d',
    padding: 8,
    borderRadius: 25
  },
  navbarLinks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    top: 90,
    right: 0,
    margin: 0,
    backgroundColor: '#fafafa',
    [ListItemRoot]: {
      width: 'auto'
    },
    [theme.breakpoints.up(960)]: {
      position: 'static',
      display: 'flex',
      flexDirection: 'row'
    }
  },
  signup: {
    textTransform: 'none',
    fontSize: 16,
    borderRadius: '25px',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.grey[200],
    fontWeight: 600
  },
  navigation: {
    [theme.breakpoints.down(960)]: {
      display: 'none'
    }
  },
  mobileNavigation: {
    [theme.breakpoints.up(960)]: {
      display: 'none'
    }
  }
}))

export default useStyles
