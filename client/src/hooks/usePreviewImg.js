import { useState } from "react"

const usePreviewImg = () => {
    const [imgUrl, setImgUrl] = useState("")
    const handleImageChange = (ev) => {
        const file = ev.target.files[0]
        if (file) {
            const reader = new FileReader()

            reader.onloadend = () => {
                setImgUrl(reader.result)
            }

            reader.readAsDataURL(file)
        }
    }
    return { handleImageChange, imgUrl, setImgUrl }
}
export default usePreviewImg