// import TopicChart from '../assets/25_topics.png';
// import TopicHierarchy from '../assets/25_topic_hierarchy.png';
import BertopicChart from '../assets/bertopic_explanation.png'
import { Link } from 'react-scroll';
import ImageCaption from './ImageCaption';
import FinalTopics from '../assets/bertopics.png'
import TextBox from './TextBox';
import EarlyBert from '../assets/earlybertopics.png'
import BERTOT from '../assets/bertopictot.png'

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
                                Inital Tests
                            </Link>
                        </li>
                        <li className='header'>
                            <Link to='section3' className='scroll-link' smooth={true} duration={500} offset={-70}> 
                                Improving Filtering
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
                <TextBox 
                    title="What is BERTopic?"
                    content="Topic modeling is a type of statistical modeling using unsupervised machine learning to identify topics and group together related words within the text. The value of topic modeling lies in its ability to identify unseen patterns in word usage and is used for utility rather than accuracy."
                    additionalClassName='mainTextFormatBox'
                />
                <TextBox 
                    title="How does BERTopic work?"
                    content="To do this, BERTopic converts each document in the corpus as a vector representation.
                    Using this representation, BERTopic then uses clustering algorithms such as HBDSCAN to group similar documents together.
                    Using these clusters, BERTopic assigns a topic to each cluster using the most frequent words in each topic."
                    additionalClassName='mainTextFormatBox'
                />
            </div>

            <ImageCaption
                imageUrl={BertopicChart}
                captionText='In the image on the left, we can see how the embedding, clustering and naming steps.'
                additionalClassName='graphcaption'
            />

            <div className='mainTextFormatTitle' id='section2'>
                <hr />
                <h1 className='header'>Intial Tests</h1>
            </div>
            <div className='mainTextFormat'>
                <TextBox 
                    title="Memory issues"
                    content="Using the Project Gutenberg corpus of just over 55 thousand books and its corresponding metadata, we developed a filtering process to iterate through the books. We began by removing basic boilerplate, afterword, foreword, table of contents and anything unrelated to the text itself. Knowing that BERTopic assigns each “document” that you pass in one topic, in order to represent each document as multiple topics we arbitrarily decided to split each book up into 50 paragraph chunks. These chunks were then passed into the BERTopic as the “documents” and we quickly ran into issues with memory. During our initial tests, the model ran with little issues until the clustering step when it would spike to using over 90 gb of RAM."
                    additionalClassName='mainTextFormatBox'
                />
                <TextBox 
                    title="Online Topic Modeling"
                    content="To get around this, we used BERTopic’s Online Topic Modeling model, which incrementally passed documents into the model. This reduced the memory load and allowed us to run models on various machines. However, the topics being found were primarily names or stopwords, giving us little information about the whereabouts of the corpus. Due to a combination of the lack of filtering as well as the inability to find the correct parameters or models to pass into Online BERTopic, we were unable to produce any worthwhile results."
                    additionalClassName='mainTextFormatBox'
                />
            </div>

            <ImageCaption
                imageUrl={EarlyBert}
                captionText='An example of our first few tries with OnlineTopicModeling, note the topics being dominated primarily by names.'
                additionalClassName='figurecaption'
            />
            
            <div className='mainTextFormatTitle' id='section3'>
                <h1 className='header'>Improving Filtering</h1>
            </div>
            <div className='mainTextFormat'>
                <TextBox 
                    title="Focusing on Fiction"
                    content="Comparing the initial BERTopic models to the Online BERTopic models, we found that the BERTopic models were significantly clearer containing far less stopwords and names. Wanting to return to the BERTopic model, we began filtering the corpus more heavily. Using the metadata provided by Project Gutenberg, we filtered out the corpus to include only books that qualified as novels or fiction using the subject tags: “fiction,” “stories,” “romance,” “satire.” At the same time we specifically removed books with the subjects: “short story,” “short stories,” “drama,” “poetry” or “history”. If a book had no tags that matched either the accepted or the rejected list, we disregarded those for lack of data. The rejected genres were included to filter out books that may have included an accepted subject tag but weren’t a novel."
                    additionalClassName='mainTextFormatBox'
                />
                <TextBox 
                    title="Adjusting the Chunking Process"
                    content="This helped both narrow our focus and greatly reduce the number of texts. Now working with a corpus of about 18 thousand novels, we began to experiment with the parameters we were chunking the text into. Using the arbitrary fifty paragraph method, we found that the range of words in each chunk had a median of three thousand and ranged from one hundred to twenty-five thousand. Combining the paragraph chunking with a word count, we chunked paragraphs together until they exceeded a word count. For paragraphs over a certain word count, we would split those into sentences and combine them into chunks until they too exceeded the word count. For the word counts, we set them accordingly in order to aim for a 500 word and 1000 word mark. We choose to strongly reduce the word count and to create smaller chunks based on our results on a smaller sample. Due to hierarchical topic reduction performed by BERTopic, decreasing the size of the document chunks helps improve representation of books having varied interpretations, greatly increasing topic coherency. "
                    additionalClassName='mainTextFormatBox'
                />
            </div>

            <ImageCaption
                imageUrl={FinalTopics}
                captionText='All the topics found in our final model, note the absence of names allowed due to the use of a more extensive stopwords list.'
                additionalClassName='figurecaption'
            />

            <div className='mainTextFormatTitle' id='section4'>
                <hr />
                <h1 className='header'>Visualizations</h1>
            </div>
            <div className='mainTextFormat'>
                <TextBox 
                    title="Creating Space and Time Visualizations"
                    content="Accompanying the BERTopic model, we wanted to create additional representations involving space and time. These representations would contextualize the topics and books within history, allowing us better understand how the topics were being formed and from which individual books. The biggest issue when creating these representations was lack of data. In order to attribute books to specific places or time periods, we needed a combination of book data and author data. While the author data from Project Gutenberg was relatively complete, the amount of books with an easily accessible publishing date was low. By scraping through the text using keywords such as “copyright”, “published”, dates and places we were able to attain roughly half. Instead of disregarding books without a date, we choose to use the approximate year, assuming each book was published in the middle of each author’s lifespan. Despite being far from accurate, approximating years was necessary to fill in the gaps."
                    additionalClassName='mainTextFormatBox'
                />
                <TextBox 
                    title="Adjusting the Chunking Process"
                    content="When visualizing topics over time, we began by using the built-in BERTopic Topics Over Time visualization. This visualization graphed topics by frequency annually and was unsatisfactory for a couple reasons. The amount of texts available to us varied year-by-year, sharply increasing until its peak in 1895-1925 and then sharply decreasing. Separating the text frequency from topic frequency was impossible and even after selecting certain topics it becomes unclear. In order to get around this issue, we created two visualizations. We used these approximated publish dates to graph topic frequency across time. Additionally, we graphed the corpus using author’s locations to visualize where the books in the corpus were written."
                    additionalClassName='mainTextFormatBox'
                />
            </div>

            <ImageCaption
                imageUrl={BERTOT}
                captionText='One example of a TOT graph we created, this allowed us to see variation in topics over time.'
                additionalClassName='figurecaption'
            />
        </div>
    );
};

export default Bertopic