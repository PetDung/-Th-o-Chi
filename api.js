var tongsp =[
    {
        id : 1,
        name : 'Ao thun sieeu cap',
        photo: './img/mau-1.jpg',
        much :1000
    },
    {
        id : 2,
        name : 'Ao thun sieeu cap 2',
        photo : './img/mau-1.jpg',
        much :1000
    },
    {
        id : 2,
        name : 'Ao thun sieeu cap 2',
        photo : './img/mau-1.jpg',
        much :1000
    }
]
var htmls=''
tongsp.map((list)=>{
    htmls+=`
    <div class="col l-3 m-3 c-6 box-sp">
        <div class="box-sp">
            <div class="box-sp_img">
                <img src="${list.photo}" alt="">
            </div>
            <div class="box-sp_info">
                <h3 class='name-sp'></h3>
                <p class="much">${list.name}</p>
                <p class="ship">${list.much}</p>
                <div class="box-button-buy"><div class="button-buy">Mua Ngay</div></div>
            </div>
        </div>
    </div> `
})
var row=document.querySelector('.row-seo');
row.innerHTML=htmls