    document.getElementById('check-button').addEventListener('click', function () {
        const lunchMenu = document.getElementById('lunch-menu').value;
        const dishes = lunchMenu.split(',').map(item => item.trim());

        if (dishes.length > 3) {
            document.querySelector('.message').innerHTML = 'Too much!';
        } else {
            document.querySelector('.message').innerHTML = 'Enjoy your meal!';
        }
    });
</script>
</body>
</html>