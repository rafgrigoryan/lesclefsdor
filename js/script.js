function showMore(element) {
    var description = element.previousElementSibling;
    description.classList.toggle("show-more");
    if (description.classList.contains("show-more")) {
        element.textContent = "Show less ";
    } else {
        element.textContent = "Show more ... ";
    }
}