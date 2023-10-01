const ShoeCard = ({ imgURL, changeBigShoe, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoe(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`rounded-xl border-2 ${
        bigShoeImg === imgURL.bigShoe
          ? 'border-coral-red'
          : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className="flex h-[100%] items-center justify-center rounded-xl 
      bg-card bg-cover bg-center p-4"
      >
        <img
          src={imgURL.thumbnail}
          alt="shoe"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
