import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [waiting, setWaiting] = useState<number>(0);
  const [accept, setAccept] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function formatTime() {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  }

  function padZero(number: number) {
    return (number < 10 ? "0" : "") + number;
  }

  const handleAddMoney = () => {
    setWaiting((w) => w + 1);
    setTimeout(() => {
      setAccept((a) => a + 1);
      setWaiting((w) => w - 1);
    }, 1000);
  };

  return (
    <>
      {/* -------------------------DELETE---------------------------- */}
      <div>
        <p>Waiting money: {waiting} </p>
        <p>Accept money: {accept} </p>
        <button onClick={handleAddMoney}>+Money</button>
      </div>
      <div>{formatTime()}</div>
      {/* ----------------------------------------------------- */}
    </>
  );
};

export default DigitalClock;
