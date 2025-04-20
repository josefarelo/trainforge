import './Loader.scss';

const Loader = () => {
    return (
        <div className="loader">
            <div className="loader__content">
                <div className="loader__circle"></div>
                <div className="loader__circle"></div>
                <div className="loader__circle"></div>
                <div className="loader__shadow"></div>
                <div className="loader__shadow"></div>
                <div className="loader__shadow"></div>
            </div>
        </div>
    );
};

export default Loader;