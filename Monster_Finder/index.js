import { monsters } from './monster.js';
console.log(monsters);

for (let monsterDiv of monsters) {
    console.log(monsterDiv);
    showMonster(monsterDiv);
};

document.querySelector('.search-field').addEventListener('keyup', function (e) {
    const keyword = e.target.value.toLowerCase();
    console.log(keyword);
    const findMonster = document.querySelectorAll('.monster');
    for (let monster of findMonster) {
        console.log(monster.children);

        const name = monster.children[1].innerText.toLowerCase();
        const email = monster.children[2].innerText.toLowerCase();

        console.log(name, email);

        if (name.includes(keyword) || email.includes(keyword)) {
            console.log('done');
            monster.style.backgroundColor = 'crimson';
            // monster.style.img.zIndex = '1';
            // monster.style.p.color = 'white';
            notFoundDiv.style.display = 'none';
            return;
        }
        else {
            monster.style.display = 'none';
            console.log('none');
            // notFound();
            notFoundDiv.style.display = 'flex';
        }
        
    }
})




function showMonster(monsterDiv) {
    const monster = document.createElement('div');
    monster.className = "monster";

    const img = document.createElement('img');
    img.src = `https://robohash.org/${monsterDiv.id}`;
    img.alt = "monster name";

    const name = document.createElement('p');
    name.className = "name";
    name.innerText = `${monsterDiv.name}`;

    const email = document.createElement('p');
    email.className = 'email';
    email.innerText = `${monsterDiv.email}`;

    monster.append(img, name, email);

    console.log(monster);
    document.querySelector('.monsters').append(monster);

};

const notFoundDiv = document.createElement('div');
function notFound() {
    // const notFoundDiv = document.createElement('div');
    notFoundDiv.className = "Not-Found";
    notFoundDiv.innerHTML = '<i class="fa-regular fa-face-worried"></i>'
    const h2 = document.createElement('h2');
    h2.innerText = 'Not-Found';
    notFoundDiv.append(h2);
    console.log(notFoundDiv);
    document.querySelector('.monsters').append(notFoundDiv);
    notFoundDiv.style.display = 'none';
};
notFound();



