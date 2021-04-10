import { makeStyles } from '@material-ui/styles';

import BackgroundImage from '../../images/background.jpg';

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundImage:  `url(${BackgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '95vh',
        position: 'relative',
        top: 0,
        left: 0,
        overflow: "hidden",
      },
}));

export default useStyles;