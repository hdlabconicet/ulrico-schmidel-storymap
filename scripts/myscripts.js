<script>
    // Get the element with the class "pop-display"
    const popDisplay = document.querySelector('.pop-display');

    // Get the pop-up box
    const popup = document.getElementById('popup');

    // Show the pop-up box when hovering over the element
    popDisplay.addEventListener('mouseenter', function() {
        popup.style.display = 'block';
    });

    // Hide the pop-up box when mouse leaves the element
    popDisplay.addEventListener('mouseleave', function() {
        popup.style.display = 'none';
    });
</script>
