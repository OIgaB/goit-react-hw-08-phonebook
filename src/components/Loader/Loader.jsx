//Компонент спінера відображається, доки відбувається завантаження 
import { ThreeDots } from  'react-loader-spinner';


export const Loader = () => {
    return (
        <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#4fa94d" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{
                position: 'fixed',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',                
            }}
            wrapperClassName=""
            visible={true}
        />
    );
};