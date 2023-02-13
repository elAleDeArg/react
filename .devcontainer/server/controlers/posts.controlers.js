import post from "../models/post.js";
import Post from "../models/post.js";

export const getPost = async (req, res) => {
  const posts = await post.find();
  res.send(posts);
};

export const createPost = async (req, res) => {
  const { title, description } = req.body;

  const newPost = new Post({ title, description });

  await newPost.save();

  return res.json(newPost);
};

export const editingPost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  console.log(post);
  return res.json("recieved");
};

export const deletingPost = (req, res) => res.send("deleting a post");

export const gettingPost = (req, res) => res.send("getting a post");
