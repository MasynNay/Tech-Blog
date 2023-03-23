const router = require("express").Router();
const { User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const comments = commentData.map((comment) => comment.get({ plain: true }));

    res.render("blog", { comments });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const addComment = await Comment.create({
      comment: req.body.comment,
      userId: req.session.userId,
      blogId: req.body.blogId,
    });

    res.status(200).json(addComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
