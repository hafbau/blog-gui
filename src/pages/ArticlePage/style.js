// ##############################
// // // Article Page styles
// #############################
export const transparentLayer = {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    padding: '40px',
    boxSizing: 'border-box'
};

const articlePageStyle = theme => ({
    articlePage: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // height: '100vh',
        // width: 'fit-content'
    },
    hero: {
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: '100%',
        height: '100vh',
        position: 'relative',
        top: '0',
        left: '0',
        backgroundColor: '#232'
    },
    transparentLayer,
    titleWrapper: {
        boxSizing: 'border-box',
        textTransform: 'uppercase',
        margin: '0 auto',
        width: '50%',
        fontWeight: '700',
        height: '100%',
        flex: '1',
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
    adjacentArticlesNav: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    adjacentArticle: {
        '& > span': {
            fontSize: '2.2em'
        }
    },
    right: {
        textAlign: 'right'
    },
    bodyWrapper: {
        display: 'flex',
        width: '100%',
        color: '#232',
        padding: '120px 0',
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

export default articlePageStyle;
