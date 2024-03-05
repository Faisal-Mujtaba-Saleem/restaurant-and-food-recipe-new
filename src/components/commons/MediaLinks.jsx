import React from 'react';
import facebook from '../../assets/svgs/mediaSvgs/facebook.svg';
import twitter from '../../assets/svgs/mediaSvgs/twitter.svg';
import messanger from '../../assets/svgs/mediaSvgs/messanger.svg';

const MediaLinks = ({ mediaNames }) => {
    const mediaLinks = mediaNames.map((mediaName) => {
        let link;
        switch (mediaName) {
            case 'facebook':
                link = facebook;
                break;
            case 'twitter':
                link = twitter;
                break;
            case 'messanger':
                link = messanger;
                break;
            default:
                break;
        }
        return {
            linkHref: `https://www.${mediaName}.com/`,
            linkTarget: '_blank',
            link: link,
            linkAlt: mediaName,
        };
    });

    return mediaLinks.map((mediaLink, index) => (
        <a key={index} href={mediaLink.linkHref} target={mediaLink.linkTarget} className="ml-2 text-gray-500">
            <img src={mediaLink.link} alt={mediaLink.linkAlt} width={16} />
        </a>
    ));
};

export default MediaLinks;