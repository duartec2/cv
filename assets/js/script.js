/* Toggle Dark theme */
const darkToggle = document.getElementById('dark-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    // Lights off (Dark theme)
    sunIcon.classList.remove('hidden');
    document.documentElement.classList.add('dark');
} else {
    // Lights on (Light theme)
    moonIcon.classList.remove('hidden');
    document.documentElement.classList.remove('dark');
}

darkToggle.addEventListener('click', function () {
    moonIcon.classList.toggle('hidden');
    sunIcon.classList.toggle('hidden');
    document.documentElement.classList.toggle('dark');
    localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
});


/** Hide email and phone for crawlers */
const phoneText = '1$71$5###8$73###24$4###2$5+'.replaceAll('$', '').replaceAll('###', ' ').split('').reverse().join('');
const emailText = 'mo$c%lia$mg$[at]2ce$tr$aud'.replaceAll('$', '').replaceAll('%', '.').replaceAll('[at]', '@').split('').reverse().join('');

document.getElementById('email-link').href = 'mailto:' + emailText;
document.getElementById('email-text').innerHTML = emailText;

document.getElementById('phone-link').href = 'tel:' + phoneText;
document.getElementById('phone-text').innerHTML = phoneText;





