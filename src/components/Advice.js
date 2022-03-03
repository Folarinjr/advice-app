import { useState } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      // console.log(data.slip);
      setAdvice(data.slip);
    } catch (err) {
      console.error("Something went wrong in fetching data!");
    }
  };

  //useEffect(() => {
   // getAdvice();
  //}, []);

  const onClick = ()=>{
      getAdvice();
  }

  return (
    
      <div className="advice">
        <p className="advice__id">ADVICE {advice.length !== 0 ? `#${advice.id}`: ': Please, click the dice For today advice'}</p>
        <q className="advice__text">{advice.advice}</q>
        <div className="line__break">
            <div className="line__break-img"></div>
        </div>
        <div className="dice">
          <div className="dice-img" onClick={onClick}></div>
        </div>
      </div>
  );
}
export default Advice;