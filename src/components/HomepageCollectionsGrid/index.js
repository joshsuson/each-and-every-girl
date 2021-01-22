import React from 'react';
import { CollectionTile } from '../CollectionTile';
import { CollectionsGrid } from './styles';

export const HomePageCollectionsGrid = ({ collections }) => {
  return (
    <CollectionsGrid>
      {collections.map(collection => (
        <CollectionTile
          destination={`/all-products?c=${encodeURIComponent(
            collection.shopifyId
          )}`}
          title={collection.title}
          description={collection.description}
          backgroundImage={collection.image.localFile.childImageSharp.fluid}
          key={collection.shopifyId}
        />
      ))}
    </CollectionsGrid>
  );
};
