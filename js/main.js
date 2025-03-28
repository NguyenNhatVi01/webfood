document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const profileButton = document.getElementById('profile');
    const loginButton = document.querySelector('a[href="./login.html"]');
    const signupButton = document.querySelector('a[href="./register.html"]');

    if (isLoggedIn) {
        // Show profile, hide login/signup
        if (profileButton) profileButton.style.display = 'inline-block';
        if (loginButton) loginButton.parentElement.style.display = 'none';
        if (signupButton) signupButton.parentElement.style.display = 'none';
    } else {
        // Show login/signup, hide profile
        if (profileButton) profileButton.style.display = 'none';
        if (loginButton) loginButton.parentElement.style.display = 'inline-block';
        if (signupButton) signupButton.parentElement.style.display = 'inline-block';
    }
});
