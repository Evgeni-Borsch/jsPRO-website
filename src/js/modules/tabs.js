const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelector(contentSelector);
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = "none"
        });
        tab.forEach(item => {
            item.classList.remove(activeClass);
        }) 
    };

    function showTabContent(i=0) { 
        content[i].style.display='block';
        tab[i].classList.remove(activeClass);
    }
    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        let t = e.target;
        if(t.classList.contains(tabSelector.replace(/\./, '')) || 
        t.parentNode.classList.contains(tabSelector.replace(/\./,''))) {
            tab.forEach((item,i) => {
                if(t==item || t.parentNode==item){
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })
}


export default tabs;