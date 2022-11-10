import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog'>
            <h1>1. Difference between SQL and NoSQL Database ?</h1>
            <p><span>Ans:</span>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>

            <h1>2: What is JWT, and how does it work?</h1>
            <p><span>Ans:</span>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>

            <h1>3: What is the difference between javascript and NodeJS?</h1>
            <p><span>Ans:</span>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            <h1>4: How does NodeJS handle multiple requests at the same time?</h1>
            <p><span>Ans:</span>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
        </div>
    );
};

export default Blog;