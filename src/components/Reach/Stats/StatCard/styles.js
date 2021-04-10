import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    gridItem: {
        width: "200px",
    },
    statIcon: {
        display: "block",
        marginBottom: "40px"
    },
    statValue: {
        display: "block",
        marginBottom: "25px"
    },
    statTitle: {
        display: "block",
    }   
}));

export default useStyles;