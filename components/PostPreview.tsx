export default undefined;

// import Container from "~/components/Container";
// import { Link } from "@remix-run/react";
// import type { IBlogPost } from "~/blog-api/types";
// import { dateTimeString } from "~/components/date-formatter";
//
// function postAbstract({ body }: IBlogPost) {
//   return body.length > 150 ? body.substring(0, 150) + "..." : body;
// }
//
// // type PostPreviewProps = { post: IBlogPost };
// export default function PostPreview({ post }: PostPreviewProps) {
//   return (
//     <Container renderAs={"article"}>
//       <p>{dateTimeString(post.date)}</p>
//       <div className={"space-y-4"}>
//         <Link
//           className={"decoration-primary hover:underline hover:decoration-2"}
//           to={`/post/${post.id}`}
//         >
//           <h2
//             className={
//               "border-b-[1px] border-b-main text-3xl font-bold text-primary"
//             }
//           >
//             {post.title}
//           </h2>
//         </Link>
//         <p className={"italic"}>{postAbstract(post)}</p>
//         <NewestComment post={post} />
//       </div>
//     </Container>
//   );
// }
//
// type NewestCommentProps = {
//   post: IBlogPost;
// };
// function NewestComment({ post }: NewestCommentProps) {
//   if (!post.newestComment) {
//     return null;
//   }
//
//   return (
//     <>
//       <p>Latest comment</p>
//       <p className={"italic"}>{post.newestComment.comment}</p>
//     </>
//   );
// }
