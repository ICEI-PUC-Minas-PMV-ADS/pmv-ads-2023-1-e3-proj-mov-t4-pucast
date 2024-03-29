import React, { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  View,
} from "react-native";

import { Card } from "../components/card";
import Context, { IPodcastProps } from '../../context';

function Compartilhar() {

  const { podcasts } = useContext(Context);

  const [ favoritesPodcasts, setFavoritesPodcasts ] = useState<Array<IPodcastProps>>([]);

  useEffect(() => {
      
      const filterPodcastsFavoritos = podcasts.filter(podcast => {
        if (podcast.isFavorite) return podcast
      });

      setFavoritesPodcasts(filterPodcastsFavoritos)
  }, [podcasts]);

  return (
    <ScrollView style={{ backgroundColor: '#ffff' }}  >
      <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'row', gap: 50, flexWrap: 'wrap', justifyContent: "center" }}>
        {
          favoritesPodcasts.length !== 0 ? favoritesPodcasts.map((podcast, index) => (
            <Card
              buttons="Compartilhar"
              key={index}
              podcast={{
                description: podcast.description,
                title: podcast.title,
                url: podcast.url,
                id: podcast.id,
                isFavorite: podcast.isFavorite
              }}
              img={{
                url: podcast.imgURL  
              }}
            />
          )) : (
            <View style={{ flexDirection: 'column', width: 'auto', height: 600, justifyContent: 'center' }} ><Text style={{ fontSize: 18, padding: 20, textAlign: 'center', color: 'black' }} >Você não possui podcast favoritados para poder compartilhar no momento!</Text></View>
          )
        }
      </View>
    </ScrollView>
  );
}
export default Compartilhar;
