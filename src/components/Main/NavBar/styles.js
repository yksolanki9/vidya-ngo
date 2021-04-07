import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
      appBar: {
        overflow:"hidden",
      },
      toolbar: {
        flexWrap: 'wrap',
        overflow:"hidden",
      },
      toolbarLogo: {
        flexGrow: 1,
        maxWidth: 80,
        marginTop: 10
      },
      navbar: {
        marginLeft: "auto",
      },
      link: {
        // margin: theme.spacing(1, 3.5),
        color: "white",
        align: "right"
      }
}));

export default useStyles;