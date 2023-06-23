import React, { useContext } from "react";
import {
  ScrollView,
  View,
} from "react-native";

import { Card } from "../components/card";
import Context from '../../context';

function Feed() {

  const { podcasts } = useContext(Context);

  return (
    <ScrollView style={{ backgroundColor: '#ffff' }}  >
      <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'row', gap: 50, flexWrap: 'wrap', justifyContent: "center" }}>
        {
          podcasts.map((podcast, index) => (
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
          ))
        }
      </View>
    </ScrollView>
  );
}
export default Feed;
