const HistoryMail = (props) => {
    const id = props.id ;
    const body = props.body;

    return (<div>
        <p>{id}</p>
        <br>
        </br>
        <p>{body}</p>

        <hr>
        </hr>
        <hr>
        </hr>
    </div>)

};

export default HistoryMail;