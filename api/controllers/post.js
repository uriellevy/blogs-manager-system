import { connection } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat = ?" : "SELECT * FROM posts";
    connection.query(q, [req.query.cat], (err,data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    })

};

export const getPost = (req, res) => {
 
};

export const addPost = (req, res) => {
 
};

export const deletePost = (req, res) => {
 
};

export const updatePost = (req, res) => {
 
};