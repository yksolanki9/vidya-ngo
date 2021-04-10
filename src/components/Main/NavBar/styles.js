import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  active: {
    textDecoration: "none",
    backgroundColor: theme.palette.action.hover,
    color: "red" // This is just to make the change easier to see
  },
      toolbar: {
          
        overflow:"hidden",
      },
      toolbarLogo: {
        flexGrow: 1,
        maxWidth: 80,
        marginTop: 10,
        marginLeft: "20px",
        cursor: "pointer"
      },
      navbar: {
        marginLeft: "auto",
      },
      link: {
        margin: "0px 20px",
        color: "white",
        align: "right",
        display: "inline",
        cursor: "pointer"
      }
}));

export default useStyles;