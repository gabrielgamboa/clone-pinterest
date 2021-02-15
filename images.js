const items = document.querySelectorAll('.grid-container .grid .item');

function images() {

  items.forEach(async item => {
    let photoUrl = await fetch('https://source.unsplash.com/random/236x350').then(res => res.url);
  
    let img = document.createElement('img');
    img.src = photoUrl;
    console.log(img)
  
    item.appendChild(img);
  })
}

images();
