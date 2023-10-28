//both give the same result-its practice-how to use queryselector(DOM)

const ul=document.querySelector('.items')
ul.firstElementChild.innerHTML='<h4><span style="color: green; font-weight: bold;">HELLO</span></h4>';
ul.children[1].style.color='yellow';

//we can use either one of them and get same result

const ul=document.querySelector('.items');
ul.firstElementChild.innerHTML='<h4>HELLO</h4>';
ul.firstElementChild.style.color='green';
ul.children[1].style.color='yellow';

