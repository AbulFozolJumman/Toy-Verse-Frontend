// This is default Error testing page
const ShowError = (props) => {
    return (
        <div>
            {props.map((k,i)=><h2 key={i}>{k}</h2>)}
        </div>
    );
};

export default ShowError;