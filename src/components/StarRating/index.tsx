// Unicode fallback; replace with SVG if needed
const FullStar = () => <span style={{ color: "#FFD700" }}>★</span>;
const HalfStar = () => <span style={{ color: "#FFD700" }}>⯨</span>; // Unicode for half star
const EmptyStar = () => <span style={{ color: "#ccc" }}>☆</span>;

const StarRating = ({
  rating,
  outOf = 5,
}: {
  rating: number;
  outOf?: number;
}) => {
  const stars = [];

  for (let i = 1; i <= outOf; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FullStar key={i} />);
    } else if (i - rating <= 0.5) {
      stars.push(<HalfStar key={i} />);
    } else {
      stars.push(<EmptyStar key={i} />);
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;
