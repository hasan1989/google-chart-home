const buttons = document.querySelectorAll('.btn');
const infos = document.querySelectorAll('.info');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        removeClass();
        button.classList.add('active');
        colorDiv();
    });
});

function removeClass(){
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
};



function colorDiv(){
    console.log(buttons);
};

// function hideDiv(){
// a.style.class = 'activ';
//     // infos.forEach((info) => {
//     //     info.classList.add('active');
//     // });
// };

// function showDiv(){
//     infos.forEach((info) => {
//         info.classList.add('active');
//     });
// };

