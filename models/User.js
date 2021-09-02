const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // trim은 John Anh을 JohnAnh으로 바꾸어주는 
        // space를 없애주는 기능을 한다.
        unique: 1
    },
    password: {
        type: String,
        maxlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0 // 0은 일반 사용자 1은 root
    },
    image: String,
    token: { // toKen은 유효성을 관리
        type: String
    },
    toKenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema) // 스키마를 모델로 감싸준다.

modul.exports = { User } // User를 다른 파일에서 사용하기 위함.