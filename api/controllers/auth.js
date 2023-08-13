import { connection } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
    //CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    connection.query(q, [req.body.email, req.body.username], (err, data) => {
        console.log("query is in!")
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json("User already exists!");

        // Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
        const values = [req.body.username, req.body.email, hash];

        connection.query(q, [values], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json("User has been created.");
        });
    });
};