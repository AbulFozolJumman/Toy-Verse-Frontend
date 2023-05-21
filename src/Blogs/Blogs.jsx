import useTitle from "../Hooks/useTitle";
// Blogs QnA Section
const Blogs = () => {
    useTitle("Blog");

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl text-center font-bold mb-4">Blogs</h1>

            <div className="mb-6">
                <div className="rounded-lg p-6 shadow-md bg-gray-100">
                    <h3 className="text-lg font-semibold mb-2">Q1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <p className="text-gray-600"><span className="font-semibold">Access Token:</span> An access token is a credential that is used to access protected resources or perform certain actions on behalf of an authenticated user.The access token is included in each request to the servers protected resources to prove the users identity and permissions. It contains information such as the users identity and the granted permissions or scopes. <br /><br /> 
                    <span className="font-semibold">Refresh Token:</span> A refresh token is a long-lived credential that is used to obtain a new access token when the current one expires. Unlike access tokens, refresh tokens are not meant to be included with each request to access protected resources. Instead, they are securely stored on the client-side, typically within a secure session or a token vault. When the access token expires, the client can use the refresh token to request a new access token from the authentication server without requiring the user to reauthenticate.</p>
                </div>
            </div>

            <div className="mb-6">
                <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Q2. Compare SQL and NoSQL databases?</h3>
                    <p className="text-gray-600"><span className="font-semibold">SQL:</span><br />
                        1. SQL databases follow a structured data model with predefined schemas. They use tables to organize and store data, where each table has a fixed set of columns and rows. Relationships between tables are established using foreign keys.<br />
                        2. SQL databases traditionally scale vertically by adding more resources to a single server. This approach has limitations in terms of scalability and handling large amounts of data and traffic. <br /><br />
                        <span className="font-semibold">NoSQL:</span><br />
                        1. NoSQL databases offer a flexible and dynamic data model. They are schema-less and can store unstructured, semi-structured, or structured data. NoSQL databases use various data models, such as key-value, document, columnar, or graph, to store and retrieve data.<br />
                        2. NoSQL databases are designed for horizontal scalability. They can distribute data across multiple servers and handle high volumes of data and traffic by adding more nodes to the database cluster.</p>
                </div>
            </div>

            <div className="mb-6">
                <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Q3. What is Express JS? What is Nest JS?</h3>
                    <p className="text-gray-600"><span className="font-semibold">Express JS:</span> Express.js is a popular web application framework for Node.js. It provides a minimalistic and flexible approach to building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware management, and rendering responses. <br /><br />
                        <span className="font-semibold">Nest JS:</span> NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It leverages TypeScript as its primary language, which adds static typing and enhanced tooling capabilities to JavaScript. NestJS follows the modular architecture pattern and is heavily inspired by Angular, a popular front-end framework. It provides a powerful set of features such as dependency injection, declarative routing, middleware, authentication, database integration, and more. NestJS aims to improve developer productivity and maintainability while enabling the creation of robust and scalable back-end applications.</p>
                </div>
            </div>

            <div className="mb-6">
                <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Q4. What is MongoDB aggregate and how does it work?</h3>
                    <p className="text-gray-600"><span className="font-semibold">MongoDB aggregate:</span> In MongoDB, the aggregate method is used to perform advanced data aggregation operations on collections. It allows you to process and transform documents within a collection to retrieve aggregated results based on specified criteria. <br /><br />
                        <span className="font-semibold">Works:</span><br />
                        1. Match Stage: This optional stage filters the documents in the collection based on specified criteria using the $match operator. Only the documents that match the criteria are passed to the next stage.<br />
                        2. Project Stage: The $project stage allows you to shape the output documents by specifying which fields to include or exclude. It also supports computed fields and transformations using various operators.<br />
                        3. Group Stage: The $group stage groups documents together based on a specified key and performs aggregation operations on the grouped data. Aggregation operators like $sum, $avg, $min, $max, and others can be used to calculate aggregate values within each group.</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;