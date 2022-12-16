import {getRandomInt, getRandomArrayElement} from "./util.js";

const MAX_COMMENT_COUNT = 10;
const MAX_AVATAR_COUNT = 6;
const MAX_PHOTO_COUNT = 25;
const MIN_LIKE_COUNT = 15;
const MAX_LIKE_COUNT = 200;

const descriptions = [
    'красивая картинка',
    'крутая картинка',
    'классная картинка',
    'прикольная картинка',
];

const messages = [
    'круто',
    'красиво',
    'классно',
    'прикольно',
    'фу'
];

const usernames = [
    'Павел',
    'Артём',
    'Никита',
    'Антон',
];

function getComment(count) {
    return {
        id: getRandomInt(1, MAX_COMMENT_COUNT * count),
        message: getRandomArrayElement(messages),
        user: {
            avatar: `./img/avatars/${getRandomInt(1, MAX_AVATAR_COUNT)}.svg`,
            name: getRandomArrayElement(usernames),
        }
    };
}

const usedIds = []


function getPictures(count) {
    const arrayPictures = [];
    while (arrayPictures.length < count) {
        const comments = [];

        while (comments.length < getRandomInt(1, MAX_COMMENT_COUNT)) {
            comments.push(getComment(count));
        }

        let pictureId = getRandomInt(1, count)
        while (usedIds.includes(pictureId)) {
            pictureId =  getRandomInt(1, count)
        }
        usedIds.push(pictureId)
    
        const picture = {
            id: pictureId,
            url: `./photos/${getRandomInt(1, MAX_PHOTO_COUNT)}.jpg`,
            description: getRandomArrayElement(descriptions),
            likes: getRandomInt(MIN_LIKE_COUNT, MAX_LIKE_COUNT),
            comments: comments
        }
        arrayPictures.push(picture);
    }


    return arrayPictures;
}

export {getPictures};
