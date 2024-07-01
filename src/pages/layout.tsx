import Header from "./header"

type ILayout = {
    children:any
}
function Layout({children}:ILayout) {
  return (
    <>
   <Header/>
    <main className="flex justify-center items-center ">{children}</main>
    </>
  )
}

export default Layout