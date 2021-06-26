import Mailinfo from "./MailInfo";
const Homepage = () => {
    const data = [{
        id:1,
        body: 'MEEt vahaeoihf'
    },
    {
        id:2,
        body: 'MEEt 2 vahaeoihf'
    }] ;
   
    return (
        <div>
            {data.map((obj)=>{
            return <Mailinfo id={obj.id} body={obj.body}></Mailinfo>
        })}
        </div>
        
    )

} ;

export default Homepage ;