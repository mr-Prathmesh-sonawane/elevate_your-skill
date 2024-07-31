import React from 'react';
import './ChannelCard.css';

const ChannelCard = ({ channel }) => {
    return (
        <div className="channel-card">
            <img src="https://marketingtool.online/en/youtube-thumbnail-download/images/placeholder.jpg" alt={`${channel.title} thumbnail`} className="channel-thumbnail" />
            <div className="channel-info">
                <h2>{channel.title}</h2>
                <p>{channel.description}</p>
                <a href={channel.url} target="_blank" rel="noopener noreferrer" className="channel-link">
                    Visit Channel
                </a>
            </div>
        </div>
    );
};

export default ChannelCard;
