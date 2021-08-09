const reviews = [
  {
    name: "Mihail Davidevski",
    job: "Software Engineer",
    review:
      " Lomnis iure pariatur quas tenetur ipsum magni distinctio, molestiasharum labore nisi aperiam saepe cum velit omnis iure pariatur quas tenetur ipsum magni distinctio, molestias at error incidunt sunt corrupti possimus nam minus earum. Amet error fugiat porro quia iste.",
    img: "pics/review1.jpg",
  },
  {
    name: "Katerina Rope",
    job: "Web Developer",
    review:
      "Gorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum labore nisi aperiam saepe cum velit omnis iure pariatur quas tenetur ipsum magni distinctio, molestias at error incidunt sunt corrupti possimus nam minus earum. Amet error fugiat porro quia iste.",
    img: "pics/review2.jpg",
  },
  {
    name: "Marija Bojkova",
    job: "Digital Marketer",
    review:
      "Dorem, aperiam saepe cum velit omnis iure pariatur quas tenetur  harum labore nisi aperiam saepe cum velit omnis iure pariatur quas tenetur ipsum magni distinctio, molestias at error incidunt sunt corrupti possimus nam minus earum. Amet error fugiat porro quia iste.",
    img: "pics/review3.jpg",
  },
  {
    name: "Donce Trajceski",
    job: "Forest Engineer",
    review:
      "ELorem, ipsum dolor sit amet consectetur Blanditiis harum labore nisi aperiam saepe cum velit omnis iure pariatur quas tenetur ipsum magni distinctio, molestias at error incidunt sunt corrupti possimus nam minus earum. Amet error fugiat porro quia iste.",
    img: "pics/review4.jpg",
  },
  {
    name: "Robert Lokvenez",
    job: "Chemical Engineer",
    review:
      "Uorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum labore nisi aperiam saepe cum velit omnis iure pariatur quas tenetur ipsum magni distinctio, molestias at error incidunt sunt corrupti possimus nam minus earum. Amet error fugiat porro quia iste.",
    img: "pics/review5.jpg",
  },
  {
    name: "Marina Djodze",
    job: "Medical Nurse",
    review:
      "Poorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum labore nisi aperiam saepe cum velit omnis iure pariatur quas tenetur ipsum magni distinctio, molestias at error incidunt sunt corrupti possimus nam minus earum. Amet error fugiat porro quia iste.",
    img: "pics/review6.jpg",
  },
  {
    name: "Jane Jansi",
    job: "Medical Doctor",
    review:
      "Sorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reprehenderit, incidunt asperiororibus optio ratione veritatis laborum pariatur voluptas inventore maiores possimus voluptatem amet, voluptate sunt suscipit ipsam quasi sed laboriosam. Nisi delectus perferendis alias officia!",
    img: "pics/review7.jpg",
  },
];

const image = document.querySelector(".image");
const fullName = document.querySelector(".name");
const job = document.querySelector(".job");
const review = document.querySelector(".review p");
const left = document.querySelector(".fa-chevron-left");
const right = document.querySelector(".fa-chevron-right");
const button = document.querySelector("button");

let count = 0;

const showReview = () => {
  image.src = reviews[count].img;
  fullName.innerText = reviews[count].name;
  job.innerText = reviews[count].job;
  review.innerText = reviews[count].review;
};

showReview();

right.addEventListener("click", () => {
  if (count < reviews.length - 1) {
    count++;
    showReview();
  }
  if (count === reviews.length - 1) {
    count = reviews.length - 1;
  }
});

left.addEventListener("click", () => {
  if (count < reviews.length && count > 0) {
    count--;
    showReview();
  }
});

button.addEventListener("click", () => {
  let surpriseNum = Math.floor(Math.random() * reviews.length);
  count = surpriseNum;
  showReview();
});
