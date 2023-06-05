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

function Compartilhar() {
  const [dataPodcasts, setDataPodcasts] = useState<Array<IPodcast>>([
    {
      title: "Flow Podcast",
      description: "A melhor conversa que você vai ouvir. 🌻💛",
      url: "https://www.youtube.com/@FlowPodcast/videos",
      isFavorite: false,
      imgURL: ""
    },
    {
      title: "Podpah",
      description: "O canal mais zika da internet",
      url: "https://www.youtube.com/@Podpah/videos",
      isFavorite: false,
      imgURL: ""
    },
    {
      title: "Inteligência Ltda",
      description:
        "O podcast Inteligência Ltda. é um bate-papo livre de preconceitos, um debate de ideias e teorias, achismos em geral e maluquices com alto teor de verdade que tornarão Rogério Vilela e (esperamos) você, mais inteligentes.",
      url: "https://www.youtube.com/@inteligencialtda/videos",
      isFavorite: false,
      imgURL: ""
    },
    {
      title: "Podcats",
      description:
        "Camila Loures e Lucas Guimarães se unem para bater um papo super descontraído e animado no PODCATS!",
      url: "https://www.youtube.com/@podcats/podcasts",
      isFavorite: false,
      imgURL: ""
    },
    {
      title: "Os Sócios Podcast",
      description:
        "Os Sócios Podcast é um podcast oficial do Grupo Primo. Toda semana, pelo menos um novo episódio para falar empreendedorismo, política, finanças e negócios com muita descontração. Tudo isso com convidados muito especiais, entre eles grandes empreendedores, políticos, filósofos, celebridades, entre outras grandes personalidades.",
      url: "https://www.youtube.com/@ossocios/videos",
      isFavorite: false,
      imgURL: ""
    },
    {
      title: "Venus Podcast ",
      description: "Apertem os cintos, pois estamos indo para Venus! 🚀",
      url: "https://www.youtube.com/@venuspdc/videos",
      isFavorite: false,
      imgURL: ""
    },
    {
      title: "Joel Jota ",
      description:
        "Sejam bem-vindos ao canal oficial do treinador de alta performance, escritor best seller e empresário, Joel Jota.",
      url: "https://www.youtube.com/@JoelJota/videos",
      isFavorite: false,
      imgURL: ""
    },
    {
      title: "Groselha Talk ",
      description:
        "O Podcast mais divertido do Brasil! Apresentado por Muca Muriçoca e gORDOx.",
      url: "https://www.youtube.com/@GroselhaTalk/videos",
      isFavorite: false,
      imgURL: ""
    },
    {
      title: "Minuto Jovem - PodCast",
      description:
        "Somos um canal de comunicação, onde recebemos os mais diversos tipos de assuntos e pensamentos! O Minuto Jovem PodCast, não é um programa de cunho exclusivamente religioso! Mas é formado por cristãos evangélicos. O que faz com que nossas opiniões tendam para esse lado! Sejam bem-vindos! ",
      url: "https://www.youtube.com/@minutojovem/videos",
      isFavorite: false,
      imgURL: ""
    },
    {
      title: "Ciência Sem Fim ",
      description: "O seu conteúdo de ciência favorito! 🪐",
      url: "https://www.youtube.com/@CienciaSemFim/videos",
      isFavorite: false,
      imgURL: ""
    },
    {
      title: "TICARACATICAST",
      description:
        "Bola e Carioca batem um papo de qualidade com direito a muitas risadas e descontração aqui no Ticaracaticast.",
      url: "https://www.youtube.com/s@TICARACATICAST/videos",
      isFavorite: false,
      imgURL: ""
    },
    {
      title: "Poccast Oficial ",
      description:
        "✨ O pod mais poc da internet veio aí! O PocCast é o seu mais novo espaço favorito, comandado por Rafa Uccman e Lucas Guedez, entrevistando os melhores convidados! Aqui você vai poder ser o que quiser, então já escolhe sua melhor roupa e vem confirmar presença nesse evento!",
      url: "https://www.youtube.com/@poccastofc",
      isFavorite: false,
      imgURL: ""
    }
  ]);

  useEffect(() => {
    if (!!localStorage.getItem("Podcasts"))
      setDataPodcasts(JSON.parse(localStorage.getItem("Podcasts") as string));
  }, []);

  const favoritePodcast = ({ title }: { title: string }) => {
    setDataPodcasts(
      dataPodcasts.filter((podcast) => {
        if (podcast.title === title) {
          podcast.isFavorite = !podcast.isFavorite;
        }
        localStorage.clear();
        return podcast;
      })
    );

    localStorage.setItem("Podcasts", JSON.stringify(dataPodcasts));
  };

  const shareWhatsApp = ({ event, url, title }: { event: any, url: string, title: string }) => {
    event.preventDefault();

    Linking.openURL(
      `https://web.whatsapp.com/send/?text=Oie, tudo bem? %0A%0A Você já ouviu o podcast Podpah? Ele anda em alta no Youtube e eu Recomendo Muito!! %0A Caso tenha interesse acesse esse link: _*https://www.youtube.com/@Podpah/videos*_`
    );
  };

  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Image
          accessibilityLabel="React logo"
          source={{ uri: logoURL }}
          resizeMode="contain"
          //@ts-ignore
          style={styles.logo}
        />
      </View>
      <View>
        <Text style={styles.title}>Em Alta</Text>
        <View style={styles.containerPodcasts}>
          {dataPodcasts.map(
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
  text: {
    //@ts-ignore
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

export default Compartilhar;