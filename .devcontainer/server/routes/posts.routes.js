import { Router } from "express";
import { createPost, deletingPost, editingPost, getPost, gettingPost } from "../controlers/posts.controlers.js";

const router = Router()

router.get('/post', getPost)

router.post('/post',  createPost )

router.put('/post/:id', editingPost)

router.delete('/post/:id', deletingPost)

router.get('/post/:id', gettingPost )

export default router