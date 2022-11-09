function Footer() {
    var currentTime = new Date();
    var year = currentTime.getFullYear()
    return (
        <footer>
            <p>Copyright ⓒ {year}</p>
        </footer>
    );
}

export default Footer;