import './styles.css';

export const TextInput = ({searchValue, handelChenge}) => {

    return(
        <input
            className="text-input"
            onChange={handelChenge}
            value={searchValue}
            type="search"
            placeholder="Type your search"
        />
    )
}