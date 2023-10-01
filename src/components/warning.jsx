import { useState } from 'react';

export default function Warning() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      {toggle && (
        <section
          className=" fixed z-50 flex h-[100vh] w-[100vw] 
        items-center justify-center bg-gray-400/60 "
        >
          <div
            className="fixed  flex h-fit w-fit flex-col items-center 
          justify-center gap-6 rounded-xl bg-blue-50  p-28 max-sm:p-12"
          >
            <p
              className="  text-justify text-lg 
            font-semibold  max-sm:text-center"
            >
              All data chown here are{' '}
              <span className="text-coral-red">Fake</span> and this website had
              been made for <span className="text-coral-red">Educational</span> purposes.
            </p>
            <button
              onClick={() => {
                setToggle((prev) => !prev);
              }}
              className="w-fit rounded-full border-2 border-slate-gray p-2 hover:border-coral-red hover:text-coral-red"
            >
              I understand
            </button>
          </div>
        </section>
      )}
    </>
  );
}
