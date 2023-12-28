let num_cards_GLOBAL = 5;

let cards = [
    {
        background:
            "https://th.bing.com/th/id/OIP.k7R4EFlT1SluvvWSapA6DAHaEK?w=272&h=180&c=7&r=0&o=5&pid=1.7",
        display_background:
            "https://th.bing.com/th/id/OIP.Z_wx4sRTnsv8DYVuz92SCAHaDt?w=316&h=174&c=7&r=0&o=5&pid=1.7",
        title: "T20 Cricket",
        description:
            "24/7 Skysports T20 livestream"
    },
    {
        background: "data:image/jpeg;base64,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",
        display_background:
            "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages2.alphacoders.com%2F845%2F84502.jpg&f=1&nofb=1",
        title: "Formula One",
        description:
            "24/7 Skysports F1 livestream"
    },
    {
        background: "https://wallpapercave.com/wp/wp5556247.jpg",
        display_background:
            "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages2.alphacoders.com%2F845%2F84502.jpg&f=1&nofb=1",
        title: "BasketBall",
        description:
            "24/7 BBC Basketball livestream"
    }
];


const IsMobile = () => {
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;

    if (width <= 736) {
        return true;
    } else {
        return false;
    }
};

const CheckSizeAttributes = () => {
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;

    let carousels = document.getElementsByClassName("card-carousel");

    let old_num_cards = num_cards_GLOBAL;
    let new_num_cards;

    if (width > 1501) {
        new_num_cards = 5;
    } else if (width <= 1500 && width > 1100) {
        new_num_cards = 4;
    } else if (width <= 1100 && width > 520) {
        new_num_cards = 3;
    } else if (width <= 520) {
        new_num_cards = 2;
    }

    for (let i = 0; i < carousels.length; i++) {
        if (carousels[i].children.length > 2) {
            for (let j = 1; j < carousels[i].children.length - 1; j++) {
                carousels[i].children[j].style.display = "none";
            }
            for (let j = 1; j < new_num_cards + 1; j++) {
                carousels[i].children[j].style.display = "flex";
            }
        }
    }

    num_cards_GLOBAL = new_num_cards;
};

const ResizeHeader = () => {
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;

    if (width <= 815) {
        if (document.getElementsByClassName("hamburger").length <= 0) {
            let header = document.getElementsByClassName("header")[0];
            let main_nav = header.getElementsByClassName("main-nav")[0];
            let right_nav = header.getElementsByClassName("right-nav")[0];

            let hamburger = document.createElement("div");
            hamburger.classList.add("hamburger");
            hamburger.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>`;
            main_nav.remove();
            right_nav.remove();

            let bottom_header = document.createElement("div");
            bottom_header.classList.add("header-bottom");
            bottom_header.append(main_nav, right_nav);
            bottom_header.style.display = "none";

            hamburger.addEventListener("click", function () {
                if (bottom_header.style.display == "none") {
                    bottom_header.style.display = "flex";
                    header.style.paddingBottom = "9px";
                    header.style.paddingTop = "9px";
                } else {
                    bottom_header.style.display = "none";
                    header.style.paddingBottom = "0px";
                    header.style.paddingTop = "0px";
                }
            });

            header.classList.add("header-change");

            let top_header = document.createElement("div");
            top_header.classList.add("header-top");
            top_header.append(header.children[0], hamburger);

            header.innerHTML = "";
            header.append(top_header, bottom_header);
        }
    } else {
        if (document.getElementsByClassName("hamburger").length > 0) {
            let header = document.getElementsByClassName("header")[0];
            let main_nav = header.getElementsByClassName("main-nav")[0];
            let right_nav = header.getElementsByClassName("right-nav")[0];
            let brand = header.getElementsByClassName("brand")[0];

            header.classList.remove("header-change");
            header.children[0].remove();
            header.children[0].remove();
            header.append(brand, main_nav, right_nav);
        }
    }
};

const AddCards = () => {
    let carousel_width = document.getElementsByClassName("card-carousel")[0]
        .clientWidth;

    let btn_width =
        document.getElementsByClassName("carousel-btn")[0].clientWidth +
        document.getElementsByClassName("carousel-btn")[1].clientWidth;

    let num_cards = num_cards_GLOBAL;
    let card_margin = 2;
    let initial_width = 1920;
    let initial_height = 1080;

    let scale =
        (100 * ((carousel_width - btn_width) / num_cards - card_margin * 2)) /
        initial_width;

    let content_titles = document.getElementsByClassName("content-title");

    for (let i = 0; i < content_titles.length; i++) {
        content_titles[i].style.marginLeft = `${card_margin}px`;
    }

    let carousels = document.getElementsByClassName("card-carousel");
    for (let i = 0; i < carousels.length; i++) {
        let not_chosen = [];

        for (let c = 0; c < cards.length; c++) {
            not_chosen.push(c);
        }

        for (let j = 0; j < cards.length; j++) {
            let chosen_index = Math.floor(Math.random() * not_chosen.length);

            let chosen_card = cards[not_chosen[chosen_index]];

            not_chosen.splice(chosen_index, 1);

            let card = document.createElement("div");
            card.classList.add("card");
            card.style.backgroundImage = `url(${chosen_card.background})`;

            //If image doesn't load
            card.style.backgroundColor = `#333`;

            card.style.width = initial_width * (scale / 100) + "px";
            card.style.height = initial_height * (scale / 100) + "px";
            card.style.margin = `0px ${card_margin}px`;
            card.style.minWidth = initial_width * (scale / 100) + "px";
            card.style.minHeight = initial_height * (scale / 100) + "px";

            let overlay = document.createElement("div");
            overlay.classList.add("overlay");

            let title = document.createElement("h4");
            title.innerText = chosen_card.title;
            let description = document.createElement("p");
            description.innerText = "LIVE";

            let button_container = document.createElement("div");
            button_container.classList.add("button-container");
            
            let button1 = document.createElement("div");
            button1.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>`;
            button1.classList.add("watch");
            
            if (j == 0) {
                button1.addEventListener("click", function () {
                    window.location.href = "https://qyrhal.github.io/freewatch/t20-cricket/";
                });
            } else if (j == 1) {
                button1.addEventListener("click", function () {
                    window.location.href = "https://qyrhal.github.io/freewatch/formula-one/";
                });
            } else if (j == 1) {
                button1.addEventListener("click", function () {
                    window.location.href = "https://qyrhal.github.io/freewatch/basketball/";
                });
            }

            button_container.append(button1);

            overlay.append(title, description, button_container);
            card.append(overlay);
            if (j < num_cards) {
                carousels[i].insertBefore(
                    card,
                    carousels[i].children[carousels[i].children.length - 1]
                );
            } else {
                card.style.display = "none";
                carousels[i].insertBefore(
                    card,
                    carousels[i].children[carousels[i].children.length - 1]
                );
            }
        }
    }
};

const CheckCards = () => {
    let carousels = document.getElementsByClassName("card-carousel");

    for (let i = 0; i < carousels.length; i++) {
        let carousel_width = carousels[i].clientWidth;

        let btn_width =
            carousels[i].getElementsByClassName("carousel-btn")[0].clientWidth +
            carousels[i].getElementsByClassName("carousel-btn")[1].clientWidth;

        let num_cards = num_cards_GLOBAL;
        let card_margin = 2;
        let initial_width = 1920;
        let initial_height = 1080;

        let scale =
            (100 *
                ((carousel_width - btn_width) / num_cards - card_margin * 2)) /
            initial_width;

        let cards = carousels[i].getElementsByClassName("card");

        for (let i = 0; i < cards.length; i++) {
            cards[i].style.width = initial_width * (scale / 100) + "px";
            cards[i].style.height = initial_height * (scale / 100) + "px";
            cards[i].style.margin = `0px ${card_margin}px`;
            cards[i].style.minWidth = initial_width * (scale / 100) + "px";
            cards[i].style.minHeight = initial_height * (scale / 100) + "px";
        }

        if (IsMobile()) {
            carousels[i].style.height =
                1.6 * (initial_height * (scale / 100)) + "px";
        } else {
            carousels[i].style.height = "auto";
        }
    }
};

const AddCarouselButtons = () => {
    let carousels = document.getElementsByClassName("card-carousel");
    for (let i = 0; i < carousels.length; i++) {
        let btn1 = document.createElement("div");
        btn1.classList.add("carousel-btn");
        btn1.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16" onclick="Previous(this);">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>`;

        let btn2 = document.createElement("div");
        btn2.classList.add("carousel-btn");

        btn2.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16" onclick="Next(this);">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>`;

        carousels[i].append(btn1, btn2);
    }
};

const ScrollFunction = () => {
    let header = document.getElementsByClassName("header")[0];
    if (document.documentElement.scrollTop > 1) {
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }
};

const MakeJumbotron = () => {
    let height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.getElementsByTagName("body")[0].clientHeight;

    document.getElementsByClassName("top")[0].style.height = `${height}px`;
};

let slide_index = 0;

const AutoSlideShow = () => {
    let slide_area = document.getElementsByClassName("top")[0];
    let container = slide_area.children[0];

    container.classList.add("fadeIn");

    let bg_display = [];
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].display_background) {
            bg_display.push(i);
        }
    }

    slide_index++;
    if (slide_index > bg_display.length - 1) {
        slide_index = 0;
    }

    slide_area.style.backgroundImage = `url("${
        cards[bg_display[slide_index]].display_background
    }")`;
    slide_area.getElementsByTagName("h1")[0].innerHTML =
        cards[bg_display[slide_index]].title;
    slide_area.getElementsByTagName("p")[0].innerHTML =
        cards[bg_display[slide_index]].description;

    container.classList.add("fadeOut");
    setTimeout(AutoSlideShow, 2000);
};

const SmoothScroll = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
};

const Next = (elem) => {
    let carousel = elem.parentElement.parentElement;
    let first_elem = carousel.children[1];
    let next_elem;

    for (let i = 0; i < carousel.children.length; i++) {
        if (carousel.children[i].style.display == "none") {
            next_elem = carousel.children[i];
            break;
        }
    }

    first_elem.style.display = "none";
    first_elem.remove();
    carousel.insertBefore(
        first_elem,
        carousel.children[carousel.children.length - 1]
    );

    next_elem.style.display = "flex";
};

const Previous = (elem) => {
    let carousel = elem.parentElement.parentElement;
    let last_display_item;
    let prev_elem = carousel.children[carousel.children.length - 2];

    for (let i = 0; i < carousel.children.length; i++) {
        if (
            carousel.children[i].style.display != "none" &&
            !carousel.children[i].classList.contains("carousel-btn")
        ) {
            last_display_item = carousel.children[i];
        }
    }

    last_display_item.style.display = "none";

    carousel.insertBefore(prev_elem, carousel.children[1]);

    prev_elem.style.display = "flex";
};