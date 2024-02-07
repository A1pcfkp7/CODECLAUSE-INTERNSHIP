document.addEventListener('DOMContentLoaded', function () {
    // Get all the list items
    var listItems = document.querySelectorAll('.list');

    // Add click event listener to each list item
    listItems.forEach(function (item) {
        item.addEventListener('click', function () {
            var filter = this.getAttribute('data-filter'); // Get the data-filter attribute value

            // Filter the items based on the selected category
            var itemBoxes = document.querySelectorAll('.itemBox');
            itemBoxes.forEach(function (box) {
                if (filter === 'all' || box.getAttribute('data-item') === filter) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    });
});