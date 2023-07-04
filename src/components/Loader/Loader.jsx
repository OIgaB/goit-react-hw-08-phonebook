//Компонент спінера відображається, доки відбувається завантаження 
import { ProgressBar } from  'react-loader-spinner';


const Loader = () => {
    return (
        <ProgressBar
            height="90"
            width="90"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
            wrapperClass="progress-bar-wrapper"
            borderColor = '#f4e02e'
            barColor = '#515dff'
        />
    );
};

export default Loader;