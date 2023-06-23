
import React, { FC, useState } from 'react';
import Context, { IPodcastProps } from './context';

interface IGlobalStateProps {
  children: React.ReactNode
}

export const GlobalState: FC<IGlobalStateProps> = ({ children }) => {

  const [ podcasts, setPodcasts ] = useState<Array<IPodcastProps>>([
    {
        id: 1,
        title: "Flow Podcast",
        description: "A melhor conversa que você vai ouvir. 🌻💛",
        url: "https://www.youtube.com/@FlowPodcast/videos",
        imgURL: "",
        isFavorite: false
    },
    {
        id: 2,
        title: "Podpah",
        description: "O canal mais zika da internet",
        url: "https://www.youtube.com/@Podpah/videos",
        imgURL: "",
        isFavorite: false
    },
    {
        id: 3,
        title: "Inteligência Ltda",
        description:
            "O podcast Inteligência Ltda. é um bate-papo livre de preconceitos, um debate de ideias e teorias, achismos em geral e maluquices com alto teor de verdade que tornarão Rogério Vilela e (esperamos) você, mais inteligentes.",
        url: "https://www.youtube.com/@inteligencialtda/videos",
        imgURL: "",
        isFavorite: false
    },
    {
        id: 4,
        title: "Podcats",
        description:
            "Camila Loures e Lucas Guimarães se unem para bater um papo super descontraído e animado no PODCATS!",
        url: "https://www.youtube.com/@podcats/podcasts",
        imgURL: "",
        isFavorite: false
    },
    {
        id: 5,
        title: "Os Sócios Podcast",
        description:
            "Os Sócios Podcast é um podcast oficial do Grupo Primo. Toda semana, pelo menos um novo episódio para falar empreendedorismo, política, finanças e negócios com muita descontração. Tudo isso com convidados muito especiais, entre eles grandes empreendedores, políticos, filósofos, celebridades, entre outras grandes personalidades.",
        url: "https://www.youtube.com/@ossocios/videos",
        imgURL: "",
        isFavorite: false
    },
    {
        id: 6,
        title: "Venus Podcast ",
        description: "Apertem os cintos, pois estamos indo para Venus! 🚀",
        url: "https://www.youtube.com/@venuspdc/videos",
        imgURL: "",
        isFavorite: false
    },
    {
        id: 7,
        title: "Joel Jota ",
        description:
            "Sejam bem-vindos ao canal oficial do treinador de alta performance, escritor best seller e empresário, Joel Jota.",
        url: "https://www.youtube.com/@JoelJota/videos",
        imgURL: "",
        isFavorite: false
    },
    {
        id: 8,
        title: "Groselha Talk ",
        description:
            "O Podcast mais divertido do Brasil! Apresentado por Muca Muriçoca e gORDOx.",
        url: "https://www.youtube.com/@GroselhaTalk/videos",
        imgURL: "",
        isFavorite: false
    },
    {
        id: 9,
        title: "Minuto Jovem - PodCast",
        description:
            "Somos um canal de comunicação, onde recebemos os mais diversos tipos de assuntos e pensamentos! O Minuto Jovem PodCast, não é um programa de cunho exclusivamente religioso! Mas é formado por cristãos evangélicos. O que faz com que nossas opiniões tendam para esse lado! Sejam bem-vindos! ",
        url: "https://www.youtube.com/@minutojovem/videos",
        imgURL: "",
        isFavorite: false
    },
    {
        id: 10,
        title: "Ciência Sem Fim ",
        description: "O seu conteúdo de ciência favorito! 🪐",
        url: "https://www.youtube.com/@CienciaSemFim/videos",
        imgURL: "",
        isFavorite: false
    },
    {
        id: 11,
        title: "TICARACATICAST",
        description:
            "Bola e Carioca batem um papo de qualidade com direito a muitas risadas e descontração aqui no Ticaracaticast.",
        url: "https://www.youtube.com/s@TICARACATICAST/videos",
        imgURL: "",
        isFavorite: false
    },
    {
        id: 12,
        title: "Poccast Oficial ",
        description:
            "✨ O pod mais poc da internet veio aí! O PocCast é o seu mais novo espaço favorito, comandado por Rafa Uccman e Lucas Guedez, entrevistando os melhores convidados! Aqui você vai poder ser o que quiser, então já escolhe sua melhor roupa e vem confirmar presença nesse evento!",
        url: "https://www.youtube.com/@poccastofc",
        imgURL: "",
        isFavorite: false
    }]);

  const desFavoritePodcast = (id: number) => {
    
    const newArrayPodcast = podcasts.filter(podcast => {
    
      if (podcast.id === id) {
        podcast.isFavorite = false;
      };

      return podcast;

    });

    setPodcasts(newArrayPodcast);
  };  

  const favoritePodcast = (id: number) => {
    
    const newArrayPodcast = podcasts.filter(podcast => {
    
      if (podcast.id === id) {
        podcast.isFavorite = true;
      };

      return podcast;

    });

    setPodcasts(newArrayPodcast);
  };

  return (
    <Context.Provider
      value={{
        podcasts,
        desFavoritePodcast,
        favoritePodcast
      }}
    >
      {children}
    </Context.Provider>
  );
}
