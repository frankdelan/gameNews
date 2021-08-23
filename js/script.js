let tabs = document.getElementById('tabs');
let contents = document.querySelectorAll('.content');


let changeClass = el =>{
    for(let i = 0; i<tabs.children.length;i++){
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}
tabs.addEventListener('click',e =>{
    let currTab = e.target.dataset.btn;
    changeClass(e.target);
    for(let i=0;i<contents.length;i++){
        contents[i].classList.remove('active');
        if(contents[i].dataset.content == currTab){
            contents[i].classList.add('active');
        }
    }
})