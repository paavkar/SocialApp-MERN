import express from "express"
import { createPost, getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js"
import { verifyToken } from "../middleware/auth.js"

const router = express.Router()

/** CREATE */
router.post("/create", verifyToken, createPost);

/** READ */
router.get("/", verifyToken, getFeedPosts)
router.get("/:userId", verifyToken, getUserPosts)

/** UPDATE */
router.patch("/:id/like", verifyToken, likePost)

export default router