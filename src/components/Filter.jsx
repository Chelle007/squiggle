function Filter({ color, text }) {
    return (
        <div className={`${color} px-4 py-2 items-center justify-center flex rounded-full `}>
            <p>{text}</p>
        </div>
    );
}

export default Filter;