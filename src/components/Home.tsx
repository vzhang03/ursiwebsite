import URSILogo from '../assets/URSI_logo_black.png'

function Home(){
    return (
        <div>
            <div className="titlepage">
                <h1 className='header'>Computational Analysis of Thematic Variation in Literature</h1>
                <h2 className='header'>Victor Zhang '25, Nora Phelan '26, Rhys Sequeira '25</h2>
                <h2 className='header'>Professor Gordon</h2>
                <h3 className='header'>Vassar College URSI Summer 2023</h3>
                <img src={URSILogo} className='ursilogo'></img>
            </div>
        </div>
    )
}

export default Home;