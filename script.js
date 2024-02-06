let likeCounter = 0;
let input = document.querySelector(".input");
let submit_btn = document.getElementById("submit-btn");
let typedText = "";
let feed_text = document.querySelector(".feed-text");
let card_area = document.querySelector(".cards-area");
let x = "";
// let card_content_footer= document.querySelector(".card-content-footer");
let card_content_header = document.querySelector(".card-content-header");

const LIKED_IMAGE = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
const UNLIKED_IMAGE = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";


const Post = ({ typedText, src }) => {
    return `<div class="card">
    <div class="card-icon"><img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739"></div>
    <div class="card-content">
        <div class="card-content-header">
            <p>Harsh Kumar @harsh.kumar.patwa</p>
            <img class = "edit" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="edit">
            <img class = "delete" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="delete" onclick="deleteCard()">
        </div>
        <div class="feed-text">${typedText}</div>
        <div class="card-content-footer" onclick="helper(event)">
            <img class="comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="comment">
            <img class="like" src="${src}" alt="like" onclick="handleLike(event)">
        </div>
    </div>
    </div>`;
}

submit_btn.addEventListener("click", () => {
    x = Post({ typedText: input.value, src: UNLIKED_IMAGE });
    card_area.innerHTML = card_area.innerHTML + x;
});

function handleLike(e) {
    const curElement = e.target;

    const isLike = curElement.getAttribute("alt") == "like";
    const src = isLike ? LIKED_IMAGE : UNLIKED_IMAGE;
    const alt = isLike ? "unlike" : "like";

    curElement.setAttribute("src", src);
    curElement.setAttribute("alt", alt);
};

function deleteCard() {

}