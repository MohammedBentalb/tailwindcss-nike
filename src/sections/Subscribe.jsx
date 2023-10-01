import Button from '../components/Button';

function Subscribe() {
  return (
    <section
      className="max-container flex items-center justify-between
     gap-10 max-lg:flex-col"
    >
      <h3 className="font-palanquin text-4xl font-bold leading-[68px] lg:max-w-lg">
        {'Sign up Form  '}
        <span className="text-coral-red">Updates</span>& NewsLetter
      </h3>
      <div
        className="flex w-full min-w-[500px] items-center gap-5 rounded-full
        p-2.5 max-sm:min-w-[320px] max-sm:flex-col
       max-sm:items-center sm:border sm:border-slate-gray lg:max-w-[40%]"
      >
        <input
          type="email"
          name="email-input"
          id="email-input"
          placeholder="Subscribe@nike.com"
          className="input text-[17px] font-semibold"
        />
        <div className="flex items-center max-sm:w-full max-sm:justify-center">
          <Button label={'Sign up'} />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
