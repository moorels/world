

import styles from './SearchInput.module.css';


const SearchInput = ({...rest}) => {
    return (
        <div className={styles.wrapper}>

        <input className={styles.input} {...rest}/>

        </div>
    );
};

export default SearchInput;