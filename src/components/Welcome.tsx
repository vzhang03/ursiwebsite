import BookCover from '../assets/book_covers.png'
import BookDatesHist from '../assets/twoyearhisttemp.png'
import ImageCaption from './ImageCaption'
import TextBox from './TextBox'
// import { Link } from 'react-router-dom';

function Abstract() {
    return (
        <div>
            <div className='mainTitleFormat'>
                <h1 className='header'>Our Project</h1>
            </div>
            
            <div className='mainTextFormat'>
                <TextBox 
                    title="About us"
                    content="Welcome and thank you for visiting our site! Here you will find interactive visualizations and details not included on our poster. This website is not to be used as a technical report of our findings but as a visual accompaniment to our poster and findings."
                    additionalClassName='mainTextFormatBox'
                />
                <TextBox 
                    title="How to use this site"
                    content="You can navigate from page to page using the menu bar in the top left corner. The contents of this website are meant to be chronologically."
                    additionalClassName='mainTextFormatBox'
                />
            </div>

            <div className='mainTextFormatTitle' id='section1'>
                <hr />
                <h1 className='header'>Background</h1>
            </div>
            <div className='mainTextFormat'>
                <TextBox 
                    title="What is Topic Modeling?"
                    content="Topic modeling is a type of statistical modeling using unsupervised machine learning to identify topics and group together related words within the text. The value of topic modeling lies in its ability to identify unseen patterns in word usage and is used for utility rather than accuracy."
                    additionalClassName='mainTextFormatBox'
                />
                <TextBox 
                    title="What texts did we look at?"
                    content="In order to use topic modeling to study thematic trends in a large corpus of literature from the 1800s-2000s, we chose the Project Gutenberg corpus for its size, public domain access, and the availability of metadata to filter the books we wanted."
                    additionalClassName='mainTextFormatBox'
                />
            </div>

            <ImageCaption
                imageUrl={BookCover}
                captionText='Middle March by George Elliot and Call of the Wild are two examples of the many thousands of fiction books avaible on Project Gutenberg which we ran the models on.'
                additionalClassName='graphcaption'
            />

            <ImageCaption
                imageUrl={BookDatesHist}
                captionText='This histogram plots the publishing dates of the selected texts
                against the total texts contained in the Project Gutenberg corpus. The dotted lines demarcate 
                the 1830-1960 time range of fictional novels we choose for our text corpus. The selection criteria was 
                based on a combination of factors which we discuss in the BERTopic section..'
                additionalClassName='figurecaption'
                // <Link to="/bertopic#section2">Go to Other Page</Link>
            />

            <TextBox 
                title='Abstract'
                content={
                    <>
                        <p>Topic modeling is a type of statistical modeling that uses unsupervised machine learning to pull groups of similar words (topics) from a body of text. During this project, we aimed to explore the application of topic modeling to model thematic variation in a large corpus of literature. While we compared multiple types of topic modeling, the two that stood out were Latent Dirichlet Allocation (LDA) and BERTopic. We chose LDA for its status as the preferred topic modeling method of the last two decades and its bag-of-words model, which contrasts with the newer BERTopic's use of word sequence and semantic meaning through word embeddings. Previous research has been done with BERTopic on tweets and smaller texts, but we wanted to examine the performance on larger works, specifically entire books.</p>
                        <p>We built an LDA model using methods from pre-existing research, while down-weighting texts from the same author to increase topic coherency. This model served as a baseline to compare BERTopic against. Since less research has been conducted using BERTopic on larger texts, we used a variety of parameters, filtering, and model types to increase topic quality. We narrowed our corpus to only fiction and developed a text-chunking process in order to improve topic coherence. Finally we used date approximation to visualize and contextualize our findings temporally.</p>
                        <p>While LDA and similar bag-of-word models perform well on literature, BERTopic is currently less applicable for corpora involving a large range of styles and implicit themes. Our research provides a framework for processing larger texts to pass into BERTopic and advice on optimizing parameters. For future research with BERTopic on novels, the ability to adjust the correlation between topics and metadata, such as authors like in our LDA model, may improve overall topic coherence and usefulness of models.</p>
                    </>
                }
                additionalClassName='singleParagraph'
            />
        </div>
    )
}

export default Abstract