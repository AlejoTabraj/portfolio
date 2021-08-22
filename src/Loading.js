import React, { useEffect, useState } from 'react';

export default function Loading({ setShowContent }) {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    console.log('Hello');
    const count = setInterval(() => {
      loading < 100
        ? setLoading(loading + 1)
        : (setLoading(100), setShowContent(true));
    }, 10);

    return () => clearInterval(count);
  }, [loading]);

  return <div className="loader">{loading}</div>;
}
