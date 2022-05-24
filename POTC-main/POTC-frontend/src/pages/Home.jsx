import React from 'react';
import Container from '../components/Container';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import Collapsible from 'react-collapsible';

export default function Home() {
  return (
    <div id='home' className='homepage'>
      <Container
        image='./Morgan.gif'
        title="We're setting sail!"
        text="Ahoy Sailor! We're Parrots Of The
          Caribbean NFT! We are a community of 555 Parrots on a quest to
          assemble the most tightly knit crew in the NFT space for a grand
          quest. If you're ready for the adventure, let's sail!"
        left='true'
      ></Container>
      <Container
        image='./Lady.gif'
        title='the art'
        text='we have over 100 traits. each body trait is based on the colors of the flag of a caribbean country, and we have 10 legendaries - each of which is based on a prominent, cultural/histrical figure from the caribbean.'
        left='true'
      ></Container>
      <Container
        image='./theme.gif'
        title='the theme'
        text='The Caribbean is a region known for its sunshine, warmth, family and good vibes. As residents of the Caribbean ourselves, we wanted to create our own island in the NFT space which would be like a slice of the Caribbean. Thus, Parrots Of The Caribbean was born. We have a motto: "One Crew On One Mission", and that mission is to make waves in the NFT space.'
        left='true'
      ></Container>
      <Container
        image='./gif.gif'
        title='the mission'
        text='We will be playing our part in paving the way for the next generation of Web 3 talent in the Caribbean through scholarships and local blockchain bootcamps. Web 3 is moving at lightning pace and we want to ensure the Caribbean is not left behind in this wave. We are also creating a space in the world of NFTs where people can experience the warmth of Caribbean culture. Set sail with us as we take you on an adventure to the tropics of NFTs.'
        left='true'
      ></Container>

      <Roadmap></Roadmap>
      <Team></Team>
      <h1 className='faq-header' id='faq'>
        FAQ
      </h1>
      <div className='faq-container'>
        <Collapsible trigger='What will the supply be?'>
          <p>555.</p>
        </Collapsible>
        <Collapsible trigger='What will the mint price be?'>
          <p>0.1 ETH</p>
        </Collapsible>
        <Collapsible trigger='When is mint?'>
          <p>jamlist - may 27th</p>
          <p>allowlist + public - may 28th</p>
        </Collapsible>
        <Collapsible trigger='When is reveal?'>
          <p>24 hours after mint</p>
        </Collapsible>
        <Collapsible trigger='What is $PAPAYA'>
          <p>Our token used in our martketplace earnt by holding a POTC NFT</p>
        </Collapsible>
        <Collapsible trigger='        What will Gen 2 be?'>
          <p>
            Gen 2 will be a product of the collective minds of the POTC Team and
            all 555 NFT holders. We will allow the holders to have a large say
            in the direction of Gen 2
          </p>
        </Collapsible>
      </div>
    </div>
  );
}
