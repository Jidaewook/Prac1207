const express = require('express');

const router = express.Router();


// @route localhost:3000/profile
// @desc porfile의 게시물 불러오기
// @auth public
router.get('/', (req, res) => {
    res.status(200).json({
        msg: 'profile get'
    })
});

// @route localhost:3000/profile
// @desc porfile의 게시물 가져오기
// @auth public

router.post('/', (req, res) => {
    res.status(200).json({
        msg: 'profile post'
    })
});

// @route localhost:3000/profile
// @desc porfile의 게시물 수정오기
// @auth public
router.patch('/', (req, res) => {
    res.status(200).json({
        msg: 'profile patch'
    })
});

// @route localhost:3000/profile
// @desc porfile의 게시물 삭제오기
// @auth public
router.delete('/', (req, res) => {
    res.status(200).json({
        msg: 'profile delete'
    })
});


module.exports = router;