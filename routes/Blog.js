const express = require('express');
const router = express.Router();

const Blog = require('./../models/Blog')

router.get('/', async (req, res) => {
    try {
        const blog = await Blog.find();
        res.send(blog)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server Error" })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.send(blog);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server Error" })
    }
})

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newBlog = new Blog(data);
        const response = await newBlog.save();
        console.log("Data Saved");
        res.status(200).json(response);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server Error" })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        const blog = await Blog.findByIdAndUpdate(id, newData, { new: true });
        res.send(blog);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server Error" })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const response = await Blog.findByIdAndDelete(id);
        res.status(200).json({ message: "Blog Deleted Sucessfully" })

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server Error" })
    }
})

module.exports = router;