import { ICONS } from "@/assets";
import { useCart } from "@/providers/CartProvider/CartProvider";
import Image from "next/image";

type TCartItemProps = {
  _id: string;
  name: string;
  image: string;
  price: number;
  duration: string;
  lessons: string;
  rating: string | number;
};

const CartItem: React.FC<TCartItemProps> = ({
  _id,
  name,
  image,
  price,
  duration,
  lessons,
  rating,
}) => {
  const { removeCourseFromCart } = useCart();
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-between bg-white border-b border-neutral-100 gap-4 w-full pb-[22px]">
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt="lessons"
          className="rounded-lg w-[160px] h-[116px]"
          width={160}
          height={116}
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-neutral-45 font-semibold text-sm sm:text-base leading-[25px] w-full max-w-[377px]">
            {name}
          </h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <Image
                  key={index}
                  src={ICONS.rating}
                  alt="training"
                  className="size-3"
                />
              ))}
            </div>
            <p className="text-neutral-25 text-[13px] font-medium">{rating}</p>
          </div>
          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center gap-1 md:gap-2">
              <Image
                src={ICONS.lessons}
                alt="lessons"
                className="size-4 md:size-5"
              />
              <p className="text-neutral-25 text-[10px] md:text-[13px] leading-5">
                {lessons} Lessons
              </p>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Image
                src={ICONS.duration}
                alt="lessons"
                className="size-4 md:size-5"
              />
              <p className="text-neutral-25 text-[10px] md:text-[13px] leading-5">
                {duration}
              </p>
            </div>

          </div>
          <div className="md:hidden  flex flex-row md:flex-col xl:flex-row items-stretch md:items-center gap-10">
            <h2 className="text-neutral-45 text-base md:text-2xl font-semibold leading-9">
              ₹{price}
            </h2>
            <button
              onClick={() => removeCourseFromCart(_id)}
              className="text-rose-500 font-semibold leading-[25px] text-sm sm:text-base"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-row md:flex-col xl:flex-row items-stretch md:items-center gap-10">
        <h2 className="text-neutral-45 text-2xl font-semibold leading-9">
          ₹{price}
        </h2>
        <button
          onClick={() => removeCourseFromCart(_id)}
          className="text-rose-500 font-semibold leading-[25px]"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
