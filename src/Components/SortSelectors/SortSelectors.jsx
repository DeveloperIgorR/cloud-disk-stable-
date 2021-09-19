import BigPlateLogo from '../../Components/Icons/BigPlateLogo'
import ListLogo from '../../Components/Icons/ListLogo'
import PlateLogo from '../../Components/Icons/PlateLogo'
import SortLogo from '../../Components/Icons/SortLogo'
import s from './SortSelectors.module.css'

const SortSelectors = (props) => {
    let sortOptions = [
        { value: 'name', name: 'сортировка по названию' },
        { value: 'date', name: 'сортировка по дате' }
    ]    
    
    function onTypeClick(event){
        props.setType(event)
        localStorage.setItem('type',JSON.stringify(props.type))
    }
    
    return (
        <div className={s.selections}>
            <button ><SortLogo type={props.sortedtype} /></button>
            <select onChange={event => props.setSortedType(event.target.value)}>
                <option selected disabled value=''>Name</option>
                {sortOptions.map((el) => {
                    return <option key={el.value} value={el.value}>{el.name}</option>
                })}
            </select>
            <button onClick={() => onTypeClick('BIG_PLATE')}><BigPlateLogo type={props.type} /></button>
            <button onClick={() => onTypeClick('PLATE')}><PlateLogo type={props.type} /></button>
            <button onClick={() => onTypeClick('LIST')}><ListLogo type={props.type} /></button>
        </div>
    )
}
export default SortSelectors