//if error in js, try adding it to the footer as it reads from top to bottom 
//it may appear null because the event should happen when it finds the element

let primaryNav = document.querySelector(".primary--nav");
let navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", ()=> {
    const visibility = primaryNav.getAttribute("data-visible");
    
    if (visibility === "false"){
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    }
    else {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
})


// let img1 = document.getElementById("head1");
// let img2 = document.getElementById("head2");
// let img3 = document.getElementById("head3");
// let img4 = document.getElementById("head4");

// let servtitle = document.getElementById("services-title");

// window.addEventListener("scroll", function() {
//     var value = this.window.scrollY;

//     //bg.style.top = value * 0.5 + 'px'
//     img1.style.left = value * 0.5 + 'px';
//     img2.style.top = -value * 0.5 + 'px';
//     img3.style.right = value * 0.5 + 'px';
//     img4.style.top = -value * 0.5 + 'px';

//     servtitle.style.left = -value * 200 +'px';
// // })
// let trial = document.querySelector('#image1');
// window.addEventListener('scroll', function() {
//     var value = window.scrollY;
//     trial.style.transform = value * 1000 + 'px';
// })



            //BASE ON THIS SCRIPT!
function parallax (element, distance, speed) {
    let item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function(){
    parallax("#head2", window.scrollY, 1.4);
    parallax("#head3", -window.scrollY, 2.2);
    parallaxX(".services-title", window.screenY, 5);
});


function parallaxX (element, distance, speed) {
    let item = document.querySelector(element);
    item.style.transform = `translateX(${distance * speed}px)`;
}

window.addEventListener("scroll", function(){
    parallaxX("#head1", window.scrollY, 0.8);
    parallaxX("#head4", -window.scrollY, 1);
    
});




const copyMailId = document.querySelectorAll('.mail-text');

copyMailId.forEach(copyText => {
    copyText.addEventListener('click', () => {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(copyText);
        selection.removeAllRanges();
        selection.addRange(range);

        try {
            document.execCommand('copy');
            selection.removeAllRanges();

            const mailId = copyText.textContent;
            copyText.textContent = 'Copied!';
            copyText.classList.add('success');

            setTimeout(() => {
                copyText.textContent = mailId;
                copyText.classList.remove('success');
            }, 1000);
        } catch (e) {
            copyText.textContent = 'Couldn\'t copy, hit Ctrl+C!';
            copyText.classList.add('error');

            setTimeout(() => {
                errorMsg.classList.remove('show');
            }, 1200);
        }
    });
});


// function sendEmail() {
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "kikzcafe@gmail.com",
//         Password : "Kn06241924",
//         To : 'cafenaturepix@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "New Contact Form",
//         Body : "Message: " + document.getElementById('comment').value +
//         "<br> Name: " + document.getElementById("name").value +
//         "<br> Email: " + document.getElementById("email").value 
//     }).then(
//       message => alert("Message sent successfuly")
//     );
// }