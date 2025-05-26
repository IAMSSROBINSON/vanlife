export default function Footer () {
    const thisYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p className="footer-copyright">
                &copy; {thisYear} #VANLIFE
            </p>
        </footer>
    )
}