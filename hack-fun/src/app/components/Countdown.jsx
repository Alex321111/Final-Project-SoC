import { useState, useEffect } from 'react';

function CountDownTimer({ deadline }) {
  function calculateTimeLeft() {
    const now = new Date(
      new Date().toLocaleString('en-US', { timeZone: 'Europe/London' })
    );
    const difference = new Date(deadline) - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    if (timeLeft?.days > 0) {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  return (
    <>
      <div className="bg-dark-2">
        <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
          <span className="text-2xl bg-dark-2 sm:text-3xl font-semibold text-white text-center tracking-widest px-2">
            Time left until project starts
          </span>
          <div className="flex justify-center gap-3 sm:gap-8">
            <div className="flex flex-col gap-5 relative">
              <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                  {timeLeft?.days}
                </span>
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
              </div>
              <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
                {timeLeft?.days == 1 ? 'Day' : 'Days'}
              </span>
            </div>
            <div className="flex flex-col gap-5 relative">
              <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                  {timeLeft?.hours}
                </span>
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
              </div>
              <span className="text-[#8486A9] text-xs sm:text-2xl text-center font-medium">
                {timeLeft?.hours == 1 ? 'Hour' : 'Hours'}
              </span>
            </div>
            <div className="flex flex-col gap-5 relative">
              <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                  {timeLeft?.minutes}
                </span>
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
              </div>
              <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
                {timeLeft?.minutes == 1 ? 'Minute' : 'Minutes'}
              </span>
            </div>
            <div className="flex flex-col gap-5 relative">
              <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                  {timeLeft?.seconds}
                </span>
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
              </div>
              <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
                {timeLeft?.seconds == 1 ? 'Second' : 'Seconds'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountDownTimer;
