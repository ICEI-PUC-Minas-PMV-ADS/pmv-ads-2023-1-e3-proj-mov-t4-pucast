import React, { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  View,
} from "react-native";

import { Card } from "../components/card";
import Context, { IPodcastProps } from '../../context';

function Favoritos() {

  const { podcasts } = useContext(Context);

  const [ favoritesPodcasts, setFavoritesPodcasts ] = useState<Array<IPodcastProps>>([]);

  useEffect(() => {
      
      const filterPodcastsFavoritos = podcasts.filter(podcast => {
        if (podcast.isFavorite) return podcast
      });

      setFavoritesPodcasts(filterPodcastsFavoritos)
  }, [podcasts]);

  return (
    <ScrollView style={{ backgroundColor: '#ffff' }} >
      <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'row', gap: 50, flexWrap: 'wrap', justifyContent: "center" }}>
        {
          favoritesPodcasts.length !== 0 ? favoritesPodcasts.map((podcast, index) => (
            <Card
              key={index}
              podcast={{
                description: podcast.description,
                title: podcast.title,
                url: podcast.url,
                id: podcast.id,
                isFavorite: podcast.isFavorite
              }}
              img={{
                url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
              }}
            />
          )) : (
            <View style={{ flexDirection: 'column', width: 'auto', height: 600, justifyContent: 'center' }} ><Text style={{ fontSize: 18, padding: 20, textAlign: 'center', color: 'black' }} >Você não tem nenhum podcast favoritado no momento!</Text></View>
          )
        }
      </View>
    </ScrollView>
  );
}
export default Favoritos;
