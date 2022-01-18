const productsDOM = document.querySelector(".products")
const loadingDOM = document.querySelector(".loading-text")
const formDOM = document.querySelector(".product-form")
const productInputDOM = document.querySelector(".product-input")
const formAlertDOM = document.querySelector(".form-alert")
//  Load product from api/product
const showProducts = async () => {
    console.log("here");
    loadingDOM.style.visibility = "visible"
    // try {
        console.log("try");
        // const {data : {products}, } = await axios.get("/api/v1/products")
        const r = await axios.get("/api/v1/products")
        console.log("response",r);
        // console.log(products)
        // if(products.length < 1) {
        //     productsDOM.innerHTML = '<h5 class = "empty-list" > no tests in your list </h5>'
        //     loadingDOM.style.visibility = "hidden"
        //     return;
        // }
        // const allProducts = products.map((product)=> {
        //     const{completed, _id: productID, name} = product;
        //     return `<div class="single-task ${completed && "task-completed"}"> 
        //         <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
        //         <div class="task-links">
        //         <!-- edit link -->
        //             <a href="task.html?id=${productID}" class="edit-link">
        //                 <i class="fas fa-edit"></i>
        //             </a>
        //         <!-- delete btn -->
        //             <button type="button" class="delete-btn" data-id="${productID}">
        //                 <i class="fas fa-trash"></i>
        //             </button>
        //         </div>
        //     </div>`;
        // }).join("");
        // productsDOM.innerHTML = allProducts;
    // } catch (error) {
        // console.log(error);
        // productsDOM.innerHTML = `<h5 class="empty-list">there was a <b>error</b>, please try again later...${error}</h5>`
    // }
    console.log("done");
    loadingDOM.style.visibility = "hidden"
};

showProducts();

//  delete product /api/products/:id

// productsDOM.addEventListener("click", async (e) => {
//     const el = e.target;
//     if(el.parentElement.classList.contains("delete-btn")){
//         loadingDOM.style.visibility = "visible"
//         const id = el.parentElement.dataset.id;
//         try{
//             await axios.delete(`http://localhost:3000/api/v1/products/${id}`);
//             showProducts();
//         } catch(error){
//             console.log(error)
//         }
//     }
//     loadingDOM.style.visibility = "hidden"
// })

//  form
// formDOM.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const name = productInputDOM.value

//     try {
//         await axios.post("/api/v1/products", {name})
//         showProducts()
//         productInputDOM.value = ""
//         formAlertDOM.style.display = "block"
//         formAlertDOM.textContent = "success! product added"
//         formAlertDOM.classList.add("text-success")
//     } catch(error){
//         formAlertDOM.style.display = "block"
//         formAlertDOM.innerHTML = "Error please try again"
//     }
//     setTimeout(()=>{
//         formAlertDOM.style.display = "none"
//         formAlertDOM.classList.remove("text-success")
//     },3000)
// })