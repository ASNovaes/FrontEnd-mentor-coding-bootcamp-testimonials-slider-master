const testimonials = [
    {
        name: 'Tanya Sinclair',
        office: 'UX Engineer',
        testimony: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        photo: 'image-tanya.jpg'
    },
    {
        name: 'John Tarkpor',
        office: 'Junior Front-end Developer',
        testimony: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible.I now feel so confident about starting up as a professional developer.”',
        photo: 'image-john.jpg'
    }
];

const cardDescription = document.querySelector('.card__description');
const sliderPhoto = document.querySelector('#sliderPhoto');

const renderInfo = ({ name, office, testimony }) => {
    return `
            <p class='card__description-resume'>
                 ${testimony}
                <br /><br />
                <span class='resume-name'>${name}</span>
                <span class='resume-occupation'>${office}/span>
            </p>
          `
}

const renderPhoto = ({ photo }) => {
    let pathImage = "./app/src/assets/images/"
    sliderPhoto.src = `${pathImage}${photo}`;
}

const sliderController = (e) => {
    const control = e.target.dataset.control;
    controls[control]();
}

let sliderPos = 0;
const loadSlider = (sliderPos = 0) => {

    cardDescription.innerHTML = '';
    cardDescription.innerHTML = renderInfo(testimonials[sliderPos]);
    renderPhoto(testimonials[sliderPos]);
};

const controls = {
    prev: () => sliderPos >= 1 ? loadSlider(--sliderPos) : false,
    next: () => sliderPos < testimonials.length - 1 ? loadSlider(++sliderPos) : false,
};

const sliderControl = document.querySelector('#sliderControl').children;
[...sliderControl].forEach(btn => btn.addEventListener('click', sliderController));

loadSlider();