import TopicChart from '../assets/25_topics.png';
import TopicHierarchy from '../assets/25_topic_hierarchy.png';
import { Link } from 'react-scroll';

function Bertopic(){
    return (
        <div>
            <div className='mainTitleFormat'>
                <h1 className='header'>BERTopic</h1>
                <p className='text'>BERTopic is a topic modeling technique that leverages 🤗 transformers and c-TF-IDF to create dense clusters allowing for easily interpretable topics whilst keeping important words in the topic descriptions.</p>
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
                    </li>2
                    <li className='header'>
                        <Link to='section3' className='scroll-link' smooth={true} duration={500} offset={-100}> 
                            Visualizations
                        </Link>
                    </li>
                </ul>
                <hr />  
            </div>

            <div className='mainTextFormat' id='section1'>
                <div className='mainTextFormatBox' >
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
            <div className='graphcaption'> {/* Might want to add a title for graph */}
                <img src={TopicChart} id='topicChart' className='graphs'></img>
                <p className='text'>this graph is a list of the different topics that were found by BERTopic</p>
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


            <hr />
            <div className='graphcaption'>
                <img src ={TopicHierarchy} id='topicHierarchy' className='graphs'></img>
                <p className='text'>this is the caption for the second image</p>
            </div>
            <h3>Topics Over Time</h3>
        </div>
    );
};

export default Bertopic