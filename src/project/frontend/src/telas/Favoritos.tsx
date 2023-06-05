import React, { useState, useEffect } from "react";
import {
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Linking
} from "react-native";

const logoURL = ``;
const logoCompartilhamentoURL = ``;

const logoFavoritarURL = ``;
const logoFavoritadoURL = ``;

interface IPodcast {
  title: string,
  description: string,
  url: string,
  isFavorite: boolean,
  imgURL: string
}

function Favoritos() {
  const [dataPodcasts, setDataPodcasts] = useState<Array<IPodcast>>([]);

  useEffect(() => {
    localStorage.clear();
    if (!!localStorage.getItem("Podcasts"))
      setDataPodcasts(
        JSON.parse(localStorage.getItem("Podcasts") as string).filter((podcast: IPodcast) => {
          return !!podcast.isFavorite;
        })
      );
  }, []);

  const favoritePodcast = ({ title }: { title: string }) => {
    const newDataPodcasts = dataPodcasts.filter((podcast) => {
      if (podcast.title === title) {
        podcast.isFavorite = !podcast.isFavorite;
      }
      return !!podcast.isFavorite;
    });

    localStorage.clear();
    setDataPodcasts(newDataPodcasts);
    localStorage.setItem("Podcasts", JSON.stringify(newDataPodcasts));
  };

  const shareWhatsApp = ({ event, url, title }: { event: any, url: string, title: string }) => {
    event.preventDefault();

    Linking.openURL(
      `https://web.whatsapp.com/send/?text=Oie, tudo bem? %0A%0A Você já ouviu o podcast *${title}*? Ele anda em alta no Youtube e eu Recomendo Muito!! %0A Caso tenha interesse acesse esse link: _*${url}*_`
    );
  };

  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Image
        //@ts-ignore
          style={styles.logo}
          accessibilityLabel="React logo"
          source={{ uri: logoURL }}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={styles.title}>Em Alta</Text>
        <View style={styles.containerPodcasts}>
          {!dataPodcasts.length ? (
            <Text style={styles.TextoErro}>
              Não foi possível encontrar nenhum podcast salvo na sua lista de
              <br /> <strong>Podcasts Favoritos</strong>.
            </Text>
          ) : (
            dataPodcasts.map(
              ({ title, description, url, imgURL, isFavorite }) => (
                <ImageBackground
                  key={`${title}.${description}.${url}`}
                  style={styles.cardPodcast}
                  //@ts-ignore
                  source={imgURL}
                  resizeMode="contain"
                >
                  <View
                  //@ts-ignore
                    style={{
                      marginBottom: "20px",
                      flexDirection: "row",
                      gap: "10px",
                      alignSelf: "flex-end"
                    }}
                  >
                    <TouchableOpacity
                      onPress={(e) => {
                        shareWhatsApp({ event: e, url, title });
                      }}
                      style={styles.favoritePodcastButton}
                    >
                      <Image
                        accessibilityLabel="Logo de Compartilhamento do Podcast"
                        source={{ uri: logoCompartilhamentoURL }}
                        resizeMode="contain"
                        style={{
                          width: "50px",
                          height: "50px"
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={(e) => {
                        favoritePodcast({ title });
                      }}
                      style={styles.favoritePodcastButton}
                    >
                      <Image
                        accessibilityLabel="Logo de Compartilhamento do Podcast"
                        source={{
                          uri: isFavorite ? logoFavoritadoURL : logoFavoritarURL
                        }}
                        resizeMode="contain"
                        style={{
                          width: "50px",
                          height: "50px"
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text
                   //@ts-ignore 
                    style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                    {title}
                  </Text>
                  <Text
                    numberOfLines={8}
                    //@ts-ignore
                    style={{
                      fontSize: "0.8rem",
                      padding: "5px",
                      marginTop: "10px",
                      width: "90%",
                      textAlign: "center"
                    }}
                  >
                    {description}
                  </Text>
                </ImageBackground>
              )
            )
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    width: "80%"
  },
  containerPodcasts: {
    //@ts-ignore
    with: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  cardPodcast: {
    margin: "10px",
    //@ts-ignore
    borderRadius: "5px",
    height: "300px",
    width: "200px",
    backgroundColor: "rgba(0,0,0,0.11)",
    boxShadow: "3px 3px 10px rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    padding: "10px"
  },
  favoritePodcastButton: {
    //@ts-ignore
    fontSize: "2rem",
    display: "flex",
    alignSelf: "flex-end"
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    //@ts-ignore
    fontSize: "1.4rem",
    marginVertical: "1em",
    textAlign: "left"
  },
  TextoErro: {
    textAlign: "center",
    width: "100%",
    //@ts-ignore
    fontSize: "1rem"
  },
  text: {//@ts-ignore
    lineHeight: "1.5em",
    //@ts-ignore
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default Favoritos;