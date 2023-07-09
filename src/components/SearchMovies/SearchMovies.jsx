import PropTypes from 'prop-types';

function SearchMovies({ onSubmit }) {
    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        onSubmit(form.elements.name.value);
        form.reset();
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

SearchMovies.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchMovies;
