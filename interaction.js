var cat_image = document.getElementById('cat');
cat_image.addEventListener("click", function() {
    alert("Meow!");
});

var button = document.getElementById('feed_button');

function feed() {
    cat_image.style.width = (cat_image.offsetWidth + 30.0) + 'px';
};

button.addEventListener("click", feed, function() {
    alert("Thank you!");
});
