import * as React from 'react';

import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import { IPodcastProps } from '../../context';

interface ICardProps {
    img: {
        url: string;
    },
    podcast: Omit<IPodcastProps, 'imgURL'>,
    buttons: 'Full' | 'Favorite' | 'Compartilhar'
};

import context from '../../context';

export const Card: React.FC<ICardProps> = ({ img, podcast, buttons }) => {

    const { toogleFavoritePodcast } = React.useContext(context);

    const shareWhatsApp = ({ event, url, title }: { event: any, url: string, title: string }) => {
        event.preventDefault();

        Linking.openURL(
            `http://api.whatsapp.com/send/?text=Oie, tudo bem? %0A%0A Você já ouviu o podcast _*${title}*_? Ele anda em alta no Youtube e eu Recomendo Muito!! %0A Caso tenha interesse acesse esse link: _*${url}*_`
        );
    };

    return (
        <View style={{ width: 250, borderRadius: 20, height: 400, padding: 20, backgroundColor: '#c9c9f4' }} >
            <View style={{ width: 200, borderRadius: 10, marginBottom: 10, height: 'auto', alignSelf: 'center' }} >
                <Image
                    style={{
                        width: 200,
                        height: 150,
                        borderRadius: 10,
                        resizeMode: 'contain',
                    }}
                    source={{
                        uri: img.url,
                    }} />
            </View>
            <View
                style={{
                    marginTop: 10,
                    width: 200,
                    flexDirection: 'row',
                    alignSelf: 'center',
                    justifyContent: 'space-around',
                    position: 'relative',
                    zIndex: 999,
                }}
            >
                {
                    buttons === 'Full' || buttons === 'Favorite' ?
                        <TouchableOpacity
                            onPress={(event) => {
                                event.preventDefault();
                                toogleFavoritePodcast(podcast.id);
                            }}
                        >
                            <Image
                                style={{
                                    width: 40,
                                    height: 40,
                                    resizeMode: 'contain',
                                }}
                                source={{
                                    uri: podcast.isFavorite ? "data:image/png;base64,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" : 'data:image/png;base64,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',
                                }} />
                        </TouchableOpacity>
                        : ''
                }
                {
                    buttons === 'Full' || buttons === 'Compartilhar' ?
                        <TouchableOpacity
                            onPress={(event) => shareWhatsApp({ event, title: podcast.title, url: podcast.url })}
                        >
                            <Image
                                style={{
                                    width: 40,
                                    height: 40,
                                    resizeMode: 'contain',
                                }}
                                source={{
                                    uri: 'data:image/png;base64,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',
                                }} />
                        </TouchableOpacity>
                        : ''
                }
            </View>
            <View style={{ width: 250, padding: 20, alignSelf: 'center', alignItems: 'center', gap: 10 }} >
                <Text style={{ color: '#ffff', fontSize: 20, fontWeight: 'bold' }} >{podcast.title}</Text>
                <Text numberOfLines={4} style={{ color: '#ffff' }} >{podcast.description}</Text>
            </View>
        </View>
    );
}