import Link from "next/link"

const FooterPagenav = ({ prev = { text: "Home", link: "/" }, next = { text: "Home", link: "/" } }) => {
    return (
        <div className="page-nav container">
            <Link href={prev.link}>&#8592; {prev.text}</Link>
            <Link href={next.link}>{next.text} &#8594;</Link>
        </div>
    )
}

export default FooterPagenav;