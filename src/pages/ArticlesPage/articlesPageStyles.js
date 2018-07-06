// ##############################
// // // Articles Page styles
// #############################

export const articles = {
    alignItems: 'stretch',
    display: 'flex',
    height: '100vh',
}
export const articlePreviewTextWrapper = {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '40px',
    height: '100%',
    boxSizing: 'border-box'
}

const articlesPageStyle = theme => ({
    articles,
    articlePreview: {
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: '33.3%',
    },
    articlePreviewTextWrapper
});

export default articlesPageStyle;
