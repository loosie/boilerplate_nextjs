// 페이지 공통부분 처리
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head'
import '../styles.scss';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title> next.js boilerplate - basic</title>
            </Head>

            <Component {...pageProps} />
        </>
    )
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default App;