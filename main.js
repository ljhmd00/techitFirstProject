//시계 기능
function getTime() {
    const time = document.querySelector(".time");
    const newDate = new Date();
    const hour = String(newDate.getHours()).padStart(2, 0);
    const minutes = String(newDate.getMinutes()).padStart(2, 0);
    const seconds = String(newDate.getSeconds()).padStart(2, 0);

    time.innerText = `${hour}:${minutes}:${seconds}`;
}

setInterval(getTime, 1000);

//chatGPT API 기능
let isLoading = false;

async function onClickSearch() {
    const searchInput = document.querySelector(".searchInput");
    const searchResult = document.querySelector(".searchResult");

    if (!searchInput.value) return;
    if (isLoading) return;

    isLoading = true;

    const question = searchInput.value;
    searchInput.value = "검색 중 입니다...";

    const response = await axios.post(
        "https://holy-fire-2749.fly.dev/chat",
        {
            question,
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer BLOCKCHAINSCHOOL3", //인증
            },
        }
    );

    if (response.status == 200) {
        searchResult.style.display = "inline";
        searchResult.innerText = response.data.choices[0].message.content;
    }

    const mapTitle = document.querySelector(".mapTitle");
    const map = document.querySelector(".map_wrap");
    function mapShow() {
        mapTitle.style.display = "inline";
        map.style.display = "inline";
    }

    searchInput.value = "";
    mapShow();
    isLoading = false;
}

//글자 타이핑 기능

const content = "chatGPT에게 맛집을 물어보세요!";
const text = document.querySelector(".text");
let index = 0;

function sleep(delay) {
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function typing() {
    text.textContent += content[index++];
    if (index > content.length) {
        text.textContent = "";
        index = 0;
        //sleep(1000);
    }
}
setInterval(typing, 200);

//nft토글 기능
function onClickToggle(value) {
    const nft = document.querySelector(".nft");
    const nftView = document.querySelector(".nftView");

    if (value) {
        nft.style.display = "inline-block";
        nftView.style.display = "none";
    } else {
        nft.style.display = "none";
        nftView.style.display = "inline-block";
    }
}
