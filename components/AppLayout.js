import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({ children }) => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        boilerplate - with bootstrap
                    </Link>
                </div>
            </nav>
            <div className="mt-5">공통메뉴</div>
            {children}
        </>
    )
};


AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;