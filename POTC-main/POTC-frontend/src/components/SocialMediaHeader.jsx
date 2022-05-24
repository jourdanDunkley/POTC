import React from 'react';

export default function SMediaHeader(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 850;

  React.useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);
  return width < breakpoint ? (
    <></>
  ) : (
    <div className='social-media-header'>
      <a href='https://twitter.com/parrotscaribnft'>
        <img src='/Twitter.svg' alt='' />
      </a>
      <a href='https://discord.gg/parrotsofthecaribbean'>
        <img src='/Discord.svg' alt='' />
      </a>
      <a href=''>
        <img src='/Opensea.svg' alt='' />
      </a>
    </div>
  );
}
