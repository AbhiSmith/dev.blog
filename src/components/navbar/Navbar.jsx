import Image from "next/image"
import style from "./navbar.module.css"
import Link from "next/link"
import ThemeToggle from "../themeToggle/ThemeToggle"
import AuthLink from "../authLink/AuthLink"

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.social}>
        <Image src="/GitHub.png" alt="facebook" width={24} height={24}/>
        <Image src="/facebook.png" alt="instagram" width={24} height={24}/>
        <Image src="/linkedin.png" alt="tiktok" width={24} height={24}/>
        <Image src="/youtube.png" alt="youtube" width={24} height={24}/>
      </div>
      <div className={style.logo}>DEV.blog</div>
      <div className={style.links}>
        <ThemeToggle />
        <Link href='/' className={style.link}>HomePage</Link>
        <Link href='/' className={style.link}>Contact</Link>
        <Link href='/' className={style.link}>About</Link>
        <AuthLink />
      </div>
    </div>
      
  )
}

export default Navbar