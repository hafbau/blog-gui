// ##############################
// // // Articles Page styles
// #############################

const articlesPageStyle = theme => ({
    articles: {
        alignItems: 'stretch',
        display: 'flex',
        height: '100vh',
    },
    articlePreview: {
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: '33.3%',
    },
    articlePreviewTextWrapper: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px',
        height: '100%',
        width: '100%'
    }
});

export default articlesPageStyle;
