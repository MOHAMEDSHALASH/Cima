// header search open
document.querySelector('header .search').addEventListener('click',()=>{
    document.querySelector('header .search').classList.add('search-show')
})
// =====================================================================
// banner 1 move letters
let x=1;
const autoWrite=document.getElementById('auto');
const autowritee=()=>{
    const title="السينما للجميع "
    autoWrite.innerText=title.slice(0,x);
    x++;
    if(title.length<x){
        x=1;
    }
};
const stoop=setInterval(autowritee,300);
// ================
let cheese=document.querySelector('.main-banner .cheese')
let cheeseTitle=document.querySelector('.main-banner .title')
let cheeseTitle2=document.querySelector('.main-banner .title2')
let m=1;
let mo=setInterval(()=>{
    m++
    if(m==5){
        cheese.style.display="block"
        cheeseTitle.style.animation="tt 5s 1 linear"
        cheeseTitle.style.width="0"
    }
    if(m==9){
        cheeseTitle.style.display="none";
        cheeseTitle2.style.display="block"
    }
},1100)
setTimeout(() => {
    clearInterval(mo)
}, 20000);
// =====================================================================
// slide show
let mm=document.querySelector('.films-boxes')
let next=document.getElementById('next')
let prev=document.getElementById('prev')
let scrolll=280;
next.onclick=()=>{
    mm.scrollLeft=mm.scrollLeft+scrolll;
}
prev.onclick=()=>{
    mm.scrollLeft=mm.scrollLeft-scrolll;
}
// =====================================================================
// when click to watch film
let thePageName=document.querySelector('title')
let film=document.querySelectorAll('.films-boxes section');
let body=document.getElementById('body');
film.forEach((item)=>{
    item.onclick=(e)=>{
        let objectFilm={
            img:e.target.parentElement.querySelector('img').src,
            title:e.target.parentElement.querySelector('.title').innerHTML,
            about1:e.target.parentElement.querySelector('.about p:nth-child(1)').innerHTML,
            about2:e.target.parentElement.querySelector('.about p:nth-child(2)').innerHTML,
            kind:e.target.parentElement.querySelector('.kind-film p').innerHTML,
            history:e.target.parentElement.querySelector('.history p').innerHTML,
            year:e.target.parentElement.dataset.year,
        }
        if(objectFilm.year==undefined ||objectFilm.year==""){
            objectFilm.year="غير معروف"
        }
        // 
        // let pageFilm=document.createElement('div')
        // pageFilm.className='Page-film';
        // body.appendChild(pageFilm);
        // thePageName.innerHTML=objectFilm.title;
        // body.style.overflow="hidden"
        let table=`
        <div class="head-title">
    <a href="index.html"><h4>الرئسيه</h4></a>
    <p><i class="fa-solid fa-angle-left"></i></p>
    <a href="index.html"><h4>${objectFilm.kind}</h4></a>
    <p><i class="fa-solid fa-angle-left"></i></p>
    <h4 class="t3" id="t3">${objectFilm.title}</h4>
</div>
<!-- ------ -->
<div class="container-film">
    <!-- left -->
    <div class="left">
        <nav>
            <div class="count">
                <div>
                    <p>زيارات</p>
                    <p>24975</p>
                </div>
                <i class="fa-solid fa-users"></i>
            </div>
            <h1>مشاهدة العرض</h1>
        </nav>
        <nav>
            <i class="fa-solid fa-angle-left"></i>
            <h1>تحميل العرض</h1>
            <div class="big-icon"><i class="fa-solid fa-download"></i></div>
        </nav>
        <nav>
            <i class="fa-solid fa-angle-left"></i>
            <h1>مشاهده الان</h1>
            <div class="big-icon"><i class="fa-solid fa-play"></i></div>
        </nav>
    </div>
    <!-- center -->
    <div class="m">
    <div class="center">
        <div class="title"><h1>${objectFilm.title}</h1></div>
        <div class="history-film">
            <p>${objectFilm.history}</p>
            <h3>القصه</h3>
        </div>
        <div class="things">
            <div class="item">
                <h3>تصنيفات:</h3><p>${objectFilm.kind}</p>
            </div>
            <div class="item">
                <h3>الانواع:</h3><p>${objectFilm.about1}</p><p>${objectFilm.about2}</p>
            </div>
            <div class="item">
                <h3>سنه الاصدار:</h3><p>${objectFilm.year}</p>
            </div>
            <div class="item">
                <h3>الجوده:</h3><p>HD</p>
            </div>
        </div>
    </div>
    <!-- right -->
    <div class="right">
        <img src="${objectFilm.img}" alt="">
    </div>
    </div>
</div>
<!-- ======= START BANNER 3 ============= -->
<div class="banner3 banner33">
    <h2>عروض ذات صله</h2>
</div>
<!-- ======= END BANNER 3 ============= -->
<!-- ======= START MAIN BOXES FILMS ============= -->
<div class="films-boxes films-boxes-main">
<section>
<div class="history">
    <p>مشاهدة وتحميل فيلم Resident Evil: Welcome to Raccoon City 2021 مترجم اون لاين من موقع السينما للجميع 
        . افلام اجنبي بطولة Avaah Blackwell,Avan Jogia,Donal Logue,Hannah John-Kamen,Kaya Scodelario,Lily 
        Gao,Neal McDonough,Robbie Amell,Stephannie Hawkins,Tom Hopper Cima4</p>
        <h3>القصه</h3>
</div>
<img src="image/1.jpg" alt="">
<div class="about">
    <p> أكشن </p>
    <p>رعب</p>
</div>
<div class="icon-watch"><i class="fa-solid fa-play"></i></div>
<div class="kind-film"><p> افلام أجنبي</p> <i class="fa-solid fa-clapperboard"></i></div>
<div class="title">فيلم Resident Evil: welcome to racoon city 2021 مترجم</div>
</section>
<section>
<div class="history">
    <p>مشاهدة وتحميل فيلم Resident Evil: Welcome to Raccoon City 2021 مترجم اون لاين من موقع السينما للجميع 
        . افلام اجنبي بطولة Avaah Blackwell,Avan Jogia,Donal Logue,Hannah John-Kamen,Kaya Scodelario,Lily 
        Gao,Neal McDonough,Robbie Amell,Stephannie Hawkins,Tom Hopper Cima4</p>
        <h3>القصه</h3>
</div>
<img src="image/2.jpg" alt="">
<div class="about">
    <p>خيال علمي </p>
    <p>رعب</p>
</div>
<div class="icon-watch"><i class="fa-solid fa-play"></i></div>
<div class="kind-film"><p>أفلام عربي</p> <i class="fa-solid fa-clapperboard"></i></div>
<div class="title">فيلم احمد نوتردم HD</div>
</section>
<section>
<div class="history">
    <p>مشاهدة وتحميل فيلم Resident Evil: Welcome to Raccoon City 2021 مترجم اون لاين من موقع السينما للجميع 
        . افلام اجنبي بطولة Avaah Blackwell,Avan Jogia,Donal Logue,Hannah John-Kamen,Kaya Scodelario,Lily 
        Gao,Neal McDonough,Robbie Amell,Stephannie Hawkins,Tom Hopper Cima4</p>
        <h3>القصه</h3>
</div>
<img src="image/3.jpg" alt="">
<div class="about">
    <p> اثاره </p>
    <p>أكشن</p>
</div>
<div class="icon-watch"><i class="fa-solid fa-play"></i></div>
<div class="kind-film"><p>أفلام عربي</p> <i class="fa-solid fa-clapperboard"></i></div>
<div class="title">فيلم العازف  HD</div>
</section>
<section>
<div class="history">
    <p>مشاهدة وتحميل فيلم Resident Evil: Welcome to Raccoon City 2021 مترجم اون لاين من موقع السينما للجميع 
        . افلام اجنبي بطولة Avaah Blackwell,Avan Jogia,Donal Logue,Hannah John-Kamen,Kaya Scodelario,Lily 
        Gao,Neal McDonough,Robbie Amell,Stephannie Hawkins,Tom Hopper Cima4</p>
        <h3>القصه</h3>
</div>
<img src="image/4.jpg" alt="">
<div class="about">
    <p> دراما </p>
    <p>كوميديا</p>
</div>
<div class="icon-watch"><i class="fa-solid fa-play"></i></div>
<div class="kind-film"><p>أفلام عربي</p> <i class="fa-solid fa-clapperboard"></i></div>
<div class="title">فيلم مش أنا HD</div>
</section>
<section>
    <div class="history">
        <p>مشاهدة وتحميل فيلم Resident Evil: Welcome to Raccoon City 2021 مترجم اون لاين من موقع السينما للجميع 
            . افلام اجنبي بطولة Avaah Blackwell,Avan Jogia,Donal Logue,Hannah John-Kamen,Kaya Scodelario,Lily 
            Gao,Neal McDonough,Robbie Amell,Stephannie Hawkins,Tom Hopper Cima4</p>
            <h3>القصه</h3>
    </div>
<img src="image/5.jpg" alt="">
<div class="about">
    <p> فانتازيا </p>
    <p>أكشن</p>
</div>
<div class="icon-watch"><i class="fa-solid fa-play"></i></div>
<div class="kind-film"><p>أفلام أجنبي</p> <i class="fa-solid fa-clapperboard"></i></div>
<div class="title">فيلم Spider-man : No Way Home 2021 مترجم HD</div>
</section>
<section>
<div class="history">
    <p>مشاهدة وتحميل فيلم Resident Evil: Welcome to Raccoon City 2021 مترجم اون لاين من موقع السينما للجميع 
        . افلام اجنبي بطولة Avaah Blackwell,Avan Jogia,Donal Logue,Hannah John-Kamen,Kaya Scodelario,Lily 
        Gao,Neal McDonough,Robbie Amell,Stephannie Hawkins,Tom Hopper Cima4</p>
        <h3>القصه</h3>
</div>
<img src="image/6.jpg" alt="">
<div class="about">
    <p>خيال علمي </p>
    <p>رعب</p>
</div>
<div class="icon-watch"><i class="fa-solid fa-play"></i></div>
<div class="kind-film"><p>أفلام عربي</p> <i class="fa-solid fa-clapperboard"></i></div>
<div class="title">فيلم احمد نوتردم HD</div>
</section>
    </div>

    <!-- ======= START FOOTER ============= -->
<footer>
    <ul class="foot-links">
        <a href="#"><li>Yalla Shoot</li></a>
        <a href="#"><li>Cima4U</li></a>
        <a href="#"><li>سيما فور يو</li></a>
        <a href="#"><li>سيما فوريو</li></a>
        <a href="#"><li>السينما للجميع</li></a>
    </ul>
    <div class="end"><h3>Cima4u - السينما للجميع</h3></div>
</footer>
<!-- ======= END FOOTER ============= -->

`
        // pageFilm.innerHTML=table;
        localStorage.setItem('film',table)
        localStorage.setItem('filmTitle',objectFilm.title)
    }
})

// function closeFilm(){
//     document.querySelector('.Page-film').remove()
//     thePageName.innerHTML="Cima";
//     body.style.overflow=""
// }

let vvv=document.getElementById('boody')
if(localStorage.film!=null){
    vvv.innerHTML=localStorage.film;
    thePageName.innerHTML=localStorage.filmTitle;
}
