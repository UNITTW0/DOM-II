// Your code goes here

let heading = document.querySelector('h1');
heading.style.color = 'purple';

heading.addEventListener('click', () => {
    heading.style.color = 'green';
    heading.style.fontWeight = 'bold';
})

document.addEventListener("keydown", (i) => {
    console.log('keydown:' ,i);
    if (i.key === 'a') {
      console.log('hit a!');
    } else {
      console.log(`hit ${i.key}`);
    }
    i.stopPropagation();

  });

let body = document.querySelector('body');
body.style.background = '#f4f3ee';

window.addEventListener('scroll', () =>{
    body.style.background = '#ef233c'
    body.style.color = 'white';
})

const images = document.querySelectorAll('img').forEach(e =>{
    document.addEventListener("mouseover", () => {
        e.style.transform = "scale(1.1)";
         e.style.transition = "transform 1s";
      });

      document.addEventListener("mouseout", () => {
        e.style.transform = "scale(1)";
        e.style.transition = "transform 1s";
      });
      
});


     let para = document.querySelectorAll('p').forEach(i =>{
        document.addEventListener('dblclick', () =>{
            i.textContent = 'text has changed because you double clicked!'
         })
     });

     
     
     let footer = document.querySelector('.footer');
     
     document.addEventListener('focus', e =>{
         if(e.focus === 'true'){
             footer.style.color = 'blue'
             footer.style.backgroundColor = 'black'
         }
     })


     window.addEventListener('online', () =>{
         console.log('you have established a connection!')
     })

     window.addEventListener('offline', () =>{
         console.log('You have lost connection')
     })

    