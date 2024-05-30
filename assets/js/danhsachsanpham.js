window.addEventListener("load", function () {
    const foodItems = document.querySelectorAll(".food-item");
    const foodList = document.querySelectorAll(".food-list");
    const foodNext = document.querySelectorAll(".tab-next");
    const foodPrev = document.querySelectorAll(".tab-prev");
    const foodSrcollWidth = foodList[0].scrollWidth - foodList[0].offsetWidth;

    let deltaSrcoll = foodItems[0].offsetWidth + 30;
    console.log(deltaSrcoll);
    foodNext.forEach((item, index) => {
        item.addEventListener("click", function (e) {
            foodPrev[index].classList.remove("disable");
            let check = Math.floor(foodList[index].scrollLeft + deltaSrcoll);
            console.log(check);
            console.log(foodList[index].scrollLeft);
            foodList[index].scrollLeft = check;
            if (check == Math.floor(foodSrcollWidth)) {
                this.classList.add("disable");
            }
        });
    });
    foodPrev.forEach((item, index) => {
        item.addEventListener("click", function (e) {
            foodNext[index].classList.remove("disable");
            let check = foodList[index].scrollLeft - deltaSrcoll;
            foodList[index].scrollLeft = check;
            if (check == 0) {
                this.classList.add("disable");
            }
        });
    });
});

let productArray = [];
let productBreak = [];
let productLunch = [];
let productDinner = [];
let product = {
    masp: "",
    tensp: "",
    gia: "",
    ctsp: "",
    hinh: "",
    khoitao: function product(masp, tensp, gia, ctsp, hinh) {
        this.masp = masp;
        this.tensp = tensp;
        this.gia = gia;
        this.ctsp = ctsp;
        this.hinh = hinh;
    },
    motsp: function (product) {
        let text = "";
        text += `<div class="food-item" onclick="chitietsp(this)">
        <img
            src="./assets/img/${product.hinh}"
            alt=""
            class="image-food"
        />
        <p class="masp" style="display : none">${product.masp}</p>
        <div class="box_top">
            <h2 class="title_food">
                ${product.tensp}
            </h2>
            <p class="title_food">$${product.gia}</p>
        </div>
        <p class="desc">
            ${product.ctsp}
        </p>
        <div class="box-bottom">
            <p class="order">Order Now</p>
            <div class="stars">
                <img
                    src="./assets/img/star1.svg"
                    alt=""
                />
                <img
                    src="./assets/img/star1.svg"
                    alt=""
                />
                <img
                    src="./assets/img/star1.svg"
                    alt=""
                />
                <img
                    src="./assets/img/star1.svg"
                    alt=""
                />
                <img
                    src="./assets/img/star1.svg"
                    alt=""
                />
            </div>
        </div>
    </div>`;
        return text;
    },
    xuatsp: function (array) {
        let text = "";
        for (let i = 0; i < array.length; i++) {
            text += this.motsp(array[i]);
        }
        return text;
    },
};
let sp1 = new product.khoitao(
    "sp01",
    "Bánh nướng xốp trứng",
    "24",
    "Được làm từ nguyên liệu đơn giản như bột mì,trứng, đường, men nở và một chút muối",
    "Breakfast1.png"
);
productBreak.push(sp1);
let sp2 = new product.khoitao(
    "sp02",
    "Breakfast Bars.",
    "49",
    "Được làm từ nguyên liệu đơn giản như bột mì, trứng, đường, men nở và một chút muối được nướng trong lò nhiệt đới để tạo bề mặt mịn màng",
    "Breakfast2.png"
);
productBreak.push(sp2);
let sp3 = new product.khoitao(
    "sp03",
    "Bánh Mì Sandwiches",
    "19",
    "Bánh Mì Sandwiches có sự kết hợp của nhiều thành phần khác nhau như thịt, gia vị, rau sống, phô mai, gia vị và sốt",
    "Breakfast3.png"
);
productBreak.push(sp3);
let sp4 = new product.khoitao(
    "sp04",
    "Cơm chiên dương châu",
    "49",
    "Phần cơm chiên dương châu thơm ngon với độ giòn của phần cơm trứng, độ ngon và ngọt từ hỗn hợp rau củ cộng với phần lạp xưởng",
    "Breakfast4.png"
);
productBreak.push(sp4);
let sp5 = new product.khoitao(
    "sp05",
    "Xôi gà",
    "15",
    "Sự kết hợp của phần xôi thơm dẻo và nóng hổi, ăn kèm với thịt gà chín mềm, hương thơm thoang thoảng từ những sợi lá chanh được cắt nhuyễn",
    "Breakfast5.png"
);
productBreak.push(sp5);
console.log(productBreak);
let sp6 = new product.khoitao(
    "sp06",
    "Ức gà chiên giòn",
    "30",
    "Thường được thưởng thức như  món khai vị trong các bữa tiệc. Khi ăn, bạn sẽ cảm nhận được sự kết hợp hoàn hảo giữa vị ngọt, giòn rụm của ức gà.",
    "lunch1.png"
);
productLunch.push(sp6);
let sp7 = new product.khoitao(
    "sp07",
    "Mì Schezwan",
    "23",
    "Một món ăn Trung Quốc nổi tiếng với hương vị đặc trưng và mức độ cay nồng. Được làm từ mì xào chín và gia vị Schezwan",
    "lunch2.png"
);
productLunch.push(sp7);
let sp8 = new product.khoitao(
    "sp08",
    "Hamburger",
    "29",
    "Một món ăn nhanh phổ biến trên khắp thế giới. Nó bao gồm một miếng thịt bò xay được nướng chín, được đặt giữa hai lát bánh mì mềm mịn.",
    "lunch3.png"
);
productLunch.push(sp8);
let sp9 = new product.khoitao(
    "sp09",
    "Cơm sườn",
    "49",
    "một món ăn truyền thống trong ẩm thực nhiều nền văn hóa. Nó gồm sườn heo được nướng hoặc hấp chín mềm và thưởng thức cùng cơm trắng.",
    "lunch4.png"
);
productLunch.push(sp9);
let sp10 = new product.khoitao(
    "sp10",
    "Mì ý",
    "33",
    "Một loại mì truyền thống của nền ẩm thực Ý. Nó có nhiều hình dạng và kích cỡ khác nhau, và thường được chế biến với nhiều loại sốt và gia vị độc đáo. ",
    "lunch5.png"
);
productLunch.push(sp10);
let sp11 = new product.khoitao(
    "sp11",
    "Ức gà chiên giòn",
    "25",
    "Một món ăn  được làm từ ức gà tách xương, được tẩm ướp gia vị và sau đó được chiên giòn cho đến khi chúng có màu vàng rực và có vỏ giòn ",
    "dinner1.png"
);
let sp12 = new product.khoitao(
    "sp12",
    "Mì Schezwan",
    "33",
    "Một loại mì truyền thống của nền ẩm thực Ý. Nó có nhiều hình dạng và kích cỡ khác nhau, và thường được chế biến với nhiều loại sốt và gia vị độc đáo. ",
    "dinner2.png"
);
let sp13 = new product.khoitao(
    "sp13",
    "Cơm thịt kho",
    "33",
    "Món ăn truyền thống trong ẩm thực Việt Nam. Nó gồm thịt heo kho cùng với sốt màu nâu đậm, dùng kèm với cơm. Món ăn có vị ngọt, mặn, thơm",
    "dinner3.png"
);
let sp14 = new product.khoitao(
    "sp14",
    "Lẩu thái",
    "40",
    "Một món lẩu nổi tiếng trong ẩm thực Thái Lan. Nó kết hợp hương vị chua, cay, mặn và đậm đà, tạo ra một món ăn ngon và độc đáo",
    "dinner4.png"
);
let sp15 = new product.khoitao(
    "sp15",
    "Thịt bò xốt phô mai",
    "45",
    "Một món ăn ngon, thường được tìm thấy trong các nhà hàng và quán ăn. Món này kết hợp giữa vị ngọt của thịt bò, vị đặc trưng và béo của phô mai",
    "dinner5.png"
);
productDinner.push(sp11);
productDinner.push(sp12);
productDinner.push(sp13);
productDinner.push(sp14);
productDinner.push(sp15);

let food = product;
document.querySelectorAll(".food-list").forEach((item, index) => {
    if (index == 0) {
        item.innerHTML = food.xuatsp(productBreak);
        // console.log(item.innerHTML);
    }
    if (index == 1) {
        item.innerHTML = food.xuatsp(productLunch);
        // console.log(item.innerHTML);
    }
    if (index == 2) {
        item.innerHTML = food.xuatsp(productDinner);
    }
});
function chitietsp(x) {
    let masp = x.querySelector(".masp").innerText;
    sessionStorage.setItem("masp", JSON.stringify(masp));
    window.location = "./sanphamchitiet.html";
}
productArray.push(productBreak);
productArray.push(productLunch);
productArray.push(productDinner);
localStorage.setItem("ProductArray", JSON.stringify(productArray));
