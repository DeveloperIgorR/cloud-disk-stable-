const SortLogo = (props) => {
    
    return(
        <div>
            <svg width="33" height="12" viewBox="0 0 33 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill={props.type === 'FROM_SMALL_TO_BIG' ? 'white' : '#566885'} d="M15 6C15 5.44772 15.4477 5 16 5H26C26.5523 5 27 5.44772 27 6C27 6.55228 26.5523 7 26 7H16C15.4477 7 15 6.55228 15 6ZM16 12C15.4477 12 15 11.5523 15 11C15 10.4477 15.4477 10 16 10H32C32.5523 10 33 10.4477 33 11C33 11.5523 32.5523 12 32 12H16ZM15 1C15 0.447715 15.4477 0 16 0H20C20.5523 0 21 0.447715 21 1C21 1.55228 20.5523 2 20 2H16C15.4477 2 15 1.55228 15 1Z" />
              <path d="M1 7L5 11L9 7" stroke="#495974" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path  d="M5 11L5 1" stroke="#495974" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )       
}
export default SortLogo