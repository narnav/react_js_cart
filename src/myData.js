let prods = [
    {
        name: "aaaaa",
        price: "$10,800",
        img: "p1.jpg",
        catid: 1,
        id:0,
    },
    {
        name: "bbbbbbbb",
        price: "$10,800",
        img: "p1.jpg",
        catid: 1,
        id:1,
    },
    {
        name: "milk",
        price: "$10,800",
        img: "p1.jpg",
        catid: 1,
        id:2,
    },
    {
        name: "malaby",
        price: "$1,800",
        img: "p1.jpg",
        catid: 1,
        id:3,
    },
    {
        name: "shawarma",
        price: "$10,800",
        img: "p1.jpg",
        catid: 2,
        id:4,
    },
    {
        name: "pizza",
        price: "$6,800",
        img: "p3.jpg",
        catid: 3,
        id:5,
    },
    {
        name: "stuzim",
        price: "$3,800",
        img: "p2.jpg",
        catid: 3,
        id:6,
    },
];

const categoriesName = ["general", "dairy", "fish", "meat"]


export const getCategoryName = (id) => {
    return categoriesName[id]
}


export function getProducts() {
    return prods;
}

// categories start at 1 , 0 mean all categories
export function getProductsByCategory(id) {
    if (id > 0) {
        return prods.filter((prod) => prod.catid == id); //selected category
    }
    return prods //all categories
}
