import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    heading: {
        color: "white",
        margin: "5% 10% 0% 10%",
      },
      paragraph: {
        color: "white",
        margin: "2% 10% 5% 10%",
      },
      donateButton: {
       width: "300px",
       height: "60px",
      }
}));

export default useStyles;