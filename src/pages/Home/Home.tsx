import React from 'react';

const Home = () => {
  const x = 1;

  console.error(x);

  return (
    <>
      <div>
        <input type="search" placeholder="Search books" />
      </div>
      <div>
        <h1>Hi, Mehmed Al Fatih 👋</h1>
      </div>
      <main>
        <div>
          <img src="" alt="book cover" />
          <div>
            <span>book name</span>
            <span>book title</span>
          </div>
        </div>
        <div>
          <img src="" alt="book cover" />
          <div>
            <span>book name</span>
            <span>book title</span>
          </div>
        </div>
        <div>
          <img src="" alt="book cover" />
          <div>
            <span>book name</span>
            <span>book title</span>
          </div>
        </div>
        <div>
          <img src="" alt="book cover" />
          <div>
            <span>book name</span>
            <span>book title</span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
