import { useState } from 'react';
import { fakeVerifyText } from '../lib/mira';
import '../styles/globals.css';

export default function Home() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [verified, setVerified] = useState(false);
  const [evidence, setEvidence] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fakeVerifyText(comment);
    setVerified(result.verified);
    setEvidence(result.evidence);
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Mira Truth Check</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter a comment to verify"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="result">
          <p><strong>{name}</strong>: {comment}</p>
          {verified ? (
            <>
              <p className="verified">✅ Verified by Mira</p>
              <p><em>{evidence}</em></p>
            </>
          ) : (
            <p className="unverified">❌ Could not verify this comment</p>
          )}
        </div>
      )}
    </main>
  );
}
