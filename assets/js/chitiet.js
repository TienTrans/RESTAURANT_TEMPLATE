var session_masp = sessionStorage.getItem("masp");
var convert = localStorage.getItem("ProductArray");
var productArray = JSON.parse(convert);
var masp = JSON.parse(session_masp);
console.log(masp);
// var check = checkProduct(session_masp.replace(/"/g, ""));
function checkProduct(masp) {
    for (let a = 0; a < productArray.length; a++) {
        let arrayCheck = productArray[a];
        // console.log(arrayCheck);
        for (let i = 0; i < arrayCheck.length; i++) {
            if (arrayCheck[i].masp === masp) {
                console.log(arrayCheck[i]);
                let text = "";
                text += `<img
                src="./assets/img/${arrayCheck[i].hinh}"
                alt=""
                class="image-details"
            />
            <div class="container">
                <p class="title-detail">${arrayCheck[i].tensp}</p>
                <div class="box-statr">
                    <img src="./assets/img/star1.svg" alt="" />
                    <img src="./assets/img/star1.svg" alt="" />
                    <img src="./assets/img/star1.svg" alt="" />
                    <img src="./assets/img/star1.svg" alt="" />
                    <img src="./assets/img/star1.svg" alt="" />
                    <p class="review">( 1 customer review )</p>
                </div>
                <div class="price">$${arrayCheck[i].gia}</div>
                <p class="desc">${arrayCheck[i].ctsp}</p>
                <table>
                    <tr>
                        <td>-</td>
                        <td>1</td>
                        <td>+</td>
                    </tr>
                </table>
                <div class="btn">ADD TO CARD</div>
            </div>`;
                document.querySelector(".section_1 .content").innerHTML = text;
                return;
            }
        }
    }
    return -1;
}
checkProduct(masp);
console.log(document.querySelector(".section_1 .content"));
