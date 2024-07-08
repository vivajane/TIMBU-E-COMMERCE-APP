import rate from "../assets/rate.png";
import ratee from "../assets/ratee.png";
import fairlady from "../assets/fairlady.png";
import blacklady from "../assets/blacklady.png";
import blackman from "../assets/blackman.png";
import fairman from "../assets/fairman.png";
const reviews = [
  {
    id: 1,
    image: fairman,
    name: "Johnny Chen",
    date: "March 14, 2021",
    text: "This shirt exceeded my expectations! The fabric is incredibly soft and the fit is perfect. I’ve received so many compliments when I wear it. Definitely buying more colors.",
  },
  {
    id: 2,
    image: blackman,
    name: "Lawal Adewale",
    date: "March 14, 2021",
    text: "Great quality and stylish design. It’s comfortable for everyday wear, though I wish it came in more sizes. Overall, a solid purchase.",
  },
  {
    id: 3,
    name: "Kristin Watson",
    image: fairlady,
    date: "March 14, 2021",
    text: "The shirt is nice and breathable, perfect for summer. The only downside is that it shrank slightly after washing, but still fits well.",
  },
  {
    id: 4,
    image: blacklady,
    name: "Sanjay Craig",
    date: "March 14, 2021",
    text: "I like the design and the fabric feels premium. It’s a bit snug around the shoulders, but otherwise, it’s a great addition to my ",
  },
  {
    id: 5,
    name: "T.W. Lewis",
    image: fairman,
    date: "March 14, 2021",
    text: "This has become my go-to shirt for casual outings. It's comfortable, looks great, and I've received many compliments on it.",
  },
];

const Reviews = () => {
  return (
    <div className="md:px-24 px-6 flex flex-col md:w-[50%] w-full ">
      {reviews.map((review) => (
        <div key={review.id} className="flex gap-4 md:py-3 py-4">
          <img className="w-6 h-fit" src={review.image} alt="fff" />
          <div className="">
            <div className="flex">
              <img src={rate} alt="rate" />
              <img src={rate} alt="rate" />
              <img src={rate} alt="rate" />
              <img src={rate} alt="rate" />
              <img src={rate} alt="ratee" />
            </div>
            <p className="py-3">{review.text}</p>
            <p className="font-extrabold">{review.name}</p>
            <p className="pt-3">{review.date}</p>
            <hr  className="my-2"/>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Reviews;
