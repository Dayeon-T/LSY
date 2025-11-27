import { useVelogPosts } from "./useVelogPosts";
import Masonry from "react-masonry-css";
import VelogItem from "../components/VelogItem";

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
};

export default function VelogPostsAuto() {
  const { pageItems, loading } = useVelogPosts(6);

  if (loading) return <p>불러오는 중...</p>;

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="project-masonry"
      columnClassName="project-masonry-column"
    >
      {pageItems.map((post) => (
        <VelogItem
          key={post.url}
          title={post.title}
          intent={post.description}
          period={post.date}
          image={post.thumbnail}
          url={post.url}
        />
      ))}
    </Masonry>
  );
}
