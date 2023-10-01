import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import Button from '../components/Button';

function SpecialOffers() {
  return (
    <section className="max-container flex flex-wrap items-center justify-between gap-10 max-xl:flex-col-reverse">
      <div className="flex-1">
        <img
          src={offer}
          alt="offers"
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>
      <div className="flex  flex-1 flex-col">
        <h2 className="  font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className=" text-coral-red"> Special</span> Offer
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From Premier selections to incredible savings, we
          offer unparalleled value that sets up apart.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Navigating a realm of fulfill your unique desires, surpassing the
          loftiest expectations. Your journey with us is nothing short of
          exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now"  iconURL={arrowRight}/>
          <Button label="Learn more"  backgroundColor="gb-white"
            borderColor='border-stale-gray' textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
