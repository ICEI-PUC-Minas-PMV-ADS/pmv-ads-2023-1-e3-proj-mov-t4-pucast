import React from "react";
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

function Feed () {
  const dataPodcasts = [
    {
      title: "Flow Podcast",
      description: "A melhor conversa que você vai ouvir. 🌻💛",
      url: "https://www.youtube.com/@FlowPodcast/videos",
      imgURL: ""
    },
    {
      title: "Podpah",
      description: "O canal mais zika da internet",
      url: "https://www.youtube.com/@Podpah/videos",
      imgURL: ""
    },
    {
      title: "Inteligência Ltda",
      description:
        "O podcast Inteligência Ltda. é um bate-papo livre de preconceitos, um debate de ideias e teorias, achismos em geral e maluquices com alto teor de verdade que tornarão Rogério Vilela e (esperamos) você, mais inteligentes.",
      url: "https://www.youtube.com/@inteligencialtda/videos",
      imgURL: ""
    },
    {
      title: "Podcats",
      description:
        "Camila Loures e Lucas Guimarães se unem para bater um papo super descontraído e animado no PODCATS!",
      url: "https://www.youtube.com/@podcats/podcasts",
      imgURL: ""
    },
    {
      title: "Os Sócios Podcast",
      description:
        "Os Sócios Podcast é um podcast oficial do Grupo Primo. Toda semana, pelo menos um novo episódio para falar empreendedorismo, política, finanças e negócios com muita descontração. Tudo isso com convidados muito especiais, entre eles grandes empreendedores, políticos, filósofos, celebridades, entre outras grandes personalidades.",
      url: "https://www.youtube.com/@ossocios/videos",
      imgURL: ""
    },
    {
      title: "Venus Podcast ",
      description: "Apertem os cintos, pois estamos indo para Venus! 🚀",
      url: "https://www.youtube.com/@venuspdc/videos",
      imgURL: ""
    },
    {
      title: "Joel Jota ",
      description:
        "Sejam bem-vindos ao canal oficial do treinador de alta performance, escritor best seller e empresário, Joel Jota.",
      url: "https://www.youtube.com/@JoelJota/videos",
      imgURL: ""
    },
    {
      title: "Groselha Talk ",
      description:
        "O Podcast mais divertido do Brasil! Apresentado por Muca Muriçoca e gORDOx.",
      url: "https://www.youtube.com/@GroselhaTalk/videos",
      imgURL: ""
    },
    {
      title: "Minuto Jovem - PodCast",
      description:
        "Somos um canal de comunicação, onde recebemos os mais diversos tipos de assuntos e pensamentos! O Minuto Jovem PodCast, não é um programa de cunho exclusivamente religioso! Mas é formado por cristãos evangélicos. O que faz com que nossas opiniões tendam para esse lado! Sejam bem-vindos! ",
      url: "https://www.youtube.com/@minutojovem/videos",
      imgURL: ""
    },
    {
      title: "Ciência Sem Fim ",
      description: "O seu conteúdo de ciência favorito! 🪐",
      url: "https://www.youtube.com/@CienciaSemFim/videos",
      imgURL: ""
    },
    {
      title: "TICARACATICAST",
      description:
        "Bola e Carioca batem um papo de qualidade com direito a muitas risadas e descontração aqui no Ticaracaticast.",
      url: "https://www.youtube.com/s@TICARACATICAST/videos",
      imgURL: ""
    },
    {
      title: "Poccast Oficial ",
      description:
        "✨ O pod mais poc da internet veio aí! O PocCast é o seu mais novo espaço favorito, comandado por Rafa Uccman e Lucas Guedez, entrevistando os melhores convidados! Aqui você vai poder ser o que quiser, então já escolhe sua melhor roupa e vem confirmar presença nesse evento!",
      url: "https://www.youtube.com/@poccastofc",
      imgURL: ""
    }
  ];

  const shareWhatsApp = ({ event, url, title }) => {
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
          style={styles.logo}
        />
      </View>
      <View>
        <Text style={styles.title}>Em Alta</Text>
        <View style={styles.containerPodcasts}>
          {dataPodcasts.map(({ title, description, url, imgURL }) => (
            <ImageBackground
              key={`${title}.${description}.${url}`}
              style={styles.cardPodcast}
              source={imgURL}
              resizeMode="contain"
            >
              <View
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
                    shareWhatsApp({ event: e, url, title });
                  }}
                  style={styles.favoritePodcastButton}
                >
                  <Image
                    accessibilityLabel="Logo de Compartilhamento do Podcast"
                    source={{ uri: logoFavoritarURL }}
                    resizeMode="contain"
                    style={{
                      width: "50px",
                      height: "50px"
                    }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                {title}
              </Text>
              <Text
                numberOfLines={8}
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
          ))}
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
    with: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  cardPodcast: {
    margin: "10px",
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
    fontSize: "1.4rem",
    marginVertical: "1em",
    textAlign: "left"
  },
  text: {
    lineHeight: "1.5em",
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

export default Feed;
