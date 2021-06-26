import HistoryMail from "./HistoryMail";
const History = () => {
    const data = [{
        id:1,
        body: 'MEEt vahaeoihf sent'
    },
    {
        id:2,
        body: 'MEEt 2 vahaeoihf sent'
    }] ;
   
    return (
        <div>
            {data.map((obj)=>{
            return <HistoryMail id={obj.id} body={obj.body}></HistoryMail>
        })}
        </div>
        
    )
} ;

export default History ;