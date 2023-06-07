import '../styles/navbar.css'
const Navbar = () => {
    return ( 
        <div className="navbar">
          <div className="title">
            <div className='chef'>
            <img src="/images/foodie.png" alt="" width="90px" height="60px"/>
            </div>
            <div className='f'><h1>FOOD BLOG</h1></div>
      
          </div>
          <div className="links1  ">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="home/about">About</a></li>
                <li><a href="/home/food">Foods</a></li>
                <li><a href="/home/addpost">Add Posts</a></li>
                <li><a href="/">Logout</a></li>
                
            </ul>
          </div>
        </div>
     );
}
 
export default Navbar;