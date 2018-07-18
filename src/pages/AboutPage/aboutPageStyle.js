// ##############################
// // // Articles Page styles
// #############################
import aboutImage from 'assets/img/about.jpg';

export const hidden = {
    display: 'none'
}
const subsection = {
    flex: '1'
}

const aboutPageStyles = theme => ({
    aboutSection: {
        display: 'flex',
        width: '100%',
        height: '100vh',
        transition: 'transform 0.5s, opacity 0.5s'
    },
    aboutText: {
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...subsection,
        '& > ul': {
            color: '#232',
            fontSize: '1.8rem',
            // fontStyle: 'italic',
            textAlign: 'right',
            listStyle: 'none',
            lineHeight: '1.8',
        }
    },
    aboutImage: {
        ...subsection,
        backgroundColor: '#232',
        backgroundImage: `url("${aboutImage}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    hidden
});

export default aboutPageStyles;
