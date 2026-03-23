const iconLinkClass =
  "inline-flex justify-center items-center p-1 rounded-full border border-accent bg-primary-50 hover:bg-accent transition-all duration-300 lg:w-12 w-9 aspect-square text-accent hover:text-white";

export default function SocialIcons() {
  return (
    <ul className="flex lg:gap-6 gap-4 items-center social-media">
      <li>
        <a href="#" className={iconLinkClass} aria-label="Instagram">
          <svg className="lg:w-8 w-6 h-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33301 16C3.33301 10.0289 3.33301 7.0433 5.18799 5.1883C7.04299 3.33331 10.0286 3.33331 15.9997 3.33331C21.9707 3.33331 24.9563 3.33331 26.8114 5.1883C28.6663 7.0433 28.6663 10.0289 28.6663 16C28.6663 21.971 28.6663 24.9566 26.8114 26.8117C24.9563 28.6666 21.9707 28.6666 15.9997 28.6666C10.0286 28.6666 7.04299 28.6666 5.18799 26.8117C3.33301 24.9566 3.33301 21.971 3.33301 16Z" stroke="#4A0075" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M23.344 8.66669H23.332" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#" className={iconLinkClass} aria-label="TikTok">
          <svg className="lg:w-8 w-6 h-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.3335 16C3.3335 10.0289 3.3335 7.04333 5.18848 5.18833C7.04348 3.33334 10.029 3.33334 16.0002 3.33334C21.9712 3.33334 24.9568 3.33334 26.8119 5.18833C28.6668 7.04333 28.6668 10.0289 28.6668 16C28.6668 21.9711 28.6668 24.9567 26.8119 26.8117C24.9568 28.6667 21.9712 28.6667 16.0002 28.6667C10.029 28.6667 7.04348 28.6667 5.18848 26.8117C3.3335 24.9567 3.3335 21.9711 3.3335 16Z" stroke="#4A0075" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M14.048 14.6767C12.9546 14.5221 10.4624 14.7779 9.24031 17.0376C8.01823 19.2972 9.2499 21.6491 10.0185 22.5425C10.7775 23.3784 13.3164 25.0455 15.8752 23.5C16.5095 23.1169 18.0695 22 18.0695 19.7537L17.9652 7.97528C17.7923 9.27227 19.225 12.3143 23.3042 12.6743" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#" className={iconLinkClass} aria-label="YouTube">
          <svg className="lg:w-8 w-6 h-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0003 27.3334C18.4133 27.3334 20.7271 27.095 22.8715 26.6579C25.5501 26.1119 26.8894 25.8388 28.1115 24.2675C29.3337 22.6962 29.3337 20.8924 29.3337 17.2847V14.7154C29.3337 11.1077 29.3337 9.30385 28.1115 7.73251C26.8894 6.16119 25.5501 5.88819 22.8715 5.34218C20.7271 4.90505 18.4133 4.66669 16.0003 4.66669C13.5874 4.66669 11.2735 4.90505 9.12907 5.34218C6.45054 5.88819 5.11127 6.16119 3.88913 7.73251C2.66699 9.30385 2.66699 11.1077 2.66699 14.7154V17.2847C2.66699 20.8924 2.66699 22.6962 3.88913 24.2675C5.11127 25.8388 6.45054 26.1119 9.12907 26.6579C11.2735 27.095 13.5874 27.3334 16.0003 27.3334Z" stroke="#4A0075" strokeWidth="1.5" />
            <path d="M21.2828 16.4172C21.0849 17.2249 20.0321 17.8051 17.9265 18.9655C15.6363 20.2273 14.4912 20.8584 13.5637 20.6153C13.2496 20.5329 12.9603 20.3881 12.7173 20.1917C12 19.6119 12 18.4079 12 16C12 13.5921 12 12.3882 12.7173 11.8082C12.9603 11.6118 13.2496 11.4671 13.5637 11.3847C14.4912 11.1416 15.6363 11.7726 17.9265 13.0346C20.0321 14.1949 21.0849 14.7751 21.2828 15.5828C21.3501 15.8577 21.3501 16.1423 21.2828 16.4172Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#" className={iconLinkClass} aria-label="X (Twitter)">
          <svg className="lg:w-8 w-6 h-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33301 16C3.33301 10.0289 3.33301 7.0433 5.18799 5.1883C7.04299 3.33331 10.0286 3.33331 15.9996 3.33331C21.9708 3.33331 24.9563 3.33331 26.8114 5.1883C28.6663 7.0433 28.6663 10.0289 28.6663 16C28.6663 21.971 28.6663 24.9566 26.8114 26.8117C24.9563 28.6666 21.9708 28.6666 15.9996 28.6666C10.0286 28.6666 7.04299 28.6666 5.18799 26.8117C3.33301 24.9566 3.33301 21.971 3.33301 16Z" stroke="#4A0075" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.33301 22.6666L14.9244 17.0753M14.9244 17.0753L9.33301 9.33331H13.0367L17.075 14.9246M14.9244 17.0753L18.9626 22.6666H22.6663L17.075 14.9246M22.6663 9.33331L17.075 14.9246" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#" className={iconLinkClass} aria-label="Facebook">
          <svg className="lg:w-8 w-6 h-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33301 16C3.33301 10.0289 3.33301 7.0433 5.18799 5.1883C7.04299 3.33331 10.0286 3.33331 15.9997 3.33331C21.9707 3.33331 24.9563 3.33331 26.8114 5.1883C28.6663 7.0433 28.6663 10.0289 28.6663 16C28.6663 21.971 28.6663 24.9566 26.8114 26.8117C24.9563 28.6666 21.9707 28.6666 15.9997 28.6666C10.0286 28.6666 7.04299 28.6666 5.18799 26.8117C3.33301 24.9566 3.33301 21.971 3.33301 16Z" stroke="#4A0075" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M18.5 10.6667H16.8333C15.7288 10.6667 14.8333 11.5621 14.8333 12.6667V14.3334H18.5L18 17.6667H14.8333V22.0001H11.5V17.6667H9.33331V14.3334H11.5V12.3334C11.5 9.94012 13.4408 8.00008 15.8333 8.00008H18.5V10.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </li>
    </ul>
  );
}
