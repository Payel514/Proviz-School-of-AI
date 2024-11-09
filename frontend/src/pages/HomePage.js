import React from 'react';
import { Helmet } from 'react-helmet-async';
import ApplicationForm from '../components/ApplicationForm';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Proviz School of AI - Learn AI with Experts</title>
        <meta name="description" content="Join Proviz School of AI and shape the future of Artificial Intelligence." />
        <meta name="keywords" content="AI education, artificial intelligence, machine learning, Proviz School of AI" />
        <meta property="og:title" content="Proviz School of AI" />
        <meta property="og:description" content="Learn AI from experts at Proviz School of AI." />
      </Helmet>

      <header>
        <h1>Proviz School of AI</h1>
        <p>Shaping the future of AI education</p>
      </header>

      <ApplicationForm />
    </div>
  );
};

export default HomePage;
