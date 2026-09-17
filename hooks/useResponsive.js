import { useState, useEffect } from 'react';
const useResponsive = () => {
    const [isOnMobile, setIsOnMobile] = useState(true);
    useEffect(() => {
        function handleResize() {
            window.innerWidth >= 800 ? setIsOnMobile(false) : setIsOnMobile(true);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return isOnMobile;
}
export default useResponsive;