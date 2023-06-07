import '../styles/banner.css'
const Banner = (props) => {
    let titles=props.data
    return ( 
        <div className="banner">
            <div className="title1">
                <h1>{titles}</h1>
            </div>
            
        </div>
     );
}
 
export default Banner;