const selling1 = document.querySelector('.cart');
fetch('http://localhost:3000/selling')
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        selling1.innerHTML+=`
        <div class="cart1">
        <div class="picture">
                            <img class="picture" src="${element.image}"
                                alt="">
                        </div>
                        <div class="info">
                            <h2>
                            ${element.name}
                            </h2>
                            <div class="icon">
                                <span class="icon1"><i class="bi bi-star-fill"></i> 5.0</span>
                                <span class="icon2"><i class="bi bi-heart-fill"></i>29</span>
                            </div>
                            <p class="text2">
                            ${element.category}
                            </p>
                        </div>
                    </div>
        </div>

        `
    });
})