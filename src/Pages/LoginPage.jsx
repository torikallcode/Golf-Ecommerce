import React from "react";

export const LoginPage = () => {
  return (
    <div className="section w-full h-[100dvh] bg-teal-500 flex flex-col lg:flex-row justify-center items-center">
      {/* top */}
      <div className="w-full h-[45%] lg:h-full bg-primary-0">
        <div className="bg-cover w-full h-full flex justify-center items-center" style={{ backgroundImage: `url(./img/golf-balls-arrangement-still-life.jpg)` }}>
          <h1 className="text-3xl font-utama text-slate-100 font-semibold sm:text-4xl">The Golf.</h1>
        </div>
      </div>
      {/* botoom */}
      <div className="w-full h-[55%] lg:h-full bg-white  flex justify-center items-center">
        <main className="bg-white grid grid-cols-1 content-between w-full h-full lg:max-w-md lg:max-h-[30rem] xl:max-w-lg px-8 py-10">
          <div className="flex flex-col mb-8">
            <h2 className="text-4xl sm:text-5xl lg:text-3xl font-bold font-utama mb-6">Sign in</h2>
            <p className="font-normal font-utama text-slate-500 sm:text-lg lg:text-sm">
              Don’t have an accout yet?{" "}
              <span className="text-teal-500 font-medium cursor-pointer">
                Sign Up
              </span>
            </p>
          </div>
          <form action="" className="flex flex-col mb-8">
            <input
              type="text"
              placeholder="Your username or email address"
              className="py-[14px] font-utama sm:text-lg lg:text-sm border-b border-slate-400 bg-transparent outline-none mb-8"
            />
            <input
              type="password"
              placeholder="Password"
              className="py-[14px] font-utama sm:text-lg lg:text-sm border-b border-slate-400 bg-transparent outline-none"
            />
          </form>
          <div className="flex justify-between mb-8 items-center">
            <div className="cursor-pointer flex items-center gap-x-2">
              <img className="w-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAASFJREFUSEvtlu0NwiAQhq+b6Ca6iU6iTqJOopvoJtqn4ciVAlpK0j+QNCYN8Lz3Ue/tZKXVrcSVHHjjRB0KxL1FhOeZOpsCn0XkVAAMjwC/9y+5b7Ri4EevdFcBaq9AwNa+CME2UjZfRORWIIIy8VzdL1dwl488BH8chNrsC4DhEYWTwVHUFkwToZB1LIw0phUo5WMRzNBwKTD1QGGNRdQvd5FPtwXb+tb+vrWEDTxUoKW6RkfrHa25Rn8grblacy3JgH5OfurZYRAdX0to7qwdt37qWbAdXxOrskCAtVKeF44/qw44qUk6xYwYtT4YRvVvWevDATaXWNpcUiZWKjbwgQOuYW8nJk/V/TL0mjI193NKTZSzDf0cQNHe2t7qbxFfsNJSH+V9YZsAAAAASUVORK5CYII=" />
              <h1 className="font-utama text-base sm:text-lg lg:text-sm">Remember me</h1>
            </div>
            <h3 className="text-xs font-semibold font-utama cursor-pointer sm:text-base lg:text-xs">
              Forgot password?
            </h3>
          </div>
          <button className="bg-primary-0 p-3 sm:p-4 text-white w-full rounded-lg font-utama sm:text-lg lg:text-sm lg:p-3">
            Sign in
          </button>
        </main>
      </div>
    </div>
  );
};
