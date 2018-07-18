// ##############################
// // // Articles Page styles
// #############################

export const hidden = {
    display: 'none'
}
const subsection = {
    flex: '1'
}

const aboutPageStyles = theme => ({
    contactSection: {
        color: '#232',
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        '& button': {
            fontSize: '1.5rem',
            textTransform: 'uppercase',
            marginTop: '40px'
        }
    },
    contactIntro: {
        fontSize: '1.8rem',
        lineHeight: '1.5'
    },
    contactFormWrapper: {
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '740px',
        ...subsection,
        boxSizing: 'border-box',
        position: 'relative',
        '& input, & textarea, & label': {
            fontSize: '1.5rem',
            lineHeight: '2',
            width: '100%',
        },
        '& form > div': {
            margin: '0'
        }
    },
    footerNav: {
        color: '#232',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        padding: '40px',
        '& svg': {
            verticalAlign: 'middle'
        }
    },
    hidden
});

export default aboutPageStyles;
