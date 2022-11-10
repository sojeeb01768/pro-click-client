import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='m-20'>
            <h1 className='text-5xl font-semibold text-blue-600 text-center my-10'>Blog</h1>
            <div className='my-10'>
                <h4 className='text-2xl font-semibold'>Q: Difference between SQL and NoSQL?</h4>
                <p>There are five practical differences between SQL and NoSQL: <br />

                    1. Language <br />
                    2. Scalability <br />
                    3. Structure <br />
                    4. Properties <br />
                    5. Support and communities <br />

                    Remember that SQL dialects share many properties though they interface with distinct databases. Flavors of NoSQL vary far more across their attendant systems, so comparison can be more useful between multiple non-relational technologies vs. SQL generally.

                    Perhaps the most recognizable SQL dialect is MySQL, an open source and free RDBMS (though available through proprietary licenses as well). Its use is widespread in web applications, and it is known for compatibility, support, and good performance in the average case. MySQL has also made concessions to NoSQL practitioners with features like a JSON data type, the “Document Store,” and support for sharding (horizontal scaling).

                    On the non-relational side, MongoDB is primarily a document store containing JSON-like structures and a JavaScript interface. It’s known for being user-friendly (less administration overhead), performant for simple queries, and flexible thanks to its NoSQL underpinnings. Great for hierarchical data storage, it also supports familiar relational concepts from indexing, to aggregation, to some measure of ACID compliance. Like MySQL, it is compatible with many platforms and programming environments, despite relative recency.
                </p>
            </div>
            <div className='my-10'>
                <h4 className='text-2xl font-semibold'>Q: What is JWT, and how does it work?</h4>

                <p>
                    What is JWT: <br />
                    JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                    It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved. <br />

                    How it works: <br />
                    Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                </p>

            </div>
            <div className='my-10'>
                <h4 className='text-2xl font-semibold'>Q: What is the difference between javascript and NodeJS?
                </h4>

                <p>
                    JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful
                </p>

            </div>
            <div className='my-10'>
                <h4 className='text-2xl font-semibold'>Q: How does NodeJS handle multiple requests at the same time?

                </h4>

                <p>
                    I know node.js is a single threaded, asynchronous, non blocking i/o. I've read a lot about that. e.g PHP uses one thread per request but node uses only one thread for all, like that. <br /> <br />

                    Suppose there are three requests a, b, c arriving at same time at node.js server. Three of these requests require large blocking operation e.g they all want to read same big file. <br /> <br />

                    Then how are the requests queued, in what sequence will the blocking operation be carried out and in what sequences are the responses dispatched? Of course using how many threads?
                </p>

            </div>

        </div>
    );
};

export default Blog;