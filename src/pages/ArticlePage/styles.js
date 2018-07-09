// ##############################
// // // Article Page styles
// #############################

const articlesPageStyle = theme => ({
    hero: {
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: '100%',
        height: '100vh',
        position: 'relative',
        top: '0',
        left: '0'
    },
    titleWrapper: {
        margin: '0 auto',
        width: '50%',
        boxSizing: 'border-box',
        fontWeight: '700',
        textTransform: 'uppercase',
        height: '100%',
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        '& > h1': {
            fontWeight: '700',
            fontSize: '4em',
        }
    },
    bodyWrapper: {
        display: 'flex',
        width: '100%',
        color: '#232',
        padding: '60px 0',
        '& aside': {
            width: '20%',
            flex: '1'
        },
        '& > section': {
            maxWidth: '740px',
            flex: '3'
        }
    },
    articleSummary: {
        fontWeight: '500',
        fontSize: '1.5em',
        fontStyle: 'italic',
        lineHeight: '1.5',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        border: '1px solid red',
        padding: '40px',
        margin: '0'
    },
    articleBody: {
        fontSize: '20px',
        lineHeight: '1.5',
        padding: '20px 0',
    }
});

export default articlesPageStyle;
