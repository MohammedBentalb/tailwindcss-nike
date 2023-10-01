import { arrowRight } from '../assets/icons';
import { bigShoe1 } from '../assets/images';
import { shoes, statistics } from '../constants';
import Button from '../components/Button';
import ShoeCard from '../components/ShoeCard';
import { useState } from 'react';

function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="max-container flex min-h-screen w-full 
      flex-col justify-center gap-10 xl:flex-row"
    >
      <div
        className="max-xl:padding-x relative flex w-full flex-col items-start 
        justify-center pt-28 xl:w-2/5"
      >
        <p className="font-montserrat text-lg text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white">
            The New Arrival
          </span>{' '}
          <br />
          <span className="mt-3 inline-block text-coral-red">Nike</span>{' '}
          {'shoes'}
        </h1>
        <p className="mb-14 mt-6 font-montserrat leading-8 text-slate-gray sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="font-montserrat text-4xl font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className=" relative flex flex-1 
      items-center justify-center bg-primary
      bg-hero bg-cover max-xl:py-40 xl:min-h-screen"
      >
        <img
          src={bigShoeImg}
          alt="shoes"
          width={600}
          height={'auto'}
          className="relative z-10 object-contain"
        />
        <div className="xs:gap-2 absolute bottom-[3%] flex w-full justify-center gap-4 max-sm:w-[98%]">
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={index}
              imgURL={shoe}
              changeBigShoe={(shoe) => {
                setBigShoeImg(shoe);
              }}
              bigShoeImg={bigShoeImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
