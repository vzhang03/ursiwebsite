import { Link } from 'react-scroll';

function Ldamallet(){
    return (
        <div>
            <div className='mainTitleFormat'>
                <h1 className='header mainTitleFormatTitle'>LDA Mallet</h1>
                <div className='mainTitleFormatBox'>
                    <ul>
                        <li className='header'>
                            <Link to='section1' className='scroll-link' smooth={true} duration={500} offset={-80}>
                                Introduction
                            </Link>
                        </li>
                        <li className='header'>
                            <Link to='section2' className='scroll-link' smooth={true} duration={500} offset={-80}>
                                Results
                            </Link>
                        </li>
                        <li className='header'>
                            <Link to='section3' className='scroll-link' smooth={true} duration={500} offset={-80}> 
                                Visualizations
                            </Link>
                        </li>
                    </ul>
                    <p className='text'>Hello what does this do, what should we put here</p>
                </div>
            </div>
            
            <div className='mainTextFormatTitle' id='section1'>
                <hr />
                <h1 className='header'>introduction</h1>
            </div>
            <div className='mainTextFormat'>
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


            <div className='mainTextFormatTitle' id='section2'>
                <hr />
                <h1 className='header'>results</h1>
            </div>
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

            <div className='mainTextFormatTitle' id='section3'>
                <hr />
                <h1 className='header'>Visualizations</h1>
            </div>
            <div className='mainTextFormat'>
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