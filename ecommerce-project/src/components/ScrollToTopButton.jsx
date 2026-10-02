import { useState, useEffect } from 'react'
import './ScrollToTopButton.css'

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when scrolled down more than 300px
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Enables smooth animation
        })
    }

    if (!isVisible) return null

    return (
        <button
            className='scroll-btn'
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            ↑
        </button>
    )
}