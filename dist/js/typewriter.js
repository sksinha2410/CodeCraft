class textTyper{
    constructor(txtElement, words, wait){
        this.txtElement = txtElement;
        this.words      = words;
        this.delay      = wait;
        this.wordIndex  = 0;
        this.txt        = '';
        this.isDeleting = false;
        this.typer();
    }

    typer() {

        const current = this.wordIndex % this.words.length;
        const fulltxt = this.words[current];

        //check if deleting words
        if(this.isDeleting){
            this.txt = fulltxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }

        //inserting words
        this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`;

        //set type speed
        let typespeed = this.delay;

        if(this.isDeleting){
            typespeed /= 2;
        }

        if(!this.isDeleting && this.txt ===  fulltxt){
            
            typespeed = this.delay;
            this.isDeleting = true;

        } else if( this.isDeleting && this.txt === ''){

            this.isDeleting = false;
            this.wordIndex++;
            // pause before starting
            typespeed = 500;

        }

        setTimeout( () => this.typer() , typespeed);

    }
}

//on page load
document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //parsing data
    new textTyper(txtElement, words, wait);
}
