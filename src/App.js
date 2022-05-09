import React from 'react';
import './App.css';

import Button from "./assets/components/Button";
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';
import Product from "./assets/components/Product";
import Tile from "./assets/components/Tile";

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button title="To the collection" disabled={false}/>
          <Button title="Shop all bags" disabled={false}/>
          <Button title="Pre-orders" disabled={true}/>
        </nav>
        <main>
          <Product
              label="Best Seller"
              image={bag_1}
              bagName="The handy bag"
              price="€400,-"
          />
          <Product
              label="Best Seller"
              image={bag_2}
              bagName="The stylisch bag"
              price="€250,-"
          />
          <Product
              label="New collection"
              image={bag_3}
              bagName="The simple bag"
              price="€300,-"
          />
          <Product
              label="New collection"
              image={bag_4}
              bagName="The trendy bag"
              price="€150,-"
          />
        </main>
        <footer>
          <Tile
              tileTitle="The Brand"
              tileText1="Lorem ipsum dolor sit amet, consectetur adipisicing elit.  qui ratione rem repudiandae sed sunt, tempore! Ad?"
              tileText2="A accusamus aut cum distinctio doloremque eius hic illum, ipsum minus necessitatibus neque pariaturA accusamus aut cum distinctio doloremque eius hic illum, ipsum minus necessitatibus neque pariatur"
          />
          <Tile
              image={brand}
          />
          <Tile
              image={our_story}
          />
          <Tile
              tileTitle="Our Story"
              tileText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aut cum distinctio doloremque eius hic illum, ipsum minus necessitatibus neque pariatur qui ratione rem repudiandae sed sunt, tempore! Ad?"
          />
        </footer>
      </>
  );
}

export default App;



