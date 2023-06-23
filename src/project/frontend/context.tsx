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
    toogleFavoritePodcast: (podcastId: number) => void;
}>({
    podcasts: [],
    toogleFavoritePodcast: (podcastId) => { }
});
