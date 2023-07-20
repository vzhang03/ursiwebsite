import { Link } from 'react-scroll';

function Ldamallet(){
    return (
        <div>
            <div className='mainTitleFormat'>
                <h1 className='header'>LDA Mallet</h1>
                <p className='text'>Latent Dirichlet allocation is a generative probablistic model of a corpus.</p>
                <ul>
                    <li className='header'>
                        <Link to='section1' className='scroll-link' smooth={true} duration={500} offset={-100}>
                            Introduction
                        </Link>
                    </li>
                    <li className='header'>
                        <Link to='section2' className='scroll-link' smooth={true} duration={500} offset={-100}>
                            Results
                        </Link>
                    </li>
                    <li className='header'>
                        <Link to='section3' className='scroll-link' smooth={true} duration={500} offset={-100}> 
                            Visualizations
                        </Link>
                    </li>
                </ul>
                <hr />
            </div>

            <div className='mainTextFormat' id='section1'>
                <div className='mainTextFormatBox'>
                    <h3 className='header'>Title of body</h3>
                    <p className='text'>for things to do next:
                        need to figure out how to format
                        individual sections,
                        need to find a color scheme 
                        and font style, 
                        small things such as button lightup
                        and smooth scrolling or the thing 
                        that lets jump to diffferent sections
                    </p>
                </div>
                <div className='mainTextFormatBox'>
                    <h3 className='header'>Next element</h3>
                    <p className='text'>Blah blah blah these are a bunch of items being listed</p>
                </div>
            </div>


            <hr />
            <div className='mainTextFormat' id='section2'>
                <div className='mainTextFormatBox'>
                    <h3 className='header'>Title of body</h3>
                    <p className='text'>for things to do next:
                        need to figure out how to format
                        individual sections,
                        need to find a color scheme 
                        and font style, 
                        small things such as button lightup
                        and smooth scrolling or the thing 
                        that lets jump to diffferent sections
                    </p>
                </div>
                <div className='mainTextFormatBox'>
                    <h3 className='header'>Next element</h3>
                    <p className='text'>Blah blah blah these are a bunch of items being listed</p>
                </div>
            </div>

            <hr />
            <div className='mainTextFormat' id='section3'>
                <div className='mainTextFormatBox'>
                    <h3 className='header'>Title of body</h3>
                    <p className='text'>for things to do next:
                        need to figure out how to format
                        individual sections,
                        need to find a color scheme 
                        and font style, 
                        small things such as button lightup
                        and smooth scrolling or the thing 
                        that lets jump to diffferent sections
                    </p>
                </div>
                <div className='mainTextFormatBox'>
                    <h3 className='header'>Next element</h3>
                    <p className='text'>Blah blah blah these are a bunch of items being listed</p>
                </div>
            </div>

        </div>
    )
}

export default Ldamallet