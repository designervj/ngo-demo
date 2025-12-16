import React from "react";

// 🔹 FIXED LAUNCH DATE → 18 December, 11:00 AM
export const LAUNCH_DATE = new Date(2025, 11, 18, 11, 0, 0);
// NOTE: Month 11 = December (0 se start hota hai)

export const ComingSoon = () => {
  const [timeRemaining, setTimeRemaining] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = LAUNCH_DATE.getTime() - now;

      if (distance > 0) {
        setTimeRemaining({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Coming Soon 
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            We're working hard to bring you something amazing. Stay tuned!
          </p>

          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-indigo-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-indigo-600">
                {timeRemaining.days}
              </div>
              <div className="text-sm text-gray-600 mt-1">Days</div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-indigo-600">
                {timeRemaining.hours}
              </div>
              <div className="text-sm text-gray-600 mt-1">Hours</div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-indigo-600">
                {timeRemaining.minutes}
              </div>
              <div className="text-sm text-gray-600 mt-1">Minutes</div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-indigo-600">
                {timeRemaining.seconds}
              </div>
              <div className="text-sm text-gray-600 mt-1">Seconds</div>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            Launch Date:{" "}
            {LAUNCH_DATE.toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
