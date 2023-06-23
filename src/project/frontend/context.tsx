import React from 'react';

export interface IPodcastProps {
    title: string,
    description: string,
    url: string,
    imgURL: string,
    id: number,
    isFavorite: boolean
}

export default React.createContext<{
    podcasts: [] | IPodcastProps[]
    desFavoritePodcast: (podcastId: number) => void;
    favoritePodcast: (podcastId: number) => void;
}>({
    podcasts: [],
    desFavoritePodcast: (podcastId) => { },
    favoritePodcast: (podcastId) => { }
});
