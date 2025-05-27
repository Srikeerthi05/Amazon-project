const xhr=new XMLHttpRequest();

xhr.addEventListener('load',()=>{
    console.log()
});
xhr.open('GET','https://supersimplebackend.dev');
xhr.send();
xhr.response()