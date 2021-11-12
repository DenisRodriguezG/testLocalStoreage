const formElement = document.querySelector('.form__data');
const nameElement = document.getElementById('name');
const ageElement = document.getElementById('age');
const cityElement = document.getElementById('city');

const containerElement = document.querySelector('.container');

const ShowInfoUser = (array) =>
{
    const containerInfoData = document.createElement('div');
    containerInfoData.classList.add('containerData');
    containerInfoData.innerHTML = `
    <div>
    <p>${array.name}</p>
    <p>${array.age}</p>
    <p>${array.city}</p>
    </div>
    `;
    containerElement.appendChild(containerInfoData);
}
const arrayUsers = JSON.parse(localStorage.getItem('users'));
if(arrayUsers !== null)
{
    arrayUsers.map(e => {
        ShowInfoUser(e)
    })
}

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    let users = [];
    const data = {
            name: nameElement.value,
            age: ageElement.value,
            city: cityElement.value
        }
    const infoUser = JSON.parse(localStorage.getItem('users'));
    if(infoUser !== null)
    {
        users = infoUser;
    }
    users.push(data)
    localStorage.setItem('users', JSON.stringify(users))
})


