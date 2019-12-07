const express = require('express');

const router = express.Router();

// @route localhost:3000/bbs
// @desc bbs의 게시물 불러오기
// @auth public
router.get('/', (req, res) => {
    res.status(200).json({
        msg: 'bbs get'
    })
});

// @route localhost:3000/bbs
// @desc bbs의 게시물 등록하기
// @auth public

router.post('/', (req, res) => {
    res.status(200).json({
        msg: 'bbs post'
    })
});

// @route localhost:3000/bbs
// @desc porfile의 게시물 수정오기
// @auth public
router.patch('/', (req, res) => {
    res.status(200).json({
        msg: 'bbs patch'
    })
});

// @route localhost:3000/bbs
// @desc bbs의 게시물 삭제오기
// @auth public
router.delete('/', (req, res) => {
    res.status(200).json({
        msg: 'bbs delete'
    })
});

module.exports = router;
