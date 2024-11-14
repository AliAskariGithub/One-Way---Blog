// components/PostCard.tsx

type PostCardProps = {
  image: string;
  title: string;
  year: number
  description: string;
};

const PostCard: React.FC<PostCardProps> = ({ image, title, year, description }) => (
  <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-up">
    <img src={image} alt={title} className="rounded-md mb-4 w-full h-48 object-cover" />
    <h3 className="text-2xl font-semibold text-blue-600 mb-1">{title}</h3>
    <h3 className="text-2xl font-semibold text-gray-500 mb-3"><span className="text-black font-bold">Introduced:</span>  {year}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default PostCard;
