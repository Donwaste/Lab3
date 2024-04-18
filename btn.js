    function btnController() {
        var drop = document.querySelector('.drop');
        var over = document.querySelector('.overlay');
        drop.classList.toggle('active');
        over.classList.toggle('active');
    }

    function removeActive() {
        var drop = document.querySelector('.drop');
        var over = document.querySelector('.overlay');
        drop.classList.remove('active');
        over.classList.remove('active');
    }

    document.querySelector('.btn').addEventListener('click', btnController);
    document.querySelector('.overlay').addEventListener('click', removeActive);
