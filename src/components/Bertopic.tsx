import TopicChart from '../assets/25_topics.png';
import TopicHierarchy from '../assets/25_topic_hierarchy.png';
import BertopicChart from '../assets/bertopic_explanation.png'
import { Link } from 'react-scroll';
import ImageCaption from './ImageCaption'
import BookCover from '../assets/book_covers.png'

function Bertopic(){
    return (
        <div>
            <div className='mainTitleFormat'>
                <h1 className='header'>BERTopic</h1>
                <div className='mainTitleFormatBox'>
                    <ul>
                        <li className='header'>
                            <Link to='section1' className='scroll-link' smooth={true} duration={500} offset={-70}>
                                Introduction
                            </Link>
                        </li>
                        <li className='header'>
                            <Link to='section2' className='scroll-link' smooth={true} duration={500} offset={-70}>
                                Methodology
                            </Link>
                        </li>
                        <li className='header'>
                            <Link to='section3' className='scroll-link' smooth={true} duration={500} offset={-70}> 
                                Results
                            </Link>
                        </li>
                        <li className='header'>
                            <Link to='section4' className='scroll-link' smooth={true} duration={500} offset={-70}> 
                                Visualizations
                            </Link>
                        </li>
                    </ul>
                    <p className='text'>With special thanks to Dr. Marten Grootendorst for his work maintaining BERTopic.</p>
                </div>  
            </div>

            <div className='mainTextFormatTitle' id='section1'>
                <hr />
                <h1 className='header'>Introduction</h1>
            </div>
            <div className='mainTextFormat'>
                <div className='mainTextFormatBox' >
                    <h3 className='header'>What is BERTopic?</h3>
                    <p className='text'>Topic modeling is a type of statistical modeling using unsupervised machine learning to identify topics and group together related words within the text. The value of topic modeling lies in its ability to identify unseen patterns in word usage and is used for utility rather than accuracy.</p>
                </div>
                <div className='mainTextFormatBox'>
                    <h3 className='header'>How does BERTopic work?</h3>
                    <p className='text'>Blah blah blah these are a bunch of items being listed</p>
                </div>
            </div>

            <ImageCaption
                imageUrl={BertopicChart}
                captionText='In the image on the left, we can see how the two are being usedIn the image on the left, we can see howIn the image on the left, we can see how.'
                additionalClassName='graphcaption'
            />

            {/* <div className='graphcaption'>
                <div className='graphcaptionLeft'>
                    <img src ={BertopicChart} id='topicHierarchy' className='graphs'></img>
                </div>
                <div className='graphcaptionRight'>
                    <p className='text'>In the image on the left, we can see how </p>
                </div>
            </div> */}

            <div className='mainTextFormatTitle' id='section2'>
                <hr />
                <h1 className='header'>Methodology</h1>
            </div>
            <div className='mainTextFormat'>
                <div className='mainTextFormatBox'>
                    <h3 className='header'>Tuning and getting the Topic Model to work</h3>
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
            <div className='graphcaption'> {/* Might want to add a title for graph */}
                <div className='graphcaptionLeft'>
                    <img src={TopicChart} id='topicChart' className='graphs'></img>
                </div>
                <div className='graphcaptionRight'>
                    <p className='text'>this graph is a list of the different topics that were found by BERTopic</p>
                </div>
            </div>
            <div className='graphcaption'> {/* Might want to add a title for graph */}
                <div className='graphcaptionLeft'>
                    <img src={TopicChart} id='topicChart' className='graphs'></img>
                </div>
                <div className='graphcaptionRight'>
                    <p className='text'>this graph is a list of the different topics that were found by BERTopic</p>
                </div>
            </div>
            
            <div className='mainTextFormatTitle' id='section3'>
                <h1 className='header'>Results</h1>
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
            <div className='figurecaption'>
                <div className='figurecaptionTop'>
                    <img src ={TopicHierarchy} id='topicHierarchy' className='graphs'></img>
                </div>
                <div className='figurecaptionBot'>
                    <p className='text'>this is the caption for the second image</p>
                </div>
            </div>

            <div className='mainTextFormatTitle' id='section4'>
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
    );
};

export default Bertopic