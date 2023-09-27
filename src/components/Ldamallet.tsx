import { Link } from 'react-scroll';
import LDATime from '../assets/lda_time.png';
import TextBox from './TextBox'
import ImageCaption from './ImageCaption';

function Ldamallet(){
    return (
        <div>
            <div className='mainTitleFormat'>
                <h1 className='header mainTitleFormatTitle'>LDA Mallet</h1>
                <div className='mainTitleFormatBox'>
                    <ul>
                        <li className='header'>
                            <Link to='section1' className='scroll-link' smooth={true} duration={500} offset={-70}>
                                Introduction
                            </Link>
                        </li>
                        <li className='header'>
                            <Link to='section2' className='scroll-link' smooth={true} duration={500} offset={-70}>
                                Results
                            </Link>
                        </li>
                    </ul>
                    <p className='text'>The traditional model</p>
                </div>
            </div>
            
            <div className='mainTextFormatTitle' id='section1'>
                <hr />
                <h1 className='header'>Introduction</h1>
            </div>

            <div className='mainTextFormat'>
                <TextBox 
                    title="Removing Boilerplate"
                    content="Using the Project Gutenberg corpus of just over fifty-five thousand books and its corresponding metadata, we developed a filtering process to iterate through the books. We began by removing basic boilerplate including: forewords, afterwords, tables of contents and  unrelated text. We used this as a starting point for running LDA and BERTopic."
                    additionalClassName='mainTextFormatBox'
                />
                <TextBox 
                    title="Filtering the Text"
                    content="Using the filtered text, we performed more filtering: tokenizing the text, removing stop words and lowercasing every word. We avoided lemmatization or selecting parts of speech to limit pre-processing while keeping the texts we ran to be as similar to BERTopic."
                    additionalClassName='mainTextFormatBox'
                />
            </div>

            <div className='mainTextFormatTitle' id='section2'>
                <hr />
                <h1 className='header'>Results</h1>
            </div>
            <ImageCaption
                imageUrl={LDATime}
                captionText='A visualization of the topics over time found by the LDA Mallet model.'
                additionalClassName='figurecaption'
            />

        </div>
    )
}

export default Ldamallet