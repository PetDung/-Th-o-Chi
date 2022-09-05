
// mua hang
var buttons = document.querySelectorAll('.button-buy')
var form = document.querySelector('form')
var overlay_form= document.querySelector('.overlay_form')
var close = document.querySelector('.close_form')
buttons.forEach((button)=>{
    button.onclick =()=>{
        form.style.display='block'
        overlay_form.style.display='block'
    }
})
function close_form(){
    form.style.display='none'
    overlay_form.style.display='none'
}
close.onclick=close_form
overlay_form.onclick=close_form




// menu mobile

var buttonMenu=document.querySelector('.icon-menu')
var overlayMenu=document.querySelector('.overlay-menu')
var Menu=document.querySelector('.menu-mb')
buttonMenu.onclick=()=>{
    overlayMenu.style.display='block'
    Menu.style.display='block'
}
function closeMenu(){
    overlayMenu.style.display='none'
    Menu.style.display='none'
}
overlayMenu.onclick=closeMenu

var listMenus=document.querySelectorAll('.menu_list-mb')
listMenus.forEach((list)=>{
    list.onclick=closeMenu
})
var close=document.querySelector('.close-menu')
close.onclick=closeMenu

// form
var form = document.querySelector('form');
form.onsubmit=(e)=>{
    e.preventDefault();

    let name = document.querySelector('input[name="Name"]');
    let numberPhone = document.querySelector('input[name="phone"]');
    let adr = document.querySelector('input[name="adr"]');
    
    let vName=name.value
    let vNumberPhone=numberPhone.value
    let vadr=adr.value

    let rswr = document.querySelectorAll('.wr');
    let tbLoi = document.querySelector('.msg');
    tbLoi.innerHTML = '';
    if (rswr.length > 0) {
        rswr.forEach(function (item) {
            item.innerText = '';
        });
    }
    let loi = {};
    if (vName.trim() == '') {
        loi['Name'] = 'Vui lòng nhập tên';
        name.parentElement.querySelector('.wr').innerText = loi['Name'];
    }
    if (vNumberPhone.trim() == '') {
        loi['Number'] = 'Vui lòng nhập đúng số điện thoại';
        numberPhone.parentElement.querySelector('.wr').innerText = loi['Number'];
    }
    if (vadr.trim() == '') {
        loi['adr'] = 'Vui lòng nhập địa chỉ';
        adr.parentElement.querySelector('.wr').innerText = loi['adr'];
    }
    if (Object.keys(loi).length == 0) {
        tbLoi.innerHTML =
            '<div class="tb-loi" style="background-color:#c2b9e9;">Gửi thành công</div>';
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
        })
            .then((res) => res.json())
            .then((html) => {
                var inputs=document.querySelectorAll('input')
                inputs.forEach((input)=>{
                    input.value=''
                })
            });
    } else {
        e.preventDefault();
        tbLoi.innerHTML =
            '<div class="tb-loi" style=" background-color: crimson;">Vui lòng kiêm tra thông tin</div>';
    }
}