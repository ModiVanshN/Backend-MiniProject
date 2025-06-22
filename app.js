const express = require('express');
const app= express();
const cookieParser = require('cookie-parser');
const userModel= require('./models/user');
const postModel= require('./models/post');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser");
const path = require('path');
const upload = require('./config/multerconfig');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());


app.get('/', (req, res) => {
    res.render('index');
});

app.post('/register', async (req, res) => {
    const { username, name, age, email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (user) {
        return res.status(400).send('User already exists');
    }

    bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
            return res.status(500).send('Error hashing password');
        }

        const newUser = new userModel({
            username,
            name,
            age,
            email,
            password: hash
        });
            await newUser.save(); // Save the user to the database
            let token = jwt.sign({ email: email, id: newUser._id }, "shhhh");
            res.cookie("token", token);
            res.redirect('/login');
    });
});
app.get('/login',async(req,res)=>{
    res.render('login');
});

app.post('/login', async (req, res) => {
    const {email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) {
        return res.status(400).send('Some error occurred');
    }
    bcrypt.compare(password,user.password, (err, result) => {
        if(result){
            let token = jwt.sign({ email: email, id: user._id }, "shhhh");
            res.cookie("token", token);
            res.redirect('/profile');
        }
        else{
            res.redirect('/login');
        }
    });
});

app.get('/logout', (req, res) => {
    res.cookie('token','');
    res.redirect('/login');
});
app.get('/profile', loggedIn, async (req, res) => {
    let user=await userModel.findOne({email:req.user.email}).populate('posts');
    res.render('profile',{user});
});

app.get('/profile/upload', loggedIn, (req, res) => {
    res.render('upload');
});

app.post('/upload', loggedIn, upload.single("profilepic"), async (req, res) => {
    try {
        if (!req.file) {
            res.redirect('/profile/upload');
        }

        let user = await userModel.findOne({ email: req.user.email });
        user.profilepic = req.file.filename;
        await user.save();
        res.redirect('/profile');
    } catch (error) {

        console.error("Error uploading profile picture:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/like/:id', loggedIn, async (req, res) => {
  let post = await postModel.findOne({_id:req.params.id}).populate('user');
  
  if(post.likes.indexOf(req.user.id) === -1){
    post.likes.push(req.user.id);
  }
  else{
    post.likes.splice(post.likes.indexOf(req.user.id),1);
  }
  await post.save();
  res.redirect('/profile');
});

app.post("/edit/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const updatedContent = req.body.content;

    // Update the post in the database
    await postModel.findByIdAndUpdate(postId, { content: updatedContent });

    // Redirect back to the profile page
    res.redirect("/profile");
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post('/post',loggedIn,async(req,res)=>{
    let user=await userModel.findOne({email:req.user.email});
    let {content}=req.body;
    let post=await postModel.create({
        user:user._id,
        content:content
    });
    user.posts.push(post._id);
    await user.save();
    res.redirect('/profile');
});

app.get('/random-posts', async (req, res) => {
  try {
    // Fetch random posts and populate the user field
    const posts = await postModel.aggregate([{ $sample: { size: 10 } }]);
    const populatedPosts = await postModel.populate(posts, { path: 'user', select: 'username profilepic' });

    res.render('random-posts', { posts: populatedPosts });
  } catch (error) {
    console.error('Error fetching random posts:', error);
    res.status(500).send('Internal Server Error');
  }
});

function loggedIn(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect('/login'); // Redirect if the token is missing
    }

    try {
        const data = jwt.verify(token, "shhhh"); // Verify the token
        req.user = data; // Attach user data to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        console.error('Invalid token:', err.message);
        res.redirect('/login'); // Redirect if the token is invalid
    }
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});