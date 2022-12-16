const cancelPicture = document.querySelector('.big-picture__cancel')
const bigPicture = document.querySelector('.big-picture')
const picturesListElement = document.querySelector('.pictures');
const pictureTemplateElement= document.getElementById('picture')
    .content
    .querySelector(".picture");

const renderPicturesList = (pictures) => {
    pictures.forEach((picture) => {
        const pictureElement = pictureTemplateElement.cloneNode(true);
        pictureElement.dataset.id = picture.id;

        pictureElement.querySelector('img').src = picture.url;
        // pictureElement.querySelector('img').setAttribute('src', picture.url);

        pictureElement.querySelector('img').alt = picture.description;
        pictureElement.querySelector('.picture__likes').textContent = picture.likes;
        pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

        picturesListElement.append(pictureElement);

        pictureElement.addEventListener('click', function (evt) {
            const targetElement = evt.target.closest('.picture');
            
            const picture = pictures.find(function (picture) {
                return +picture.id === +targetElement.dataset.id;
            });

            console.log(picture);

            bigPicture.querySelector('img').src = picture.url



            bigPicture.classList.remove('hidden')
        })  
    });

    cancelPicture.addEventListener('click', function() {
        bigPicture.classList.add('hidden')
    })
}

export {renderPicturesList};
