function filter() {
    count = projects.children.length;

    Array.from(projects.children).forEach(function (element) {
        if (element.innerHTML.toLowerCase().includes(filterInput.value.toLowerCase())) {

            element.classList.remove("hidden")
        } else {
            count--;
            element.classList.add("hidden")
        }
    });
    counter.innerHTML = count + " results";
}
