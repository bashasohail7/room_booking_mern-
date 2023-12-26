import './propertyList.css'
import useFetch from '../hooks/useFetch'
import axios from 'axios'
const PropertyList=()=>{
const {data,loading,error}=useFetch("http://localhost:8800/api/v1/hotels/countByType")
const 

const getData=()=>{
    axios.get('http://localhost:8800/api/v1/hotels/countByType')
    .then(res=>)
}
console.log(data);
return(
    <div className="pList">
        {
            loading?'loading':
        <>
        <div className="pListItem">
            <img className='pListImg'
            src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" alt="" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>{data[0].count} Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg'
            src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" alt="" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>{data[1].count} Apartments</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg'
            src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" alt="" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>{data[2].count} Villas</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg'
            src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" alt="" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>{data[3].count} Villas</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg'
            src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" alt="" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>{data[2].count} Villas</h2>
            </div>
        </div>
        </>

}
    </div>
)
}
export default PropertyList