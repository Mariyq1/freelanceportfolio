const btnDarkMode = document.querySelector(".dark-mode-btn");
if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches){
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}
if(localStorage.getItem('darkMode')==='dark'){
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}


window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event)=>{
    const newColorSheme = event.matches ? "dark":"light";
    if(newColorSheme == 'dark'){
        btnDarkMode.classList.add('dark-mode-btn--active');
        document.body.classList.add('dark');

    }else{
        btnDarkMode.classList.remove('dark-mode-btn--active');
        document.body.classList.remove('dark');

    }
})

btnDarkMode.onclick = function(){
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark');
    if(isDark){
        localStorage.setItem('darkMode', 'dark')
    }else{
        localStorage.setItem('darkMode', 'light');
    }

}