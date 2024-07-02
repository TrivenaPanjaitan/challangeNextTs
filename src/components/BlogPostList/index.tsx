import Link from "next/link";
import styles from "./index.module.scss";

const BlogPostList = ({ posts }: { posts: any[] }) => (
  <div className="container">
    <div className="row">
      {posts.map((post) => (
        <div key={post.id} className="col-md-6 mb-4">
          <div className={`card ${styles.card}`}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body.substring(0, 100)}...</p>
              <Link href={`/posts/${post.id}`} className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BlogPostList;
