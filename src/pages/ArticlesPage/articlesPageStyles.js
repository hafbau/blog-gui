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
    articlePreviewTextWrapper,
    footerStyle: {
        footer: {
            position: 'absolute',
            bottom: '0',
            padding: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            boxSizing: 'border-box',
        },
        arrows: {
            borderRadius: '50%',
            backgroundColor: 'white',
            padding: '15px',
            cursor: 'pointer'
        }
    }
});

export default articlesPageStyle;
