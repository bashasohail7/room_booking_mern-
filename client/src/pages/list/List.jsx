import './list.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import format from 'date-fns/format'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
const List = () => {
    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState(location.state.option)
    console.log(location)
    return (
        <>
            <Navbar />
            <Header type='list' />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label htmlFor="">Destination</label>
                            <input type="text" placeholder={destination} />
                        </div>
                        <div className="lsItem">
                            <label htmlFor="">Check -in Date </label>
                            <span onClick={() => { setOpenDate(!openDate) }} >{`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
                            {openDate && <DateRange
                                //    onChange={item=>setDate([item.selection])}
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                minDate={new Date()}
                            />}
                        </div>
                        <div className="lsItem">
                            <label >Options</label>
                            <div className="lsOptions">

                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Min Price <small>per night</small>
                                </span>
                                <input type="number" className="lsOptionInput" />
                            </div>

                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Max Price <small>per night</small>
                                </span>
                                <input type="number" className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Adult
                                </span>
                                <input min={1} type="number" className="lsOptionInput" placeholder={options.adult} />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Children
                                </span>
                                <input min={0} type="number" className="lsOptionInput" placeholder={options.children} />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Room
                                </span>
                                <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                            </div>
                        </div>
                    </div>
                    <button>Search</button>
                            </div>
                    <div className="listResult"></div>
                </div>
            </div>
        </>
    )
}
export default List