import "./App.css";

export default function App() {

  const price=[
    {
      state:"FREE",
      rate:"$0 /month",
      user:"👍Single user",
      storage:"👍5GB Storage",
      public:"👍Unlimited Public Projects",
      access:"👍Community Access",
      private:"👎Unlimited Private Projects",
      support:"👎Dedicated Phone Support",
      domain:"👎Free Subdomain",
      reports:"👎Monthly Status Reports"
    },
    {
      state:"PLUS",
      rate:"$9 /month",
      user:"👍5 user",
      storage:"👍50GB Storage",
      public:"👍Unlimited Public Projects",
      access:"👍Community Access",
      private:"👍Unlimited Private Projects",
      support:"👍Dedicated Phone Support",
      domain:"👍Free Subdomain",
      reports:"👎Monthly Status Reports"
    },
    {
      state:"PRO",
      rate:"$49 /month",
      user:"👍Unlimited user",
      storage:"👍150GB Storage",
      public:"👍Unlimited Public Projects",
      access:"👍Community Access",
      private:"👍Unlimited Private Projects",
      support:"👍Dedicated Phone Support",
      domain:"👍Unlimited Free Subdomain",
      reports:"👍Monthly Status Reports"
    }
  ]
  return (
    <div className="App">
      <div className="page">
      {price.map((v)=><Table props={v} />)}
      </div>
     
    </div>
  );
}
function Table({props}){
 /* const cost={
      state:"FREE",
      rate:"$0 /month",
      user:"👍Single user",
      storage:"👍5GB Storage",
      public:"👍Unlimited Public Projects",
      access:"👍Community Access",
      private:"👎Unlimited Private Projects",
      support:"👎Dedicated Phone Support",
      domain:"👎Free Subdomain",
      reports:"👎Monthly Status Reports"
  }*/
  return(
    <div className="container">
      <div className="top">
        <h3>{props.state}</h3>
        <h2>{props.rate}</h2>
      </div>
      <hr></hr>
      <p className="cont">{props.user}</p>
      <p className="cont">{props.storage}</p>
      <p className="cont">{props.public}</p>
      <p className="cont">{props.access}</p>
      <p className="cont">{props.private}</p>
      <p className="cont">{props.support}</p>
      <p className="cont">{props.domain}</p>
      <p className="cont">{props.reports}</p>
      <button className="but">BUTTON</button>
    </div>
  );
}


