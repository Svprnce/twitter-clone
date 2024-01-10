import { Notificationcategory } from "@/components/Notificationbar"
import '../../styles/notification/category.css'
const Layout = ({children})=>{
    return(
        <>
        <Notificationcategory/>
        {children}
        </>
    )
}
export default Layout