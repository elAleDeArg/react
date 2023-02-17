import post from "../models/post.js";
import Post from "../models/post.js";
import { deleteImage, uploadImage } from "../libs/cloudinary.js";
import fs from "fs-extra";

export const getPost = async (req, res) => {
  try {
    const posts = await post.find();
    res.send(posts);
  } catch (error) {
    console.error(error.message);
    return req.sendStatus(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    let image;

    if (req.files.image) {
      const resultado = await uploadImage(req.files.image.tempFilePath);
      console.log(resultado);
      image = {
        url: resultado.secure_url,
        public_id: resultado.public_id,
      };
      await fs.remove(req.files.image.tempFilePath);
    }

    const newPost = new Post({ title, description, image });

    await newPost.save();

    return res.json(newPost);
  } catch (error) {
    console.error(error.message);
    return req.sendStatus(500).json({ message: error.message });
  }
};

export const editingPost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(post);
    return res.json(post);
  } catch (error) {
    console.error(error.message);
    return req.sendStatus(500).json({ message: error.message });
  }
};

export const deletingPost = async (req, res) => {
  try {
    const postRemove = await post.findByIdAndDelete(req.params.id);

    if (!postRemove) return res.sendStatus(404);

    if (postRemove.image.public_id) {
      await deleteImage(postRemove.public_id);
    }
    return res.sendStatus(204);
  } catch (error) {
    console.error(error.message);
    return req.sendStatus(500).json({ message: error.message });
  }
};

export const gettingPost = async (req, res) => {
  try {
    const postfound = await Post.findById(req.params.id);

    if (!postfound) return res.sendStatus(404);

    return res.json(postfound);
  } catch (error) {
    console.error(error.message);
    return req.sendStatus(500).json({ message: error.message });
  }
};
