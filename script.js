const ratingButtons = document.querySelectorAll('.rating');
const submitButton = document.querySelector('.submit')
const ratingWindow = document.querySelector('.rate');
const thankYouWindow = document.querySelector('.thank-you');
const ratingOutput = document.querySelector('.rating-output');
let rate;

ratingButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        ratingButtons.forEach((btn) => {
            btn.classList.remove('active-button');
        });

        // Add 'active' class to the clicked button
        button.classList.add('active-button');

        // Update rate variable and display the selected rating
        rate = parseInt(button.getAttribute('data-rate'));
        ratingOutput.textContent = `You selected ${rate} out of 5`;
    });
});

submitButton.addEventListener('click', ()=>{
    let error = document.querySelector('.error');

    if (rate !== undefined){
        if(error){
            error.style.display = 'none';
        };

        ratingWindow.classList.remove('active');
        thankYouWindow.classList.add('active');
    }
    else{
        if(!error){
            error = document.createElement('p');
            error.textContent = 'Please select a rating please';
            error.classList.add('error');
            ratingWindow.append(error);
        }
    }
});

