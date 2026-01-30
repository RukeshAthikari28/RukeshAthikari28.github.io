let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text',  {
    strings: [ 'AI Product Manager','Product Analyst', 'Programmer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
 });function toggleReadMore(element) {
    const container = element.parentElement;
    const content = container.querySelector('.content');
    const shortContent = container.querySelector('.short-content');

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "inline";
        shortContent.style.display = "none";
        element.innerText = "Read less...";
        container.style.height = "auto"; // Expands the container dynamically
    } else {
        content.style.display = "none";
        shortContent.style.display = "inline";
        element.innerText = "Read more...";
        container.style.height = ""; // Resets the height
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const projectBox = document.querySelector("#ai");
    const projectDetail = document.querySelector("#aibased");
    const closeButton = projectDetail.querySelector("svg");
    const body = document.querySelector("body");

    projectBox.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        projectDetail.style.display = "block"; // Show the project details section
        projectDetail.style.position = "fixed"; // Make it a fullscreen overlay
        projectDetail.style.top = "50%";
        projectDetail.style.left = "50%";
        projectDetail.style.transform = "translate(-50%, -50%)";
        projectDetail.style.width = "100%";
        projectDetail.style.height = "100%";
        projectDetail.style.zIndex = "1000";
        projectDetail.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
        projectDetail.style.padding = "20px";
        projectDetail.style.borderRadius = "10px";
        projectDetail.style.overflowY = "auto";
        
        // Reduce background opacity
        body.style.background = "rgba(0, 0, 0, 0.9)";
    });

    closeButton.addEventListener("click", function () {
        projectDetail.style.display = "none"; // Hide the project details section
        body.style.background = ""; // Restore background opacity
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projectBox = document.querySelector("#houses");
    const projectDetail = document.querySelector("#house");
    const closeButton = projectDetail.querySelector("svg");
    const body = document.querySelector("body");

    projectBox.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        projectDetail.style.display = "block"; // Show the project details section
        projectDetail.style.position = "fixed"; // Make it a fullscreen overlay
        projectDetail.style.top = "50%";
        projectDetail.style.left = "50%";
        projectDetail.style.transform = "translate(-50%, -50%)";
        projectDetail.style.width = "100%";
        projectDetail.style.height = "100%";
        projectDetail.style.zIndex = "1000";
        projectDetail.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
        projectDetail.style.padding = "20px";
        projectDetail.style.borderRadius = "10px";
        projectDetail.style.overflowY = "auto";
        
        // Reduce background opacity
        body.style.background = "rgba(0, 0, 0, 0.9)";
    });

    closeButton.addEventListener("click", function () {
        projectDetail.style.display = "none"; // Hide the project details section
        body.style.background = ""; // Restore background opacity
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const projectBox = document.querySelector("#stu");
    const projectDetail = document.querySelector("#student");
    const closeButton = projectDetail.querySelector("svg");
    const body = document.querySelector("body");

    projectBox.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        projectDetail.style.display = "block"; // Show the project details section
        projectDetail.style.position = "fixed"; // Make it a fullscreen overlay
        projectDetail.style.top = "50%";
        projectDetail.style.left = "50%";
        projectDetail.style.transform = "translate(-50%, -50%)";
        projectDetail.style.width = "100%";
        projectDetail.style.height = "100%";
        projectDetail.style.zIndex = "1000";
        projectDetail.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
        projectDetail.style.padding = "20px";
        projectDetail.style.borderRadius = "10px";
        projectDetail.style.overflowY = "auto";
        
        // Reduce background opacity
        body.style.background = "rgba(0, 0, 0, 0.9)";
    });

    closeButton.addEventListener("click", function () {
        projectDetail.style.display = "none"; // Hide the project details section
        body.style.background = ""; // Restore background opacity
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const projectBox = document.querySelector("#senti");
    const projectDetail = document.querySelector("#sentiment");
    const closeButton = projectDetail.querySelector("svg");
    const body = document.querySelector("body");

    projectBox.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        projectDetail.style.display = "block"; // Show the project details section
        projectDetail.style.position = "fixed"; // Make it a fullscreen overlay
        projectDetail.style.top = "50%";
        projectDetail.style.left = "50%";
        projectDetail.style.transform = "translate(-50%, -50%)";
        projectDetail.style.width = "100%";
        projectDetail.style.height = "100%";
        projectDetail.style.zIndex = "1000";
        projectDetail.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
        projectDetail.style.padding = "20px";
        projectDetail.style.borderRadius = "10px";
        projectDetail.style.overflowY = "auto";
        
        // Reduce background opacity
        body.style.background = "rgba(0, 0, 0, 0.9)";
    });

    closeButton.addEventListener("click", function () {
        projectDetail.style.display = "none"; // Hide the project details section
        body.style.background = ""; // Restore background opacity
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const projectBox = document.querySelector("#pdf");
    const projectDetail = document.querySelector("#pdfs");
    const closeButton = projectDetail.querySelector("svg");
    const body = document.querySelector("body");

    projectBox.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        projectDetail.style.display = "block"; // Show the project details section
        projectDetail.style.position = "fixed"; // Make it a fullscreen overlay
        projectDetail.style.top = "50%";
        projectDetail.style.left = "50%";
        projectDetail.style.transform = "translate(-50%, -50%)";
        projectDetail.style.width = "100%";
        projectDetail.style.height = "100%";
        projectDetail.style.zIndex = "1000";
        projectDetail.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
        projectDetail.style.padding = "20px";
        projectDetail.style.borderRadius = "10px";
        projectDetail.style.overflowY = "auto";
        
        // Reduce background opacity
        body.style.background = "rgba(0, 0, 0, 0.9)";
    });

    closeButton.addEventListener("click", function () {
        projectDetail.style.display = "none"; // Hide the project details section
        body.style.background = ""; // Restore background opacity
    });
});
