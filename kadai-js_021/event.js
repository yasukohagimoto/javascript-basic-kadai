const clickBtn = document.getElementById('btn');
const text = document.getElementById('text');


clickBtn.addEventListener('click', () => {
    setTimeout(() => {
        console.log( text.textContent = 'ボタンをクリックしました');
    },2000);
}); 


