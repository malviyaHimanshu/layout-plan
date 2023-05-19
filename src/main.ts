const blockArr = document.querySelectorAll('.block');
const ownerDetails = Array.from(document.getElementsByClassName('owner-details') as HTMLCollectionOf<HTMLElement>)[0];
console.log(ownerDetails);

blockArr.forEach((block) => {
    block.addEventListener('click', () => {
        block.classList.add('occupied');
        console.log(`${block.id} is booked 🤝🏻💯`);
    });
    block.addEventListener('mouseover', () => {
        const blockOffsets = document.getElementById(`${block.id}`)?.getBoundingClientRect();
        if(block.classList.contains('occupied')) {
            ownerDetails.innerHTML = `Loremendi India <br> ${block.id}`;
            ownerDetails.style.top = `calc(${blockOffsets?.top}px - 50px)`;
            ownerDetails.style.left = `calc(${blockOffsets?.left}px - 50px)`;
            ownerDetails.classList.add('owner-details-show');
        }
    });
    block.addEventListener('mouseout', () => {
        if(ownerDetails && ownerDetails.classList.contains('owner-details-show')) {
            ownerDetails.classList.remove('owner-details-show');
        }
    });
});