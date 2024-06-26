// import { privateAxios } from "./helper";
// import { myAxios } from "./helper";
// //create post function
// export const createPost = (postData) => {
//   //   console.log(postData);
//   return privateAxios
//     .post(
//       `/user/${postData.userId}/category/${postData.categoryId}/posts`,
//       postData
//     )
//     .then((response) => response.data);
// };

// //get all posts

// export const loadAllPosts = (pageNumber, pageSize) => {
//   return myAxios
//     .get(
//       `/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addDate&sortDir=desc`
//     )
//     .then((response) => response.data);
// };

// //load single post of given id
// export const loadPost = (postId) => {
//   return myAxios.get("/posts/" + postId).then((reponse) => reponse.data);
// };

// export const createComment = (comment, postId) => {
//   return privateAxios.post(`/post/${postId}/comments`, comment);
// };

// //upload post banner image

// export const uploadPostImage = (image, postId) => {
//   let formData = new FormData();
//   formData.append("image", image);
//   return privateAxios
//     .post(`/post/image/upload/${postId}`, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     })
//     .then((response) => response.data);
// };

// //get cateory wise posts
// export function loadPostCategoryWise(categoryId) {
//   return privateAxios
//     .get(`/category/${categoryId}/posts`)
//     .then((res) => res.data);
// }

// export function loadPostUserWise(userId) {
//   return privateAxios.get(`/user/${userId}/posts`).then((res) => res.data);
// }

// //delete post
// export function deletePostService(postId) {
//   return privateAxios.delete(`/posts/${postId}`).then((res) => res.data);
// }

// //update post
// export function updatePost(post, postId) {
//   console.log(post);
//   return privateAxios.put(`/posts/${postId}`, post).then((resp) => resp.data);
// }


import { privateAxios, myAxios } from "./helper";

// Create post function
export const createPost = (postData) => {
  return privateAxios
    .post(`/user/${postData.userId}/category/${postData.categoryId}/posts`, postData)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error creating post:", error.response || error.message);
      throw error;
    });
};

// Get all posts
export const loadAllPosts = (pageNumber, pageSize) => {
  return myAxios
    .get(`/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addDate&sortDir=desc`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error loading all posts:", error.response || error.message);
      throw error;
    });
};

// Load single post of given id
export const loadPost = (postId) => {
  return myAxios
    .get(`/posts/${postId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error loading post:", error.response || error.message);
      throw error;
    });
};

// Create comment
export const createComment = (comment, postId) => {
  return privateAxios
    .post(`/post/${postId}/comments`, comment)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error creating comment:", error.response || error.message);
      throw error;
    });
};

// Upload post banner image
export const uploadPostImage = (image, postId) => {
  let formData = new FormData();
  formData.append("image", image);

  return privateAxios
    .post(`/post/image/upload/${postId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error uploading post image:", error.response || error.message);
      throw error;
    });
};

// Get category-wise posts
export function loadPostCategoryWise(categoryId) {
  return privateAxios
    .get(`/category/${categoryId}/posts`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error loading posts by category:", error.response || error.message);
      throw error;
    });
}

// Get user-wise posts
export function loadPostUserWise(userId) {
  return privateAxios
    .get(`/user/${userId}/posts`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error loading posts by user:", error.response || error.message);
      throw error;
    });
}

// Delete post
export function deletePostService(postId) {
  return privateAxios
    .delete(`/posts/${postId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error deleting post:", error.response || error.message);
      throw error;
    });
}

// Update post
export function updatePost(post, postId) {
  return privateAxios
    .put(`/posts/${postId}`, post)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error updating post:", error.response || error.message);
      throw error;
    });
}
