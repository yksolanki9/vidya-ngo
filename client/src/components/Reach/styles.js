import { makeStyles } from '@material-ui/styles';
import statsImage from '../../images/image.jpg';

const useStyles = makeStyles((theme) => ({
      stats: {
        backgroundImage:  `url(${statsImage})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '90vh',
        position: 'relative',
        top: 0,
        left: 0,
        overflow: "hidden",
        marginBottom: "100px"
      },
      statGrid: {
        margin: "10%",
      },
      statsTitle: {
        margin: "10%",
        color: "white",
      }
    }));

export default useStyles;